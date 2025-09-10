<script setup>
import { ref } from 'vue';

const url = ref(null);
const emit = defineEmits(['search-content'])
</script>

<template>
  <header class="bg-[#0d0e0e] w-[100vw] md:h-[100px] flex flex-col md:flex-row md:justify-end lg:justify-center md:items-center fixed">
    <div class="logo flex flex-row items-center p-3 md:p-0 md:absolute left-5">
      <svg
      xmlns="http://www.w3.org/2000/svg"
      class="w-10 h-[100%]"
      viewBox="0 0 30 25"
    >
      <path
        ref="tiktokLogo"
        stroke="#ffffffde"
        stroke-width="1"
        fill="none"
        d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z"
      />
    </svg>
      <h1 class="text-4xl font-bold">Tupload</h1>
    </div>
    <div class="search flex flex-row gap-3 bg-[#242424] p-1 rounded-3xl cursor-pointer w-[95vw] md:w-[500px] m-3 lg:m-0">
      <input @focus="(e) => {e.target.select()}" class="w-[100%] p-1" placeholder="https://www.tiktok.com/..." v-model="url" v-on:keypress="(event) => { if (event.charCode === 13){ emit('search-content',url);}}"></input>
      <button @click="emit('search-content',url)" class="cursor-pointer p-1"><svg
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M18.319 14.4326C20.7628 11.2941 20.542 6.75347 17.6569 3.86829C14.5327 0.744098 9.46734 0.744098 6.34315 3.86829C3.21895 6.99249 3.21895 12.0578 6.34315 15.182C9.22833 18.0672 13.769 18.2879 16.9075 15.8442C16.921 15.8595 16.9351 15.8745 16.9497 15.8891L21.1924 20.1317C21.5829 20.5223 22.2161 20.5223 22.6066 20.1317C22.9971 19.7412 22.9971 19.1081 22.6066 18.7175L18.364 14.4749C18.3493 14.4603 18.3343 14.4462 18.319 14.4326ZM16.2426 5.28251C18.5858 7.62565 18.5858 11.4246 16.2426 13.7678C13.8995 16.1109 10.1005 16.1109 7.75736 13.7678C5.41421 11.4246 5.41421 7.62565 7.75736 5.28251C10.1005 2.93936 13.8995 2.93936 16.2426 5.28251Z"
    fill="currentColor"
  />
</svg></button>
    </div>
  </header>
</template>

<style scoped>
svg
{
  filter: drop-shadow(0px 1px 0px #fd3e3e) drop-shadow(-1px -1px 0px #4de8f4);
}
</style>