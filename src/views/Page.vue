<template>
    <div class="content">
        <div class="header">
            <div class="company-logo">
                 <font-awesome-icon class="icon" :icon="['fab', current.logo]"/>
            </div>
            <div class="company-heading">
                <h1>{{current.name}}</h1>
                <p><font-awesome-icon :icon="['fas', 'map-marker-alt']"/> {{current.address}}</p>
            </div>
        </div>
        <div>
            <line-chart :chart-data="datacollection" :options="chartOptions" :width="300" :height="100"></line-chart>
        </div>
        <div class="companies">
            <ul class="list">
                <li class="list-item" v-for="(company, index) in companies" :key="index" @click="changeCurrent(company)">
                    <div class="list-content">
                        <h2>{{company.name}}</h2>
                        <font-awesome-icon class="logo" :icon="['fab', company.logo]"/>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import LineChart from '../components/LineChart'

export default {
    components: {
      LineChart
    },
    data(){
        return {
            datacollection: {},
            chartOptions: {
                responsive: true
            },
            companies: [],
            current: {
                logo: 'microsoft',
                name: 'Microsot',
                address: 'Redmond, WA USA'
            }
        }
    },
    beforeMount(){
        this.companies = this.$store.getters.companies;
    },
    mounted() {
      this.fillData()
    },
    computed: {
        chartStyles() {
            return {
                height: '200px',
                position: 'relative'
            }
        }
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Company Spend History',
              backgroundColor: '#1f2b5a',
              data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (200 - 5 + 1)) + 5
      },
      changeCurrent(company){
          this.current = company;
          this.fillData();
      }
    }
    
}
</script>

<style lang="scss" scoped>

@import '../styles/variables.scss';

.header {
    display: flex;
    align-items: center;
    justify-content: center;

    .company-logo {
        flex: 1;
        margin: 32px;

        .icon {
            font-size: 128px;
            color: $primary;
        }
    }

    .company-heading {
        flex: 5;
        color: $secondary-text-color;
    }
}

ul, li {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  width: 100%;
}
h2 {
  margin-top: 0;
  margin-bottom: 0.4em;
}

.companies {
    .list {
        display: flex;
        flex-wrap: wrap;
    }
    .list-item {
        display: flex; 
        margin: 16px auto;
        border: 1px solid $divider-color;
        border-radius: 4px;
        padding: 0.5em;
        width: 100%;
        color: $primary;
        cursor: pointer;
    }
    @media all and (min-width: 20em) {
        .list-item {
            width: 25%;
        }
    }
    @media all and (min-width: 40em) {
        .list-item {
            width: 20%;
        }
    }
    .list-content {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 1em;
        width: 100%;

        .logo {
            font-size: 64px;
            text-align: center;
        }
    }
    .list-content p {
        flex: 1 0 auto;
    }
}

</style>
