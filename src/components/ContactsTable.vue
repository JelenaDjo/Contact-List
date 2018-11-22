<template>
<div>
    <h1> Contact table</h1>
 <table border=1>
                <thead>
                    <th>Key</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th></th>
                </thead>
                <tbody>
                    <tr v-for="(contact, index) in contactsList" :key="index">
                        <td>{{index + 1}}</td>
                        <td>{{contact.firstName}}</td>
                        <td>{{contact.lastName}}</td>
                        <td>{{contact.email}}</td>
                        <td>
                        <button class="btn btn-danger" @click="removeContact(contact)"> Remove </button>
                        </td>
                    </tr>
                </tbody>
            </table>

</div>


</template>


<script>
export default {
    props: ['contactsList']
}
</script>

