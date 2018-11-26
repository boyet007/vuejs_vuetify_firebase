<template>
    <v-container>
        <v-layout row wrap  v-for="meetup in meetups" v-bind:key="meetup.id" class="mb-2">
            <v-flex xs12 md8 offset-sm1 offset-md2>
                <v-card class="yellow darken-2">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3> 
                                <v-img 
                                    :src="meetup.imageUrl"
                                    height="130px">
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 sm9>
                                <v-card-title primary-title>
                                    <div>
                                        <h2>{{ meetup.title }}</h2>
                                        <div>{{ meetup.date }}</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat :to="'/meetups/' + meetup.id">
                                        <v-icon left light>arrow_forward</v-icon>View Meetup
                                    </v-btn>
                                </v-card-actions>
                               
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    computed: {
        meetups () {
            return this.$store.getters.loadedMeetups
        }
    }
}
</script>
