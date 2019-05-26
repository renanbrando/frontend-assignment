<template>
    <div class="container">
        <Toolbar/>
        <Breadcrumb/>
        <div class="page">
            <Navbar/>
            <router-view></router-view>
        </div>
        <Footer/>
    </div>
</template>


<script>
import Toolbar from './components/Toolbar.vue';
import Breadcrumb from './components/Breadcrumb.vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

export default {
    name: 'App', 
    components: {
        Toolbar,
        Breadcrumb,
        Navbar,
        Footer
    }
}
</script>

<style lang="scss" scoped>

.content{
    display: flex;
    flex-direction: column;
    min-height: 70vh;
}

</style>
