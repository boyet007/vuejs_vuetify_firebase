<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 md8 offset-sm1 offset-md2>
                <v-card class="yellow darken-2">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3> 
                                <v-img 
                                    src="https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg"
                                    height="130px">
                                </v-img>
                            </v-flex>
                            <v-flex xs7 sm8 sm9>
                                <v-card-title primary-title>
                                    <div>
                                        <h2>My Meetup</h2>
                                        <div>17th July 2017</div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat to="/meetups/1">
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
    
}
</script>
