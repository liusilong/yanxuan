<template>
    <div class="wrapper">
        <div class="toolbar">
            <div class="left">
                <text class="btnTxt" @click="back">返回</text>
                <text class="btnTxt" @click="close">关闭</text>
            </div>
            <div class="right">
                <text class="btnTxt" @click="reload">刷新</text>
            </div>
        </div>

        <!-- webview -->
        <web ref="wv" class="webview" :src="url"></web>
    </div>
</template>

<script>
const modal = weex.requireModule("modal");
const webview = weex.requireModule('webview');
const navigator = weex.requireModule('navigator')
export default {
  data() {
    return {
      url: "https://vuejs.org"
    };
  },
  methods: {
    back() {
      webview.goBack(this.$refs.wv);
    },
    close() {
      navigator.pop({
          animated: true
      })
    },
    reload() {
      webview.reload(this.$refs.wv);
    }
  }
};
</script>

<style scoped>
.wrapper {
  /* 可定位于相对于包含它的元素的坐标 */
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
}
.toolbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 114px;
  background-color: #fafafa;
  opacity: 0.99;
  z-index: 101;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
}
.left,
.right {
  height: 68px;
  width: 150px;
  padding-top: 10px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.left {
  justify-content: flex-start;
  padding-left: 20px;
  margin-left: 20px;
}
.right {
  justify-content: flex-end;
  padding-right: 20px;
  margin-right: 20px;
}
.btnTxt {
  width: 70px;
  color: #666;
}
.webview {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>

