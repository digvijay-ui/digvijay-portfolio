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
      const stagger = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--motion-stagger')) || 70
      const revealSelector = [
        '.section-heading',
        '.about-section__statement',
        '.about-section__copy',
        '.about-system',
        '.quick-fact',
        '.experience-section__intro',
        '.experience-card__header',
        '.experience-card__stack',
        '.experience-milestone',
        '.projects-section__intro-block',
        '.project-showcase',
        '.skill-filters',
        '.skill-group',
        '.education-block',
        '.faq-section__inner > :first-child',
        '.faq-list > details',
        '.contact-section__meta-block',
        '.contact-section__intro',
        '.contact-details',
        '.contact-socials',
        '.contact-location',
        '.footer-signature__meta',
        '.footer-name',
        '.site-footer__inner',
      ].join(', ')
      const targets = Array.from(document.querySelectorAll<HTMLElement>(revealSelector))
      const sectionCounts = new Map<Element, number>()

      targets.forEach((target) => {
        const section = target.closest('section, footer') || document.body
        const index = sectionCounts.get(section) || 0
        sectionCounts.set(section, index + 1)
        target.style.setProperty('--reveal-delay', `${Math.min(index, 4) * stagger}ms`)
        target.classList.add('reveal-target')
      })

      const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            observer?.unobserve(entry.target)
          }
        })
      }, { threshold: .06, rootMargin: '0px 0px -8% 0px' }) : null

      targets.forEach(target => {
        const bounds = target.getBoundingClientRect()
        if (observer && bounds.top >= window.innerHeight * .88 && bounds.bottom > 0) {
          target.classList.add('reveal-pending')
          observer.observe(target)
        }
      })

      document.addEventListener('focusin', (event) => {
        const target = event.target instanceof Element ? event.target.closest<HTMLElement>('.reveal-pending') : null
        if (!target) return
        target.classList.remove('reveal-pending')
        observer?.unobserve(target)
      }, options)

      const buttons = Array.from(document.querySelectorAll<HTMLElement>('[data-magnetic]'))
      buttons.forEach(button => {
        button.addEventListener('pointermove', event => {
          if (!fine.matches || event.pointerType !== 'mouse') return
          const rect = button.getBoundingClientRect()
          button.style.translate = `${(event.clientX - rect.left - rect.width / 2) * .08}px ${(event.clientY - rect.top - rect.height / 2) * .1}px`
        }, options)
        button.addEventListener('pointerleave', () => { button.style.translate = '' }, options)
        button.addEventListener('pointercancel', () => { button.style.translate = '' }, options)
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
