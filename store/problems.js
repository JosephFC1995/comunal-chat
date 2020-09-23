import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
    loadingProblems: true,
    problems: [],
    problemSelected: null,
})

export const mutations = {
    SET_PROBLEMS(state, problems) {
        state.problems = problems
    },
    SET_PROBLEMS_SELECTED(state, problem) {
        state.problemSelected = problem
    },
    SET_LOADING_ON(state) {
        state.loadingProblems = true
    },
    SET_LOADING_OFF(state) {
        state.loadingProblems = false
    },
}

export const actions = {
    async GET_PROBLEMS({ commit, state }) {
        const { data } = await this.$axios.$get('/problem')
        console.log('hola')
        commit('SET_PROBLEMS', data)
        commit('SET_LOADING_OFF')
    },
}