<template>
    <div class="wrapper">
        <text class="tlt">
            {{title}}
        </text>
        <div class="box">
            <div class="box-item" v-for="i in items" @click="jumpWeb">
                
            </div>
        </div>
    </div>
</template>

<script>
const navigator = weex.requireModule("navigator");
import util from "../util.js";
export default {
  props: ["title", "items"],
  data() {
    return {};
  },
  methods: {
    jumpWeb() {
      navigator.push({
        url: util.setBundleUrl("/page/webview.js"),
        animated: "true"
      });
    }
  }
};
</script>

<style>
.wrapper {
  background-color: white;
}
.tlt {
  text-align: center;
  font-size: 30px;
  color: #333;
  width: 750px;
}
.box {
    flex-direction: row;
    /* 换行 */
    flex-wrap: wrap;
    /* 项目在主轴上的对齐方式 */
    justify-content: center;
    width: 750px;
    height: 120px;
    background-color: aqua
}
</style>
