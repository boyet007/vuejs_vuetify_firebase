import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: {
        loadedMeetups: [],
        // user: {
        //     id: 'jfeijefiejfei',
        //     registeredMeetups: ['jifejifej3232']
        // }
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        setLoadedMeetups (state, payload) {
            state.loadedMeetups = payload
        },
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload);
        },
        updateMeetup (state, payload) {
            const meetup = state.loadedMeetups.find(meetup => {
                return meetup.id === payload.id
            })
            if(payload.title) {
                meetup.title = payload.title
            }
            if (payload.description) {
                meetup.description = payload.description
            }
            if (payload.date) {
                meetup.date = payload.date
            }
        },
        setUser (state, payload) {
            state.user = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }
    },
    actions: {
        loadMeetups({commit}) {
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value')
            .then((data) => {
                const meetups = []
                const obj = data.val()
                for(let key in obj) {
                    meetups.push({
                        id: key,
                        title: obj[key].title,
                        description: obj[key].description,
                        imageUrl: obj[key].imageUrl,
                        date: obj[key].date,
                        location: obj[key].location,
                        creatorId: obj[key].creatorId
                    })
                }     
                commit('setLoading', false)
                commit('setLoadedMeetups', meetups) 
            })
            .catch((error)=>{
                console.log(error)
                commit('setLoading', false)
            })
        },
        createMeetup ({commit, getters}, payload) {
            let key
            
            const meetup = {
                title: payload.title,
                location: payload.location,
                description: payload.description,
                date: payload.date.toISOString(),
                creatorId: getters.user.id
            }

            firebase.database().ref('meetups').push(meetup)
                .then((data) => {
                    key = data.key   
                    return key
                })
                .then(key => {
                const filename = payload.image.name
                const ext = filename.slice(filename.lastIndexOf('.'))
                return firebase.storage().ref('meetups/' + key + ext).put(payload.image)
                })
                .then(fileData => {
                    firebase.storage().ref(fileData.metadata.fullPath).getDownloadURL()
                    .then((url) =>{
                        commit('createMeetup', {
                            //tambahkan id : key kedalam properties meetup
                            ...meetup,
                            imageUrl: url,
                            id: key  
                        })
                        return firebase.database().ref('meetups').child(key).update({imageUrl: url})
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                })
            .catch((error) => {
                console.log(error)
            })
            //reach out to fire base and store it
            //commit('createMeetup', meetup)
        },
        updateMeetupData ({commit}, payload) {
            commit('setLoading', true)
            const updateObj = {}
            if (payload.title) {
                updateObj.title = payload.title
            }
            if (payload.description) {
                updateObj.description = payload.description
            }
            if (payload.date) {
                updateObj.date = payload.date
            }
            firebase.database().ref('meetups').child(payload.id).update(updateObj)
            .then(()=>{
                commit('setLoading', false)
                commit('updateMeetup', payload)
            })
            .catch(error=>{
                console.log(error)
                commit('setLoading', false)
            })
        },
        signUserUp ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(resp => {
                commit('setLoading', false)
                const newUser = {
                    id: resp.user.uid,
                    registeredMeetups: []
                }
                commit('setUser', newUser)
            })
            .catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            })
        },
        signUserIn ({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(resp => {
                commit('setLoading', false)
                const newUser = {
                    id: resp.user.uid,
                    registeredMeetups: []
                }
                commit('setUser', newUser)
            })
            .catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)
            })
        },
        clearError({commit}) {
            commit('clearError')
        },
        autoSignIn({commit}, payload) {
            commit('setUser', {id: payload.uid, registeredMeetups: []})
        },
        logout({commit}) {
            firebase.auth().signOut()
            commit('setUser', null)
        }   
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        user (state) {
            return state.user
        },
        loading(state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    }
})