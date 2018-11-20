<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card class="success">
                    <v-container fluid>
                        <v-layout row>
                            <v-flex xs5 sm4 md3>
                            <v-card-media
                            src="https://images.musement.com/default/0001/49/thumb_48754_default_header.jpeg"
                                height="130px"
                            ></v-card-media>
                            </v-flex>
                            <v-flex xs7 sm8 md9>
                                <v-card-title primary-title>
                                    <div>
                                        <h2 class="white--text">My Meetup</h2>
                                        <div>17th July 2017</div>
                                    </div>
                                </v-card-title>
                                <v-card-action>
                                    <v-btn flat>
                                        <v-icon left light>arrow_forward</v-icon>    
                                        View Meetup</v-btn>
                                </v-card-action>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>