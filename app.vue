<script setup>
const store = useUserStore();

onMounted(()=>{
    startMousePointer();
})

const uploadConfirmation = ()=>{
  if(store.uploadedFile){
    uploadFile()
  }
};
</script>

<template>
  <div>
    <div class="box">
        <UploadBox/>
          <div class="relative w-full cursor-pointer" @click="uploadConfirmation">
            <Button/>
          </div>

          <Download/>

          <small>Made by Hussain panahy</small>
      </div>
  </div>
      <div id="circle" class="circle bg-yellow-500"></div>
</template>

<style scoped>
.box{
  @apply text-white border p-12 rounded-lg border-yellow-500
  relative w-[23em] sm:w-96
}

.circle{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -4px 0 0 -4px;
    pointer-events: none;
    mix-blend-mode: screen;
    z-index: 10;
    box-shadow: 0px 0px 8px 0px #FDFCA9 inset, 0px 0px 24px 0px #FFEB3B,
    0px 0px 8px 0px #FFFFFF42;
}
small{
  @apply absolute bottom-1.5 -translate-x-1/2 left-1/2
  text-slate-500
}
</style>