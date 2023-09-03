<template>
    <div class="relative h-full">
        <v-lazy-image
            class="w-full h-full"
            :src="data.imgUrl"
            referrerpolicy="no-referrer"
            alt="banner"
        />
        <div
            class="text-white absolute right-0 bottom-5 flex flex-col items-end p-3"
        >
            <span class="md:text-6xl sm:text-4xl text-2xl font-bold mb-1">{{
                data.title
            }}</span>
            <p>
                {{ data.description }}
            </p>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';
import VLazyImage from 'v-lazy-image';

const props = defineProps(['data']);
const { data } = toRefs(props);
</script>

<style scoped>
.v-lazy-image {
    filter: blur(5px);
    transition: filter 1.6s;
    will-change: filter;
}
.v-lazy-image-loaded {
    filter: blur(0);
}
</style>
