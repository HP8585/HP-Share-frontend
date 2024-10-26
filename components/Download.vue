<script setup>

const store = useUserStore();

const copyLink = () => {
    navigator.clipboard.writeText(store.downloadLink);
    alert('Link copied to clipboard!');
}
</script>

<template>
<div class="flex flex-col items-center gap-2 mb-1" v-show="store.downloadLink">
    <div class="downloadLinkBox">
        <p class="downloadLink">
        {{ useUserStore().downloadLink }}
        </p>
        <Icon name="material-symbols:content-copy" @click="copyLink"
        size="22" class="text-slate-600 hover:text-slate-500 cursor-pointer"/>
    </div>
    <NuxtLink :href="store.downloadLink">
        <button class="download">Download</button>
    </NuxtLink>
</div>
</template>

<style scoped>
.downloadLinkBox{
  @apply mt-5 flex flex-row-reverse items-center gap-0.5
  bg-slate-900 px-1.5 py-1 rounded-full
}
.downloadLink{
  @apply w-64 truncate
}

button.download{
    @apply bg-blue-600 w-fit px-2 py-0.5 rounded
    text-[1.05em]
}
</style>