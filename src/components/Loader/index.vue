<template>
  <div class="overlay" v-if="isLoading">
    <div class="preloader">
      <span class="rot-1"></span>
      <span class="rot-2"></span>
      <span class="rot-3"></span>
      <span class="rot-4"></span>
      <span class="rot-5"></span>
      <span class="rot-6"></span>
      <span class="rot-7"></span>
      <span class="rot-8"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      required: true
    },
  },
}
</script>

<style scoped>

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(246, 245, 252, 0.7);
  opacity: 0.98;
}
.preloader {
  position: relative;
  width: 125px;
  height: 125px;
  margin: auto;
  transform: translateZ(0);
}
.preloader > span {
  position: absolute;
  background-color: transparent;
  height: 22px;
  width: 22px;
  border-radius: 12px;
  animation-name: f_fadeG;
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
}
.rot-1 {
  left: 0;
  top: 51px;
  animation-delay: 0.45s;
}
.rot-2 {
  left: 15px;
  top: 15px;
  animation-delay: 0.6s;
}
.rot-3 {
  left: 51px;
  top: 0;
  animation-delay: 0.75s;
}
.rot-4 {
  right: 15px;
  top: 15px;
  animation-delay: 0.9s;
}
.rot-5 {
  right: 0;
  top: 51px;
  animation-delay: 1.05s;
}
.rot-6 {
  right: 15px;
  bottom: 15px;
  animation-delay: 1.2s;
}
.rot-7 {
  left: 51px;
  bottom: 0;
  animation-delay: 1.35s;
}
.rot-8 {
  left: 15px;
  bottom: 15px;
  animation-delay: 1.5s;
}
@keyframes f_fadeG {
  0% {
    background-color: #ffd859;
  }
  100% {
    background-color: transparent;
  }
}

</style>
