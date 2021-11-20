import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state() {
        return {
            activeFilters: ['All Sports'],
            defaultFilter: 'All Sports',
            filters: []
        }
    },
    mutations: {
        addFilter(state, payload) {
            state.activeFilters.push(payload);
        },
        removeFilter(state, payload) {
            state.activeFilters.splice(state.activeFilters.indexOf(payload), 1)
        },
        resetFilter(state) {
            state.activeFilters = [state.defaultFilter];
        },
        removeDefaultFilter(state) {
            state.activeFilters.splice(state.activeFilters.indexOf(state.defaultFilter), 1)
        }
    },
    actions: {
        toggleFilter(context, payload) {
            const isDefaultActive = context.state.activeFilters.includes(context.state.defaultFilter);
            if (payload === 'All Sports') {
                if (isDefaultActive) {
                    context.commit('removeFilter', payload);
                } else {
                    context.commit('resetFilter');
                }
            } else {
                if (context.state.activeFilters.includes(payload)) {
                    context.commit('removeFilter', payload);
                } else {
                    if (isDefaultActive) {
                        context.commit('removeDefaultFilter');
                    }
                    context.commit('addFilter', payload);
                }
            }
        },
    },
    getters: {
        getActiveFilters: state => state.activeFilters,
        isDefaultFilter: state => state.activeFilters.includes(state.defaultFilter)
    }
});

export default store;