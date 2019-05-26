<template>
    <div class="sidemenu">
        <div class="sidemenu-content">
             <router-link tag="div" class="menu-link" :class="{ current: isActive(r.pathName)}" v-for="r in routes" :key="r.pathName" :to="{ name: r.pathName }">{{r.name}}</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "Navbar",
    data(){
        return {
            routes: [
                {
                    name: 'Company Data', 
                    pathName: 'data'
                },
                {
                    name: 'Company Table', 
                    pathName: 'table'
                },
                {
                    name: 'Company Page', 
                    pathName: 'page'
                },
            ]
        }
    },
    methods: {
        isActive(path){
            return this.$route.name == path ? true : false;
        }
    }
}
</script>

<style lang="scss"scoped>

@import '../styles/variables.scss';

.sidemenu-content {
    border-radius: 8px;
    border: 1px solid $divider-color;
    color: $primary;
    cursor: pointer;

    .current {
        border-left: 4px solid $primary;
    }

    .menu-link {
        padding: 24px;
   
        &:first-child {
            border-top-left-radius: 8px;
        }

        &:last-child {
            border-bottom-left-radius: 8px;
        }

        &:not(:last-child) {
            border-bottom: 1px solid $divider-color;
        }
    }

}

</style>
