<template>
  <div class="direct_container " v-bind:style="{ background: bgColor }">
    <div class="main container_long">
      <div
        class="single"
        @click="toNext('/')"
        v-bind:class="[alive === 'Home' ? 'alive' : 'notAlive']"
      >
        <font>Home</font>
      </div>
      <div
        class="single"
        @click="toNext({ name: 'work' })"
        v-bind:class="[alive === 'Work' ? 'alive' : 'notAlive']"
      >
        <font>Work</font>
      </div>

      <div
        class="single"
        @click="toNext({ name: 'collect' })"
        v-bind:class="[alive === 'Collect' ? 'alive' : 'notAlive']"
      >
        <font>Collect</font>
      </div>
      <div
        class="single"
        @click="toNext({ name: 'about2' })"
        v-bind:class="[alive === 'About' ? 'alive' : 'notAlive']"
      >
        <font>About</font>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "direct",

  props: {
    alive: {
      type: String,
      default: ""
    },

    bgColor: {
      type: String,
      default: ""
    }
  },

  data() {
    return {};
  },

  methods: {
    toNext(val) {
      this.$router.push(val);
    }
  }
};
</script>

<style lang="scss" scoped>
.direct_container {
  // position: absolute;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: 10vh;
  z-index: 10;
  .main {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 30%;
    .single {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 18px;
      font-weight: 500;
      color: #2e2e2e;
      width: 100%;
      height: 100%;
      font:hover {
        transform: scale(1.33);
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .container_long {
    width: 100% !important;
  }
}

.alive {
  color: #848484 !important;
  // transform: scale(1.33);
}

.notAlive {
}
</style>
