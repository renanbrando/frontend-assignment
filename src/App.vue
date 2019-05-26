<template>
    <div>
        <router-view name="toolbar">
            <Toolbar/>
        </router-view>
         <router-view name="breadcrumb">
            <Breadcrumb/>
        </router-view>
        <div class="content">
            <router-view name="navbar">
                <Navbar/>
            </router-view>
            <router-view></router-view>
        </div>
        <router-view name="footer">
            <Footer/>
        </router-view>
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
}

</style>
