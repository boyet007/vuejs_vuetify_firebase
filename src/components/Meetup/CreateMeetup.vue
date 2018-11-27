<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="primary-text">Create a new Meetup</h1>
            </v-flex>
        </v-layout>
        <v-form @submit.prevent="onCreateMeetup">
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-text-field name="title" label="Title"
                    id="title" required v-model="title">                    
                    </v-text-field>
                </v-flex>
            </v-layout>
                    <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-text-field name="location" label="Location"
                    id="location" required v-model="location">                    
                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-text-field name="imageUrl" label="Image URL" 
                    id="imageUrl"  required v-model="imageUrl">                    
                    </v-text-field>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <img :src="imageUrl" height="150" alt="">
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-textarea name="description" label="Description"
                    id="description" required v-model="description">                    
                    </v-textarea>
                </v-flex>
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <h1>Choose a Date & Time</h1>
                </v-flex>
            </v-layout>
            <v-layout row class="mb-2">
                <v-flex xs12 sm6 offset-sm3>
               <v-date-picker v-model="date">
                   </v-date-picker>  
                </v-flex>       
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
               <v-time-picker v-model="time" format="24hr">
                   </v-time-picker >
                </v-flex>         
            </v-layout>
            <v-layout row>
                <v-flex xs12 sm6 offset-sm3>
                    <v-btn type="submit" :disabled="!formIsValid" 
                    class="primary">Create Meetup</v-btn>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            location: '',
            imageUrl: '',
            description: '',
            date: new Date().toISOString().substring(0,10),
            time: new Date()
           
        }
    },
    computed: {
        formIsValid() {
            return this.title !== '' && 
            this.location !== '' && 
            this.imageUrl !== '' &&
            this.description !== ''
        },
        submittableDateTime() {
            const date = new Date(this.date)
            if (typeof this.time === 'string') {
                const hours = this.time.match(/^(\d+)/)[1]
                const minutes = this.time.match(/:(\d+)/)[1]
                date.setHours(hours)
                date.setMinutes(minutes)
            } else {
                date.setHours(this.time.getHours())
                date.setHours(this.time.getMinutes())
            }

            return date
        }
    },
    methods: {
        onCreateMeetup() {
            if(!this.formIsValid) {
                return
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                imageUrl: this.imageUrl,
                description: this.description,
                date: this.submittableDateTime
            }
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
        }
    }
}
</script>

