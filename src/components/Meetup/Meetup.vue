<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card >
                    <v-card-title>
                        <h3 class="primary--text">My Meetup</h3> 
                    </v-card-title>
                     <v-card-media
                        src="https://images.musement.com/default/0001/49/thumb_48754_default_header.jpeg"
                           height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text">17th July 2014 - Where it take places</div>
                        <div>Lorem Ipsum is simply dummy 
                            text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                               took a galley of type and scrambled it to make a type
                                specimen book. It has survived not only five centuries,
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
