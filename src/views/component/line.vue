<template>
  <div class="line_container">
    <p>Do not go gentle into that good night</p>
    <p>Old age should burn and rave at close of the day</p>
    <p>Rage, rage against the dying of the light</p>
    <p>Though wise men at their end know dark is right</p>
    <p>Because their words had forked no lightning they</p>
  </div>
</template>

<script>
export default {
  name: "line"
};
</script>

<style lang="scss" scoped>
.line_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
  opacity: 0.8;
  p {
    margin: 5px 0;
  }
}
</style>
