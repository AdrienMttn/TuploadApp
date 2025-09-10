<script setup>
import headerComponent from "./components/headerComponent.vue";
import home from "./vue/home.vue";
import errorModalComponent from "./components/errorModalComponent.vue";
import successModalComponent from "./components/successModalComponent.vue";
import { TikTokService } from "./services/tiktokService";
import { ref } from "vue";

const videoObject = ref(null);
const searchVideo = ref(false);
const errorObject = ref(null);
const successObejct = ref(null);
const error = ref(false);
const success = ref(false);

async function searchContent(url) {
  videoObject.value = null;
  searchVideo.value = true;
  const res = await TikTokService.getContent(url);
  if (!res.error) {
    videoObject.value = res;
    error.value = false;
  } else {
    setError(res);
  }
  searchVideo.value = false;
}
function closeSuccess() {
  success.value = false;
}
function setSuccess(successInfo) {
  videoObject.value = null;
  successObejct.value = successInfo;
  success.value = true;
}
function closeError() {
  error.value = false;
}
function setError(errorInfo) {
  errorObject.value = errorInfo;
  error.value = true;
}
</script>

<template>
  <headerComponent @search-content="searchContent" />
  <home
    :video="videoObject"
    :searchVideo="searchVideo"
    @set-error="setError"
    @set-success="setSuccess"
  />
  <errorModalComponent
    ref="error"
    v-if="error"
    :message="errorObject.error"
    @close-error="closeError"
  />
  <successModalComponent
    v-if="success"
    :message="successObejct.success"
    @close-success="closeSuccess"
  />
</template>

<style scoped></style>
