<template>
    <div class="wrapper">
        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('topic')">
            <text class="bar-txt" :class="[this.isActive('topic')]">专题</text>
        </div>
        <div class="bar-item" @click="tabTo('me')">
            <text class="bar-txt" :class="[this.isActive('me')]">我</text>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            indexKey: 'home'
        }
    },
    methods: {
        isActive(c) {
            return this.indexKey === c ? 'bar-active' : ''
        },
        tabTo(tabValue) {
            if(this.indexKey === tabValue) return;
            this.indexKey = tabValue;
            this.$emit('tabTo', {
                status: 'tabTo',
                data: {
                    key: tabValue
                }
            })
        }
    }
}
</script>

<style>
    .wrapper {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 90px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #fafafa;
    }
    .bar-active {
        color: red
    }
    .bar-item {
        flex: 1;
    }
    .bar-txt {
        color: #666;
        text-align: center;
    }
</style>
