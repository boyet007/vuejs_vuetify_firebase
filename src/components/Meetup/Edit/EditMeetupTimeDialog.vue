<template>
    <v-dialog width="350px" persistent="" v-model="editDialog">
        <v-btn accent slot="activator">
            Edit Time
        </v-btn>
        <v-card>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title primary-title><h2>Edit Meetup Time</h2></v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                       <v-time-picker actions v-model="editableTime" format="24hr" style="width: 100%">
                           <template scope="{save, cancel}">
                               <v-btn class="blue--text darken-1" flat @click.native="editDialog = false">Close</v-btn> 
                               <v-btn class="blue--text darken-1" flat @click.native="onSaveChanges">Save</v-btn> 
                           </template>
                       </v-time-picker>
                    </v-flex>
                </v-layout>
        </v-card>
    </v-dialog>
</template>

<script>
    export default {
        props: ['meetup'],
        data() {
            return {
                editDialog: false,
                editableTime: null,
            }
        },
        methods: {
            onSaveChanges() {
               const newDate = new Date(this.meetup.date)
               const hours = this.editableTime.match(/^(\d+)/)[1]
               const minutes = this.editableTime.match(/:(\d+)/)[1]
               newDate.setHours(hours)
               newDate.setMinutes(minutes)
               this.$store.dispatch('updateMeetupData', {
                   id: this.meetup.id,
                   date: newDate
               })
            }
        },
        created() {
            //console.log(this.meetup.date)
            //this.editableDate = new Date(this.meetup.date)
            this.editableTime = new Date(this.meetup.date)
        }
    }
</script>
