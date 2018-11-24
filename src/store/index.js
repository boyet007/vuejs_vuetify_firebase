import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            { 
                imageUrl: 'https://images.musement.com/default/0001/49/thumb_48754_default_header.jpeg', 
                id: 'jfiejeejeijf23', 
                title: 'Meetup in New York',
                date: new Date(),
                location: 'New York',
                description: 'It\'s New York'
            },
            {   imageUrl: 'https://images.musement.com/default/0001/49/thumb_48756_default_header.jpeg', 
                id: 'klasjfiejifej21', 
                title: 'Meetup in Paris',
                date: new Date(),
                location: 'Paris',
                description: 'It\'s Paris'
            }
        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload) {
            state.user = payload    
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        createMeetup ({commit}, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: 'jfiejfeiijefjeif'

            }
            //Reach out to firebase and store it
            commit('createMeetup', meetup)
        },
        signUserUp({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then( user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser)
                })
                .catch( error => {
                    commit('setLoading' , false)
                    commit('setError', error)
                    console.log(error)
                })
        },
        signUserIn({commit}, payload) {
            commit('setLoading', true)
            commit('clearError', )
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    commit('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser)
                })
                .catch( error => {
                    commit('setLoading' , false)
                    commit('setError', error)
                    console.log(error)
                })
        },
        clearError({commit}) {
            commit('clearError')
        }
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        user (state) {
            return state.user
        },
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    }
})