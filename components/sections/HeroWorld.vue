<script setup lang="ts">
// Deterministic pixel details keep SSR and hydration identical.
const stars = Array.from({ length: 75 }, (_, i) => ({ x: (i * 173 + 31) % 1440, y: (i * 97 + 19) % 520, size: i % 7 === 0 ? 3 : 1.5 }))
const trees = Array.from({ length: 24 }, (_, i) => ({ x: i * 67 - 35, y: 490 + (i * 13) % 70, h: 75 + (i * 29) % 145 }))
const grass = Array.from({ length: 380 }, (_, i) => ({ x: (i * 137) % 1440, y: 580 + (i * 43) % 320, w: 3 + i % 13, color: ['#102c20', '#183a28', '#204630', '#0b1d16'][i % 4] }))
</script>

<template>
  <svg class="night-world" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="night-sky" x2="0" y2="1"><stop stop-color="#050b0a"/><stop offset="1" stop-color="#142a20"/></linearGradient>
      <linearGradient id="night-ground" x2="0" y2="1"><stop stop-color="#153524"/><stop offset="1" stop-color="#06100c"/></linearGradient>
      <radialGradient id="terminal-light"><stop stop-color="#39ff6a" stop-opacity=".18"/><stop offset="1" stop-color="#39ff6a" stop-opacity="0"/></radialGradient>
      <radialGradient id="cursor-light"><stop stop-color="#85ffa4" stop-opacity=".22"/><stop offset="1" stop-color="#39ff6a" stop-opacity="0"/></radialGradient>
      <clipPath id="terminal-spotlight-clip"><rect x="820" y="430" width="420" height="360" rx="80"/></clipPath>
      <pattern id="night-grid" width="26" height="26" patternUnits="userSpaceOnUse"><rect width="1" height="1" fill="#9bceb0" opacity=".17"/></pattern>
      <pattern id="keyboard" width="24" height="13" patternUnits="userSpaceOnUse" patternTransform="skewX(-34)"><rect width="18" height="7" fill="#233b30"/></pattern>
      <g id="pine"><path d="M0 0h12v20h12v20h14v22h16v24h-40v34H-2V86h-38V62h14V40h14V20H0Z" fill="currentColor"/><path d="M0 20h12v20h12v22h14v12H4V55H-8V40H0Z" fill="#28503a" opacity=".35"/></g>
    </defs>
    <rect width="1440" height="900" fill="url(#night-sky)"/>
    <g class="world-depth">
      <rect width="1440" height="700" fill="url(#night-grid)"/>
      <g fill="#b2d3bd"><rect v-for="(star, i) in stars" :key="i" :x="star.x" :y="star.y" :width="star.size" :height="star.size" :opacity="i % 3 === 0 ? .55 : .2"/></g>
      <path d="M1160 140h34v8h14v34h-10v16h-36v-10h-12v-34h10Z" fill="#aac5af" opacity=".5"/><path d="M1180 134h30v60h-20v-12h-10Z" fill="#0b1712"/>
      <path d="M0 525l100-45 80 25 180-100 180 80 150-50 160 85 180-120 230 110 180-35v200H0Z" fill="#0d2119"/>
      <g fill="#193125" opacity=".65"><path d="M230 552V492h32v60h9v-85h34v85h12v-115h8v-18h7v18h12v115h17v-69h37v69h18v-94h26v94h21v-56h40v56Z"/><path d="M568 555v-74h40v74h10v-96h25v96h16v-57h38v57Z"/></g>
      <g v-for="(tree,i) in trees" :key="i" :transform="`translate(${tree.x} ${tree.y-tree.h}) scale(${tree.h/120})`" :style="{color: i % 2 ? '#122f21' : '#0a2017'}"><use href="#pine"/></g>
    </g>
    <path d="M0 614l170-36 210 28 190-22 260-17 230-40 180 34 200-12v351H0Z" fill="url(#night-ground)"/>
    <path d="M-40 694l400-67 350 35-175 37-200-21L0 768Z" fill="#284032" opacity=".45"/>
    <g shape-rendering="crispEdges"><rect v-for="(pixel,i) in grass" :key="i" :x="pixel.x" :y="pixel.y" :width="pixel.w" :height="3+i%4" :fill="pixel.color"/></g>
    <!-- A large foreground cedar frames the workspace. -->
    <g class="world-tree" shape-rendering="crispEdges">
      <path d="M1330 0h64v332h-16v134h-22v134h-30l-68 47h-78l122-85 22-145V205h-24V95h30Z" fill="#18271c"/>
      <path d="M1362 0h14v330h-12v112h-14v97h-12V307h10V107h14Z" fill="#384232" opacity=".5"/>
      <path d="M930 0h510v172h-52v51h-97v-32h-92v-41h-123v-31H930Z" fill="#0b2116"/>
      <path d="M1004 0h270v43h90v49h76v38h-133V94h-114V66h-132v27h-84V47h27Z" fill="#183a25"/>
      <path d="M1170 16h105v24h-55v24h-72V41h-52V20h74Z" fill="#295039" opacity=".5"/>
    </g>
    <g class="world-workspace">
      <ellipse class="laptop-glow" cx="1080" cy="688" rx="340" ry="190" fill="url(#terminal-light)"/>
      <path d="M783 751l248-76 308 40-241 120Z" fill="#06100c" opacity=".8"/>
      <!-- Stepped edges, a hinged screen and an isometric keyboard. -->
      <path d="M920 468h264v12h12v202h-12v12H914V480h6Z" fill="#3c5042"/>
      <path d="M929 480h250v191H929Z" fill="#060c09"/>
      <path d="M941 492h226v166H941Z" fill="#0c2115" stroke="#39ff6a" stroke-opacity=".4" stroke-width="2"/>
      <path d="M941 492h226v24H941Z" fill="#182f20"/>
      <g fill="#588367"><rect x="950" y="501" width="5" height="5"/><rect x="961" y="501" width="5" height="5"/><rect x="972" y="501" width="5" height="5"/></g>
      <g font-family="'JetBrains Mono', monospace" font-size="10" fill="#8ba995"><text x="993" y="508">digvijay — terminal</text><text x="954" y="539" fill="#39ff6a">❯ npm run build</text><text x="954" y="563">✓ interfaces compiled</text><text x="954" y="582">✓ API connected</text><text x="954" y="601">✓ ready to scale</text><text x="954" y="634" fill="#39ff6a">❯</text></g>
      <rect class="terminal-cursor" x="969" y="625" width="6" height="11" fill="#39ff6a"/>
      <path d="M914 686h273l-105 79H777v-13Z" fill="#42584a"/>
      <path d="M919 696h231l-68 48H824Z" fill="#0a1710"/>
      <path d="M919 696h231l-68 48H824Z" fill="url(#keyboard)"/>
      <path d="M920 746h74l-17 12h-78Z" fill="#66806b"/>
      <path d="M777 765h305l105-79v10l-102 80H789v-5h-12Z" fill="#20392a"/>
      <path d="M1188 756l91-22 69 14-88 30Z" fill="#4d5036"/><path d="M1188 756v12l72 23 88-31v-12l-88 30Z" fill="#232d1e"/><path d="M1210 754l55-14 51 10-54 18Z" fill="#67704d" opacity=".5"/>
      <path d="M844 650h29v42h-29Z" fill="#3e5140"/><path d="M873 657h10v23h-10" fill="none" stroke="#3e5140" stroke-width="5"/><path d="M850 636v-16m10 18v-25" stroke="#76987e" stroke-opacity=".3" stroke-width="2"/>
    </g>
    <g clip-path="url(#terminal-spotlight-clip)"><circle class="terminal-spotlight" cx="1050" cy="600" r="180" fill="url(#cursor-light)" opacity="0"/></g>
    <g color="#0a2116"><use href="#pine" transform="translate(45 580) scale(2.5)"/><use href="#pine" transform="translate(1400 640) scale(2.8)"/></g>
    <path d="M0 865h80v-20h70v24h110v-12h90v43H0Zm1200 35v-40h65v-16h70v20h105v36Z" fill="#07140d"/>
  </svg>
</template>
