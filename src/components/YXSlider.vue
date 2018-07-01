<template>
    <slider class="slider" auto-play="true" interval="5000" @change="onchange" infinite="true">
        <div class="frame" v-for="img in imageList">
            <image class="image" resize="cover" :src="img.src"></image>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>

<script>
export default {
    // 自定义属性
    props:["imageList"],
    data() {
        return {

        }
    }
}
</script>

<style>
    .image {
        width: 750px;
        height: 430px;
    }
    .frame {
        width: 750px;
        height: 430px;
        /* 生成相对定位的元素，相对于其正常位置进行定位 因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。*/
        position: relative;
    }
    .slider {
        width: 750px;
        height: 430px;
    }
    .indicator {
        width: 750px;
        height: 40px;
        item-color: white;
        item-selected-color: #b4282d;
        item-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 0px;
    }
</style>
