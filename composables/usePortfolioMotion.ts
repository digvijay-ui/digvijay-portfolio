import { onBeforeUnmount, onMounted } from 'vue'

/** Optional enhancements: content is visible before JS and when motion is disabled. */
export function usePortfolioMotion() {
  let dispose = () => {}
  onMounted(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)')
    let cleanup = () => {}
    const configure = () => {
      cleanup()
      if (reduced.matches) return
      const controller = new AbortController()
      const options = { passive: true, signal: controller.signal }
      const targets = Array.from(document.querySelectorAll<HTMLElement>('main section > div > .section-heading, main [class$="__heading"], .about-section__content, .experience-section__content, .education-block, .contact-section__content, .project-showcase__header, .project-showcase__media, .project-showcase__body, .faq-list, .skills-section__content'))
      const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer?.unobserve(entry.target)
          }
        })
      }, { threshold: 0, rootMargin: '0px 0px -32px 0px' }) : null
      targets.forEach(target => {
        target.classList.add('reveal-target')
        if (observer && target.getBoundingClientRect().top > window.innerHeight) {
          target.classList.add('reveal-pending')
          observer.observe(target)
        }
      })
      const buttons = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'))
      buttons.forEach(button => {
        button.addEventListener('pointermove', event => {
          if (!fine.matches || event.pointerType !== 'mouse') return
          const rect = button.getBoundingClientRect()
          button.style.translate = `${(event.clientX - rect.left - rect.width / 2) * .09}px ${(event.clientY - rect.top - rect.height / 2) * .12}px`
        }, options)
        button.addEventListener('pointerleave', () => { button.style.translate = '' }, options)
        button.addEventListener('blur', () => { button.style.translate = '' }, options)
      })
      const resetButtons = () => buttons.forEach(button => { button.style.translate = '' })
      window.addEventListener('scroll', resetButtons, options)
      fine.addEventListener('change', resetButtons, options)
      cleanup = () => {
        controller.abort()
        observer?.disconnect()
        targets.forEach(target => target.classList.remove('reveal-pending', 'reveal-target'))
        resetButtons()
      }
    }
    configure()
    reduced.addEventListener('change', configure)
    dispose = () => { cleanup(); reduced.removeEventListener('change', configure) }
  })
  onBeforeUnmount(() => dispose())
}
