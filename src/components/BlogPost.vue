<template>
    <div>
        <h3> {{ title }} </h3>
        <button @click="functionInChild" >Call parent function </button>  <br> <!-- -->
        {{message}}
        <br>
        {{getReversedMessageMethod()}}
        <br>
        {{reverseMessageComputed}} <!-- kao obicna metoda sepoziva ne kao funkcija kao gore -->
    </div>
</template>


<script>
export default {
    data(){
        return{
        message: 'Ovo je neka poruka'

        }
    },
    props: ['title'],
    methods:{
        functionInChild(){
            console.log('child function')
            this.$emit('callParentFunction', 'Jack', 24)
        },
        getReversedMessageMethod(){
            return this.message
            .split(' ')
            .reverse()
            .join(' ')
        }
    },
    computed: { // kesira podatke zato je bolji i vise se koristi 
    // on izvrsi nesto i to prikaze, ne poziiva se na klik ili tako nesto jer nije metoda
        reverseMessageComputed(){
             return this.message
            .split(' ')
            .reverse()
            .join(' ')
        }
    }
};
</script>



