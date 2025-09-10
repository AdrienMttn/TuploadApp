<script setup>
import { ref } from "vue";

const props = defineProps(["url", "description"]);
const desc = ref(props.description);
const emit = defineEmits(["change-desc"]);
</script>

<template>
  <div class="w-fit flex flex-col items-center gap-5">
    <video
      class="w-[250px] min-h-[444px] md:w-[272px] md:min-h-[483px] rounded-lg"
      :src="props.url"
      loop
      autoplay
      controls
    ></video>
    <textarea
      class="w-[95vw] md:w-[400px] resize-none outline-none bg-[#242424] p-3 rounded-lg"
      placeholder="description ..."
      v-model="desc"
      @blur="emit('change-desc', desc)"
    ></textarea>
  </div>
</template>
