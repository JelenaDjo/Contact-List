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
            
    </div>

</template>

<script>

import ContactsTable from './ContactsTable'

export default {
    components: {
        ContactsTable
    },
    
    data(){
        return {
            newContact: {
                firstName: '',
                lastName: '',
                email: ''
            },
            contacts: [
                {firstName: 'John', lastName: 'Doe', email: 'example@example.com'},
                {firstName: 'Jack', lastName: 'Smith', email: 'example@example.com'},
                {firstName: 'Susan', lastName: 'Hart', email: 'example@example.com'},
                {firstName: 'Sofi', lastName: 'Shepard', email: 'example@example.com'},
                {firstName: 'Jasmin', lastName: 'Krew', email: 'example@example.com'}

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
    }
};
</script>