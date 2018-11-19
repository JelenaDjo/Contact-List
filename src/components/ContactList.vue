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
        

        <h3> Contact List</h3>
            <table border=1>
                <thead>
                    <th>Key</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    <tr v-for="(contact, index) in contacts" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{contact.firstName}}</td>
                        <td>{{contact.lastName}}</td>
                        <td>{{contact.email}}</td>
                    </tr>
                </tbody>
            </table>
   
    </div>

</template>

<script>
export default {
    
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
        }
    }
}
</script>