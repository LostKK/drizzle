<template>
  <div>
    <div class="d-flex row-reserve wrap z-0">
      <div style="height:100vh;width:100vw;background:yellow;">
        <banner />
      </div>

      <div style="height:50vh;width:100vw;background:red" class="d-flex">
        <div style="background:green;height:100%;width:25%;"></div>
        <div></div>
      </div>

      <div style="height:25vh;width:100vw;background:blue"></div>
    </div>
  </div>
</template>

<script>
import banner from "@/views/pages/banner.vue";

export default {
  name: "home",

  components: {
    banner
  }
};
</script>
