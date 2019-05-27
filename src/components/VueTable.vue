<template>
    <table>
        <thead>
            <tr>
                <th v-for="(key, index) in columns" @click="sortBy(key)" :key="index" :class="{ active: sortKey == key }">
                    {{ key | capitalize }}
                    <span class="arrow" :class="sortOrders[key] > 0 ? 'asc' : 'dsc'">
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(entry, index) in filteredData" :key="index">
                <td v-for="(key, index) in columns" :key="index">
                    {{entry[key]}}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: "VueTable",
    props: {
        data: Array,
        columns: Array,
        filterKey: String
    },
    data() {
        var sortOrders = {}
        this.columns.forEach(function (key) {
            sortOrders[key] = 1
        })
        return {
            sortKey: '',
            sortOrders: sortOrders
        }
    },
    computed: {
        filteredData: function () {
            var sortKey = this.sortKey
            var filterKey = this.filterKey && this.filterKey.toLowerCase()
            var order = this.sortOrders[sortKey] || 1
            var data = this.data
            if (filterKey) {
                data = data.filter(function (row) {
                    return Object.keys(row).some(function (key) {
                        return String(row[key]).toLowerCase().indexOf(filterKey) > -1
                    })
                })
            }
            if (sortKey) {
                data = data.slice().sort(function (a, b) {
                    a = a[sortKey]
                    b = b[sortKey]
                    return (a === b ? 0 : a > b ? 1 : -1) * order
                })
            }
            return data
        }
    },
    filters: {
        capitalize: function (str) {
            return str.charAt(0).toUpperCase() + str.slice(1)
        }
    },
    methods: {
        sortBy: function (key) {
            this.sortKey = key
            this.sortOrders[key] = this.sortOrders[key] * -1
        }
    }
}
</script>


<style lang="scss" scoped>

@import '../styles/variables.scss';

table {
    border: 2px solid $divider-color;
    background-color: #fff;
    border-collapse: collapse;

    th {
        background-color: $primary;
        color: $primary-color-text;
        cursor: pointer;
        user-select: none;
        border: 2px solid $divider-color;
        min-width: 120px;
        padding: 10px 20px;

        &.active .arrow {
            opacity: 1;
        }

        &.active {
            color: $primary-color-text;
        } 
        
        .arrow {
            display: inline-block;
            vertical-align: middle;
            width: 0;
            height: 0;
            margin-left: 5px;
            opacity: 0.66;
        }

        .arrow.asc {
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-bottom: 4px solid #fff;
        }

        .arrow.dsc {
            border-left: 4px solid transparent;
            border-right: 4px solid transparent;
            border-top: 4px solid #fff;
        }
    }

    td {
        border: 2px solid $divider-color;
        min-width: 120px;
        padding: 10px 20px;
    }

    tr:nth-child(even) {
        background-color: #f2f2f2;
    }

}

</style>



