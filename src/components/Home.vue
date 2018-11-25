<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-sm-right text-xs-center">
                <v-btn large class="primary" router to="/meetups">Explore Meetups</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left text-xs-center">
                <v-btn large class="primary" router to="/meetups/new">Organize Meetups</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12>
                <v-carousel>
                    <v-carousel-item v-for="meetup in meetups" 
                        :src="meetup.imageUrl" :key="meetup.id">
                        <div class="title">
                            {{ meetup.title }}
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap class="mt-2">
            <v-flex xs12 class="text-xs-center">
                <p>Join our awesome meetups!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            meetups: [
                { imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/0e/9a/e3/1d/freedom-tower.jpg', 
                    id: '929jrfi2jijr', title: 'Find in New York' },
                { imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/12/f8/66/ce/paris-in-one-day-sightseeing.jpg', 
                    id: 'jifejifej3232', title: 'Find in Paris' },
            ]
        }
    }
}
</script>

<style scoped>
    .title {
        position:absolute;
        bottom: 50px;
        background-color:rgba(0,0,0,0.5);
        color:white;
        font-size:2em;
        padding:30px;
        margin-left:50px;
    }
</style>

