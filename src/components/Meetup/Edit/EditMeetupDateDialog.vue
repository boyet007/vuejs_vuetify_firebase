<template>
    <v-dialog width="350px" persistent="" v-model="editDialog">
        <v-btn accent slot="activator">
            Edit Date
        </v-btn>
        <v-card>
                <v-layout row wrap>
                    <v-flex xs12>
                        <v-card-title primary-title><h2>Edit Meetup Date</h2></v-card-title>
                    </v-flex>
                </v-layout>
                <v-divider></v-divider>
                <v-layout row wrap>
                    <v-flex xs12>
                       <v-date-picker actions v-model="editableDate" style="width: 100%">
                           <template scope="{save, cancel}">
                               <v-btn class="blue--text darken-1" flat @click.native="editDialog = false">Close</v-btn> 
                               <v-btn class="blue--text darken-1" flat @click.native="onSaveChanges">Save</v-btn> 
                           </template>
                       </v-date-picker>
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
                editableDate: null,
            }
        },
        methods: {
            onSaveChanges() {

                const newDate = new Date(this.meetup.date)
                const newDay = new Date(this.editableDate).getUTCDate()
                const newMonth = new Date(this.editableDate).getUTCMonth()
                const newYear = new Date(this.editableDate).getUTCFullYear()
        
                newDate.setUTCDate(newDay)
                newDate.setUTCMonth(newMonth)
                newDate.setUTCFullYear(newYear)
                this.$store.dispatch('updateMeetupData', {
                    id: this.meetup.id,
                    date: newDate
                })
            }
        },
        created() {
            //console.log(this.meetup.date)
            //this.editableDate = new Date(this.meetup.date)
            this.editableDate = new Date(this.meetup.date).toISOString().substr(0,10)
        }
    }
</script>
