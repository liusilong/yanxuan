<template>
    <div class="wrapper">
        <!-- 首页头部 height:114-->
        <home-header></home-header>
        <!-- height: 90 -->
        <wxc-tab-page
            class="wxc-tab-page"
            ref="wxc-tab-page"
            :tab-titles="tabTitles"
            :tab-styles="tabStyles"
            title-type="text"
            :tab-page-height="tabPageHeight"
            @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected">
            <!-- 这里的 list 需要 for 循环去往 tab-page 中添加 -->
            <list>
                <!-- TODO refresher -->
                <!--  banners 和 标语 cell -->
                <cell>
                    <yx-slider :imageList="YXBanners"></yx-slider>
                    <!-- 标语 -->
                    <div class="slogan">
                        <text class="i-slg">网易自营品牌</text>
                        <text class="i-slg">30天无忧退货</text>
                        <text class="i-slg">48小时快速退货</text>
                    </div>
                </cell>
                <!-- TODO 品牌制造商直供 cell -->
                <cell>
                  <div class="cell-button">
                    <block-1 :title="makers.title" :items="makers.items"></block-1>
                  </div>
                </cell>
                <!-- TODO 周一周四·新品发布 cell -->
                <!-- TODO 人气推荐·好物精选 cell -->
                <!-- TODO 猜你喜欢 cell -->
                <!-- 加载更多 -->
            </list>
        </wxc-tab-page>
    </div>
</template>

<style scoped>
.wrapper {
  flex-direction: column;
}
.wxc-tab-page {
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 114px;
  right: 0;
  bottom: 0;
}
.main-list {
  position: fixed;
  top: 204px;
  bottom: 90px;
  left: 0;
  right: 0;
}


.slogan {
  width: 750px;
  height: 60px;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  background-color: white;
}
.i-slg {
  height: 66px;
  font-size: 26px;
  padding-top: 16px;
  flex: 1;
  text-align: center;
  color: #b4282d;
}
.cell-button {
  margin-top: 8px;
}
</style>

<script>
var modal = weex.requireModule("modal");
import Header from "../components/Header.vue";
import { WxcTabPage } from "weex-ui";
import { tabConfig } from "./Config.js";
import YXSlider from "../components/YXSlider.vue";
import Block1 from "../components/Block1.vue"
import api from "../http/api.js";
export default {
  components: {
    "home-header": Header,
    "wxc-tab-page": WxcTabPage,
    "yx-slider": YXSlider,
    "block-1": Block1
  },
  data() {
    return {
      tabTitles: tabConfig.tabTitles,
      tabStyles: tabConfig.tabStyles,
      //   TODO 这里需要使用屏幕的高来计算
      tabPageHeight: 1334,
      YXBanners: [],
      makers: {
        title: '品牌制造商直供',
        items:[]
      }
    };
  },
  computed: {
    
  },
  created() {
    modal.toast({
      message: WXEnvironment.deviceModel
    })
    api.GET("api/home/index", res => {
      let result = res.data.result;
      this.YXBanners = result["banners"];
    });
  }
};
</script>
