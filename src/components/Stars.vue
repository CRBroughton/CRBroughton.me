<template>
  <div ref="sky" id="sky"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, type VNodeRef } from "vue";

const sky = ref<VNodeRef | undefined>(undefined);
const center = ref({ x: 0, y: 0 });

function getRandomColor() {
  const random = Math.random() * 100;
  if (random <= 60) {
    return '#fcfcd9'; // 60% chance for yellow
  } else if (random <= 90) {
    return 'white'; // 30% chance for white
  } else {
    return '#ab4949'; // 10% chance for red
  }
}

function getRandomSize(size: number) {
  if (size <= 60) {
    return 4; // 60% chance for yellow
  } else if (size <= 90) {
    return 2 // 30% chance for white
  } else {
    return 1 // 10% chance for red
  }
}

const dot = (i: numbers, size: number) => {
  const root = document.createElement("span");
  root.style.top = center.value.y + "px";
  root.style.left = center.value.x + "px";
  root.style.width = size + "px";
  root.style.height = size + 'px';
  root.style.backgroundColor = getRandomColor();
  root.classList.add("star", `axis-${i}`);
  return root;
};

const clear = () => {
  if (sky.value) {
    sky.value.innerHTML = "";
  }
};

const updateCenter = () => {
  if (sky.value) {
    center.value = {
      x: sky.value.clientWidth / 2,
      y: sky.value.clientHeight / 2,
    };
    clear();
    for (let i = 0; i < 360; i++) {
      const size = Math.round(Math.random() * 100);
      sky.value.appendChild(dot(i, getRandomSize(size)));
    }
  }
};

const init = () => {
  if (sky.value) {
    updateCenter();
  }
};

onMounted(() => {
  init();
  window.addEventListener("resize", updateCenter);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateCenter);
});
</script>

<style  lang="scss">
$pi: 3.14159265359;
$_precision: 10;

@function pow($base, $exp) {
  $value: $base;

  @if $exp >1 {
    @for $i from 2 through $exp {
      $value: $value * $base;
    }
  }

  @if $exp < 1 {
    @for $i from 0 through -$exp {
      $value: $value / $base;
    }
  }

  @return $value;
}

@function fact($num) {
  $fact: 1;

  @if $num >0 {
    @for $i from 1 through $num {
      $fact: $fact * $i;
    }
  }

  @return $fact;
}

@function _to_unitless_rad($angle) {
  @if unit($angle)=="deg" {
    $angle: $angle / 180deg * $pi;
  }

  @if unit($angle)=="rad" {
    $angle: $angle / 1rad;
  }

  @return $angle;
}

@function sin($angle) {
  $a: _to_unitless_rad($angle);
  $sin: $a;

  @for $n from 1 through $_precision {
    $sin: $sin + (pow(-1, $n) / fact(2 * $n + 1)) * pow($a, (2 * $n + 1));
  }

  @return $sin;
}

@function cos($angle) {
  $a: _to_unitless_rad($angle);
  $cos: 1;

  @for $n from 1 through $_precision {
    $cos: $cos + (pow(-1, $n) / fact(2 * $n)) * pow($a, 2 * $n);
  }

  @return $cos;
}

@function tan($angle) {
  @return sin($angle) / cos($angle);
}

@function reminder($origin, $mod) {
  $q: if(($origin / $mod) > 0,
      floor($origin / $mod),
      ceil($origin / $mod));
  @return $origin - ($mod * $q);
}

html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

#sky {
  width: 100%;
  height: 100%;
  background-color: black;
  position: absolute;
  overflow: hidden;
}

.star {
  opacity: 0;
  position: absolute;
  box-shadow: 0px 0px 20px 0px rgb(255, 255, 255);
  border-radius: 100%;
  transform-origin: 0, 0;
  animation-timing-function: linear, linear !important;
  animation-iteration-count: infinite, infinite !important;
  animation-delay: -30s, -30s !important;
}

.size-1 {
  width: 1px;
  height: 1px;
}

.size-2 {
  width: 5px;
  height: 5px;
}

@for $i from 1 to 361 {
  $t: random(40000) + 5000;
  $angle: $i - reminder($i, 4);

  .axis-#{$i} {
    animation: anim#{$angle} #{$t}ms, fade#{random(10)} #{$t}ms, blur #{$t}ms infinite, shine 2s infinite;

  }
}

@for $i from 1 to 11 {
  $start: random(20);
  $end: $start + 10;

  @keyframes fade#{$i} {
    #{$start + "%"} {
      opacity: 0;
    }

    #{$end + "%"} {
      opacity: 1;
    }

    100% {
      opacity: 1;
    }
  }
}

@for $i from 1 to 91 {
  $a: $i * 4;

  @keyframes anim#{$a} {
    $angle: $pi * 2 * ($a / 360);
    $y: 80 * sin($angle);
    $x: 80 * cos($angle);

    100% {
      transform: translate(#{$x}vw, #{$y}vh);
    }
  }
}

@keyframes shine {
  0%, 100% {
    box-shadow: 0 0 8px 1px rgba(186, 186, 186, 0.5);
  }
 
}

@keyframes blur {
  0% {
    transform: translate(0, 0);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

</style>
