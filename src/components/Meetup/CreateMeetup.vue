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
                    <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
                   <input type="file" style="display:none" ref="fileInput" accept="image/*"
                   @change="onFilePicked">
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
            date: new Date().toISOString().substr(0,10),
            time: new Date(),
            image: null
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
                let hours = this.time.match(/^(\d+)/)[1]
                const minutes = this.time.match(/:(\d+)/)[1]
                date.setHours(hours)
                date.setMinutes(minutes)
           
            } else {
                date.setHours(this.time.getHours())
                date.setMinutes(this.time.getMinutes())
            }
            return date
        }
    },
    methods: {
        onCreateMeetup() {
            if(!this.formIsValid) {
                return
            }
            if (!this.image) {
                return
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                image: this.image,
                description: this.description,
                date: this.submittableDateTime
            }
            console.log(meetupData)
            this.$store.dispatch('createMeetup', meetupData)
            this.$router.push('/meetups')
        },
        onPickFile() {
            this.$refs.fileInput.click()
        },
        onFilePicked(event) {
            const files = event.target.files
            let filename = files[0].name
            if (filename.lastIndexOf('.') <= 0) {
                return alert('Please add a valid file!')
            }
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        }
    }
}
</script>

