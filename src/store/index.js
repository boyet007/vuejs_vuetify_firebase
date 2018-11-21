import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            { 
                imageUrl: 'https://images.musement.com/default/0001/49/thumb_48754_default_header.jpeg', 
                id: 'jfiejeejeijf23', 
                title: 'Meetup in New York',
                date: '2017-07-17'
            },
            {   imageUrl: 'https://images.musement.com/default/0001/49/thumb_48756_default_header.jpeg', 
                id: 'klasjfiejifej21', 
                title: 'Meetup in Paris',
                date: '2017-07-19'
            }
        ],
        user: {
            id: 'jiefjfejeif12',
            registeredMeetups: ['klasjfiejifej21'],
            date: '2017-07-17'
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
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        },
        featuredMeetups (state, getters) {
            return getters.loadedMeetups.slice(0, 5)
        }
    }
})