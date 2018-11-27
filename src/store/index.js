import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store ({
    state: {
        loadedMeetups: [
            { 
              imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg', 
              id: '929jrfi2jijr', 
              title: 'Find in New York',
              date: new Date(),
              location: 'New York',
              description: 'New York, New York'
            },
            { imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/f8/66/ce/paris-in-one-day-sightseeing.jpg', 
              id: 'jifejifej3232', 
              title: 'Find in Paris',
              date: new Date(),
              location: 'Paris',
              description: 'It\'s Paris!'

            }
        ],
        user: {
            id: 'jfeijefiejfei',
            registeredMeetups: ['jifejifej3232']
        }
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload);
        }
    },
    actions: {
        createMeetup ({commit}, payload) {
            const meetup = {
                title: payload.title,
                location: payload.title,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date,
                id: 'jefijfeijefifej'
            }
            //reach out to fire base and store it
            commit('createMeetup', meetup)
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
        }
    }
})