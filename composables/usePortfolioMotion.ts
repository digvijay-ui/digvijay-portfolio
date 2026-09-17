import { onBeforeUnmount, onMounted } from 'vue'

/** Progressive enhancement: SSR and reduced-motion content stay visible. */
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
      const targets: HTMLElement[] = []
      // Reveal small groups independently, including long project sections.
      document.querySelectorAll<HTMLElement>('main > section:not(.night-hero)').forEach(section => {
        const groups = section.querySelectorAll<HTMLElement>('[class$="__inner"], [class$="__content"], .experience-list, .projects-section__list, .project-showcase, .faq-list')
        groups.forEach(group => {
          const children = Array.from(group.children).filter((child): child is HTMLElement => child instanceof HTMLElement)
          children.forEach((child, index) => {
            if (child.matches('[class$="__content"], .experience-list, .projects-section__list, .project-showcase, .faq-list')) return
            child.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 90}ms`)
            child.classList.add('reveal-target')
            targets.push(child)
          })
        })
      })
      const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer?.unobserve(entry.target)
          }
        })
      }, { threshold: 0, rootMargin: '0px 0px -24px 0px' }) : null
      targets.forEach(target => {
        if (observer && target.getBoundingClientRect().top >= window.innerHeight) {
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
      window.addEventListener('blur', resetButtons, options)
      fine.addEventListener('change', resetButtons, options)
      cleanup = () => {
        controller.abort()
        observer?.disconnect()
        targets.forEach(target => {
          target.classList.remove('reveal-pending', 'reveal-target')
          target.style.removeProperty('--reveal-delay')
        })
        resetButtons()
      }
    }
    configure()
    reduced.addEventListener('change', configure)
    dispose = () => { cleanup(); reduced.removeEventListener('change', configure) }
  })
  onBeforeUnmount(() => dispose())
}
