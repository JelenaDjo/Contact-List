<template>
    <div>
         <h3> Add Your Contact</h3>
        <form @submit.prevent="addContact"> <!-- sprecava defoltnu funkciju relode-->
            <label>First Name</label>
            <input v-model="newContact.firstName" placeholder="First Name"/><br>

            <label>Last Name</label>
            <input v-model="newContact.lastName" placeholder="Last Name"/><br>

            <label>Email</label>
            <input v-model="newContact.email" placeholder="Email"/><br>
            <button  type="submit"> ADD CONTACT</button>
        </form>
        

        <ContactsTable  :contactsList="contacts"/>
        <ContactDetails :contact="routeContact" />
            
    </div>

</template>

<script>

import ContactsTable from './ContactsTable'
import ContactDetails from './ContactDetails';

export default {
    components: {
        ContactsTable,
        ContactDetails
    },
    
    data(){
        return {
            newContact: {
                firstName: '',
                lastName: '',
                email: ''
            },
            contacts: [
                {id:1, firstName: 'John', lastName: 'Doe', email: 'example@example.com'},
                {id:2,firstName: 'Jack', lastName: 'Smith', email: 'example@example.com'},
                {id:3, firstName: 'Susan', lastName: 'Hart', email: 'example@example.com'},
                {id:4, firstName: 'Sofi', lastName: 'Shepard', email: 'example@example.com'},
                {id:5, firstName: 'Jasmin', lastName: 'Krew', email: 'example@example.com'}

            ]
        }
    },
    methods:{
        addContact(){
            this.contacts.push(this.newContact);
            this.newContact={}
        },
        removeContact(contact){
            let index = this.contacts.indexOf(contact);
            this.contacts.splice(index, 1);
    
        }
    },
    computed: {
        routeContact(){ 
          let findedContact =  this.contacts.find(contact=> contact.id == this.$route.params.id) // na ovaj nacin uvek izvlcimo parametar iz rute
            return findedContact
        }
    }
};
</script>