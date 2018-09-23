<template>
    <ul class="list">
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
      <li class="item">A</li>
    </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
}
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~styles/varibles.styl"
  .list
    /*让字母垂直居中*/
    display: flex
    flex-direction: column
    justify-content: center
    position absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .44rem
      text-align center
      color: $bgColor
</style>
