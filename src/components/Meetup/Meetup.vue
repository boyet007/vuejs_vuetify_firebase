<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card >
                    <v-card-title>
                        <h3 v-if="meetup" class="primary--text">{{ meetup.title }}</h3> 
                    </v-card-title>
                     <v-img v-if="meetup"
                        :src="meetup.imageUrl"
                           height="400px">
                    </v-img>
                    <v-card-text>
                        <div v-if="meetup" class="info--text">{{ meetup.date }} - {{ meetup.location }}</div>
                        <div>{{ meetup.description }}
                        </div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="black--text warning">Register</v-btn>
                    </v-card-actions>
                    <v-card-actions>
                        <v-btn flat to="/meetups/1"></v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: ['id'],
    computed: {
        meetup: function () {
            return this.$store.getters.loadedMeetup(this.id)        
        }
    }
}
</script>

