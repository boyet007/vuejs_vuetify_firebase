<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h4 class="primary-text">Create a new Meetup</h4>
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
            description: ''
        }
    },
    computed: {
        formIsValid() {
            return this.title !== '' && 
            this.location !== '' && 
            this.imageUrl !== '' &&
            this.description !== ''
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
                date: new Date()
            }
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
        }
    }
}
</script>

