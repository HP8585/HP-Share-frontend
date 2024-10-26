import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', ()=>{
    const uploadedFile = ref(null);
    const uploadedPercentage = ref(null);
    const downloadLink = ref(null);
    const progressFile = ref(0);
    const uploadStarted = ref(false);

    return{
        uploadedFile,
        uploadedPercentage,
        downloadLink,
        progressFile,
        uploadStarted
    }
});