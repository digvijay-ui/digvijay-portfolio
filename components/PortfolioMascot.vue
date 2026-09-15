<template>
  <div class="portfolio-mascot" aria-hidden="true">
    <div class="mascot-sprite">
      <span class="mascot-antenna" />
      <span class="mascot-head"><span class="mascot-hair" /><span class="mascot-eye mascot-eye--left" /><span class="mascot-eye mascot-eye--right" /><span class="mascot-mouth" /></span>
      <span class="mascot-neck" />
      <span class="mascot-body"><span class="mascot-badge" /></span>
      <span class="mascot-arm mascot-arm--left" /><span class="mascot-arm mascot-arm--right" />
      <span class="mascot-leg mascot-leg--left" /><span class="mascot-leg mascot-leg--right" />
    </div>
  </div>
</template>

<style scoped>
.portfolio-mascot { position: relative; flex: 0 0 48px; width: 48px; height: 54px; pointer-events: none; }
.mascot-sprite { position: absolute; right: 0; bottom: 0; width: 64px; height: 80px; transform: scale(.58); transform-origin: bottom right; }
.mascot-sprite span { position: absolute; display: block; }
.mascot-antenna { top: 0; left: 30px; width: 4px; height: 9px; background: var(--color-accent); box-shadow: 0 -4px 0 #fff; }
.mascot-head { top: 9px; left: 15px; width: 34px; height: 30px; border: 3px solid var(--color-accent); background: #101310; }
.mascot-hair { top: -3px; left: 4px; width: 22px; height: 7px; background: #fff; box-shadow: -4px 4px 0 #fff, 18px 4px 0 #fff; }
.mascot-eye { top: 12px; width: 5px; height: 5px; background: var(--color-accent); }
.mascot-eye--left { left: 8px; }
.mascot-eye--right { right: 8px; }
.mascot-mouth { left: 14px; bottom: 6px; width: 8px; height: 3px; background: #fff; }
.mascot-neck { top: 39px; left: 28px; width: 8px; height: 6px; background: var(--color-accent); }
.mascot-body { top: 44px; left: 18px; width: 28px; height: 24px; border: 3px solid #fff; background: #0d0d0f; }
.mascot-badge { top: 7px; right: 5px; width: 5px; height: 5px; background: var(--color-accent); }
.mascot-arm { top: 48px; width: 8px; height: 23px; background: var(--color-accent); transform-origin: 50% 4px; }
.mascot-arm--left { left: 11px; transform: rotate(12deg); }
.mascot-arm--right { right: 11px; transform: rotate(-12deg); }
.mascot-leg { top: 68px; width: 9px; height: 12px; background: #fff; }
.mascot-leg--left { left: 21px; }
.mascot-leg--right { right: 21px; }
</style>
