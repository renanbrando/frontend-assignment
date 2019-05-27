<template>
    <div class="content">
        <form id="filter">
            <input class="search" name="query" placeholder="Search" v-model="searchQuery">
        </form>
        <vue-table
            class="data-table"
            :data="gridData"
            :columns="gridColumns"
            :filter-key="searchQuery">
        </vue-table>
    </div>
</template>

<script>

import VueTable from '../components/VueTable.vue';

export default {
    components: {
        VueTable
    },
    data() {
        return {
            searchQuery: '',
            gridColumns: ['company', 'location', 'category', 'spend'],
            gridData: [
                { company: 'Facebook', location: 'user@facebook.com', category: 'DNS', spend: 6 },
                { company: 'General Motors', location: 'user@gm.com', category: 'SaaS', spend: 6 },
                { company: 'Walmart', location: 'user@walmart.com', category: 'Hosting', spend: 6 },
                { company: 'Apple', location: 'user@apple.com', category: 'Content Delivery', spend: 6 },
                { company: 'Microsoft', location: 'user@microsoft.com', category: 'Cloud Hosting', spend: 6 },
                { company: 'Sony', location: 'user@sony.com', category: 'Video Platform', spend: 6 }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>

#filter {
    .search {
        width: 100%;
    }
}

.data-table {
    margin: 16px 0px;
}

</style>
