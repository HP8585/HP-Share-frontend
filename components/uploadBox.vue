<script setup>

const fileInput = ref(null);

const store = useUserStore();
const { uploadedFile } = toRefs(store);

function changeFileInp(e){
    uploadedFile.value = e.target.files[0];
};

//drop-zone
const onDragover = (event)=>{
    event.dataTransfer.dropEffect = 'copy';
};

const onDrop = (event)=>{
    uploadedFile.value = event.dataTransfer.files[0];
};

watchEffect(()=>{
    console.log(uploadedFile.value);
})
</script>

<template>
    <input type="file" ref="fileInput"
    @change="changeFileInp" hidden>

    <div class="uploadBox"
    @dragover.prevent="onDragover"
    @drop.prevent="onDrop"
    @click="fileInput?.click()">

    <div v-if="!uploadedFile" class="center-col">
        <Icon name="ic:sharp-cloud-upload"
        size="100" color="#fcd34d"/>
        <h1>Upload or Drop your file</h1>
    </div>

    <div class="center-col" v-else>
        <Icon name="line-md:document-twotone" size="80" color="#fcd34d"/>
        <h1 class="fileName">{{ uploadedFile?.name }}</h1>
    </div>

    </div>
</template>

<style scoped>
.uploadBox{
  @apply flex flex-col items-center font-semibold text-lg
  text-yellow-400 border-4 border-dashed
  border-yellow-500 rounded-lg p-4 cursor-pointer
}
.center-col{
    @apply flex flex-col items-center
}
.fileName{
    @apply max-w-48 truncate
}
</style>