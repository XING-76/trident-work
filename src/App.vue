<template>
    <div class="flex md:flex-row flex-col md:h-screen">
        <Navbar :data="navbarData" />

        <div>
            <!-- banner -->
            <div class="md:h-[60%]">
                <Banner :data="bannerData" />
            </div>

            <!-- bannerBox -->
            <div class="bg-[#d9cdbe] p-7 md:h-[40%]">
                <BannerBox :data="bannerBoxData" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import Banner from '@/components/Banner.vue';
import BannerBox from '@/components/BannerBox.vue';
import { ref, onBeforeMount } from 'vue';

const bannerData = ref({});
const bannerBoxData = ref([]);
const navbarData = ref([]);

onBeforeMount(async () => {
    try {
        let res = await (await fetch('./data.json')).json();
        const { banner, boxData, navbar } = res;

        bannerData.value = banner;
        bannerBoxData.value = boxData;
        navbarData.value = navbar;
    } catch (e) {
        console.log(e);
    }
});
</script>
