<template>
    <div class="wrapper">
        <div class="scan">
            <text class="txt">扫一扫</text>
        </div>
        <div class="search">
            <text class="txt" @click="jumpWeb()">搜索商品，共8888款好物</text>
        </div>

        <div class="notice"> 
            <text class="txt">消息</text>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        /* 位置相对于浏览器的窗口位置，不随内容而滚动 */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 114px;
        /* 容器上的属性，不换行 */
        flex-wrap: nowrap;
        flex-direction: row;
        align-items: center;
        /* item 在主轴行的对其方式。每个item两侧的间隔相等 */
        justify-content: space-around;
        background-color: #fafafa;
        opacity: .99;
    }
    .scan, .notice {
        height: 80px;
        width: 96px;
        justify-content: center;
    }

    .txt {
        text-align: center;
        color: #666;
    }
    .search {
        flex: 1;
        justify-content: center;
        height: 60;
        font-size: 26px;
        background-color: #ededed;
        border-radius: 8px;
    }

</style>

<script>
    import util from '../util.js'

    const navigator = weex.requireModule('navigator');
    const modal = weex.requireModule('modal');

    export default {
        data() {
            return {

            }
        },
        methods: {
            jumpWeb(url) {
                // if(!url) url = 'https://www.baidu.com'
                // $getConfig() 可以获取全局信息，如设备宽高，bundleUrl，appVersion等
                const tempUrl = this.$getConfig().bundleUrl;
                modal.toast({
                    message: tempUrl
                })
                // 这里的地址不对，需要改
                navigator.push({
                    // http://192.168.31.220:8081/dist/page/webview.js
                    url: util.setBundleUrl('/page/webview.js'),
                    animated: "true"
                })

            }
        }
    }
</script>
