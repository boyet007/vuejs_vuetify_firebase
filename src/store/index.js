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
              date: '2017-07-18' 
            },
            { imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/f8/66/ce/paris-in-one-day-sightseeing.jpg', 
              id: 'jifejifej3232', 
              title: 'Find in Paris',
              date: '2017-07-17' 
            }
        ],
        user: {
            id: 'jfeijefiejfei',
            registeredMeetups: ['jifejifej3232']
        }
    },
    mutations: {},
    actions: {},
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