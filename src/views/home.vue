<template>
    <div>
        <home-header></home-header>
    </div>
</template>

<style scoped>

</style>

<script>
    var modal = weex.requireModule('modal');
    import Header from '../components/Header.vue'
    export default {
        components: {
            'home-header': Header
        }
    }
</script>
