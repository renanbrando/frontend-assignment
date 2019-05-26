<template>
    <div class="footer">
        <div class="wrapper">
            <div class="flex">
                <span class="links">Pricing | Blog | Webinars | Events | Help Center</span>
                <span class="links">Terms and Conditions | Privacy Policy</span>
            </div>
            <div class="flex">
                <span class="reference">&copy Copyright {{year}}, Renan Ribeiro Brando All Rights Reserved.</span>
                <span class="links"><font-awesome-icon :icon="['fab', 'linkedin']" size="lg"/> | <font-awesome-icon :icon="['fab', 'facebook-square']" size="lg"/> | <font-awesome-icon :icon="['fab', 'twitter-square']" size="lg"/></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return {
            year: new Date().getFullYear()
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';

.footer {
    margin-top: 16px;
    padding: 16px 0;
    width: 100%;
    height: 10vh;
    background-color: $divider-color;
    color: white;

    .wrapper {
        width: 80%;
        margin: 32px auto;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        margin: 16px 0px;
    }

    .links {
        font-size: 14px;
        color: $primary;
    }

    .reference {
        font-size: 12px;
    }

}

</style>
