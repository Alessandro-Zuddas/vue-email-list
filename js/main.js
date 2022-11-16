"use strict";

const { createApp } = Vue

createApp({
    data() {
        return {
            mails: [

            ]
        }
    },
    created(){
        for(let i = 0; i < 10; i++){
            axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then((response) =>{
                const result = response.data;
                this.mails.push(result.response);
            });
        }
    }
}).mount('#app');