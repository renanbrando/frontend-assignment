import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      sample: {}
    },
    mutations: {
        add(state, value) {
            state.sample = value;
        }
    },
    actions: {
        authenticate(state){
            state.commit('add');
        }
    },
    getters: {
        sample: state => state.sample
    }
})