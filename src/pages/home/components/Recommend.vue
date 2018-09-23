<template>
    <div>
      <div class="title">热销推荐</div>
      <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
            <img class="item-img" :src="item.imgUrl" alt="" />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
  // data () {
  //   return {
  //     recommendList: [{
  //       id: '001',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }, {
  //       id: '002',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }, {
  //       id: '003',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }, {
  //       id: '004',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }, {
  //       id: '005',
  //       imgUrl: 'http://img1.qunarzz.com/sight/p0/1809/c9/c9ab2722d2990967a3.img.jpg_200x200_b4832539.jpg',
  //       title: '芭拉胡景区',
  //       desc: '描述描述描述描述描述'
  //     }]
  //   }
  // }
}
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "~styles/mixins.styl"
  .title
    margin-top .1rem
    line-height:  .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height 1.9rem
    .item-img
      width 1.7rem
      height: 1.7rem
      padding:  .1rem
    .item-info
      flex 1
      padding: .1rem
      /*为了使title标题过长后显示为...*/
      min-width:  0
      .item-title
        line-height:  .54rem
        font-size:  .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #eee
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top .16rem
        background: #ff9300
        padding:  0 .2rem
        border-radius .06rem
        color: #fff
</style>
