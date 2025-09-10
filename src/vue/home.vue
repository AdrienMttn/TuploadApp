<script setup>
import videoComponent from "../components/videoComponent.vue";
import loadingVideoComponent from "../components/loading/loadingVideoComponent.vue";
import uploadLoadingComponent from "../components/loading/uploadLoadingComponent.vue";
import { TikTokService } from "../services/tiktokService";
import { ref } from "vue";

const props = defineProps(["video", "searchVideo"]);
const emit = defineEmits(["set-error", "set-success"]);
const uploadLoading = ref(false);
async function uploadTikTok() {
  uploadLoading.value = true;
  const res = await TikTokService.uploadVideo(props.video);
  if (res.success) {
    emit("set-success", res);
  } else {
    emit("set-error", res);
  }

  uploadLoading.value = false;
}
</script>
<template>
  <div
    class="w-[100vw] h-[100vh] pt-[140px] md:pt-[100px] flex flex-col items-center gap-3"
  >
    <videoComponent
      :url="props.video.url"
      :description="props.video.description"
      v-if="props.video != null"
      @change-desc="
        (desc) => {
          props.video.description = desc;
        }
      "
    />
    <button
      @click="uploadTikTok"
      v-if="props.video != null"
      class="upload bg-[#242424] p-3 rounded-2xl"
    >
      Upload
    </button>
    <loadingVideoComponent v-if="props.searchVideo" />
    <div
      v-if="props.searchVideo"
      class="w-[100px] h-[48px] bg-[#242424] rounded-2xl"
    ></div>
  </div>
  <uploadLoadingComponent v-if="uploadLoading" />
</template>
