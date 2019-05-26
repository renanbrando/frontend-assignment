<template>
    <div class="page">
        <ul class="breadcrumb">
            <li><router-link tag="a" :to="{name: 'data'}">Home</router-link></li>
            <li><router-link tag="a" :to="{name: current}">{{current}}</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Breadcrumb",
    computed: {
        current(){
            return this.$route.meta.title;
        }
    }
}
</script>

<style lang="scss"scoped>

@import '../styles/variables.scss';

.breadcrumb {
    margin: 8px 0px;
    padding: 10px 0px;
    list-style: none;

    li {
        display: inline;
        font-size: 18px;

        a {
            color: $secondary-text-color;
            text-decoration: none;

            &:hover {
                color: $primary-dark;
            }
        }

        &+li:before {
            padding: 8px;
            color: $secondary-text-color;
            content: "/\00a0";
        }
    }
}

</style>
