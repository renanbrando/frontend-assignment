import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      companies: [
        {
            logo: 'microsoft',
            name: 'Microsot',
            address: 'Redmond, WA USA'
        },
        {
            logo: 'apple',
            name: 'Apple',
            address: 'Cupertino, CA USA'
        },
        {
            logo: 'amazon',
            name: 'Amazon',
            address: 'Moreno Valley, CA USA'
        },
        {
            logo: 'adobe',
            name: 'Adobe',
            address: 'San Jose, CA USA'
        },
        {
            logo: 'google',
            name: 'Google',
            address: 'Mountain View, CA USA'
        },
        {
            logo: 'atlassian',
            name: 'Atlassian',
            address: 'Redmond, WA USA'
        },
        {
            logo: 'dropbox',
            name: 'Dropbox',
            address: 'San Francisco, CA USA'
        },
        {
            logo: 'facebook',
            name: 'Facebook',
            address: 'Menlo Park, CA USA'
        }
      ]
    },
    mutations: {
        add(state, company) {
            state.companies.push(company);
        }
    },
    actions: {
        addAsync(state){
            state.commit('add');
        }
    },
    getters: {
        companies: state => state.companies
    }
})