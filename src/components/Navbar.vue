<template>
    <nav class="relative whitespace-nowrap shadow-md">
        <!-- nav-title -->
        <div class="flex md:p-10 p-3 justify-between items-center">
            <!-- hambuger -->
            <div
                class="md:hidden block cursor-pointer font-bold hover:text-amber-700 tansition"
                @click="handleOpen"
            >
                <OpenIcon v-if="!isOpen" />
                <CloseIcon v-if="isOpen" />
            </div>
            <!-- title -->
            <div class="font-bold md:text-4xl text-xl md:p-5">
                白頭翁不吃小米
            </div>
            <!-- logo -->
            <div
                class="bg-white md:absolute right-[-1.5rem] md:w-14 md:h-14 flex flex-row items-center justify-center rounded-full shadow-xl p-1 z-10"
            >
                <Logo />
            </div>
        </div>
        <!-- nav-link -->
        <div class="font-semibold text-center">
            <ul class="flex flex-col mb-3" v-if="!isMobile">
                <li class="m-3" v-for="d in data" :key="d.id">
                    <span
                        class="cursor-pointer transition hover:text-amber-700 border-solid hover:border-b-2 hover:border-amber-700"
                        :class="{
                            'text-amber-700 border-solid border-b-2 border-amber-700':
                                activeId === d.id,
                        }"
                        @click="handleActive(d.id)"
                        >{{ d.title }}</span
                    >
                </li>
            </ul>
            <!-- mobile -->
            <ul class="flex flex-col mb-3" v-if="isMobile">
                <li
                    class="m-3"
                    v-for="d in data"
                    :key="d.id"
                    :class="isOpen ? 'block' : 'hidden'"
                >
                    <span
                        class="cursor-pointer transition hover:text-amber-700 border-solid hover:border-b-2 hover:border-amber-700"
                        :class="{
                            'text-amber-700 border-solid border-b-2 border-amber-700':
                                activeId === d.id,
                        }"
                        @click="handleActive(d.id)"
                        >{{ d.title }}</span
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script setup>
import Logo from '@/ui/Logo.vue';
import OpenIcon from '@/ui/OpenIcon.vue';
import CloseIcon from '@/ui/CloseIcon.vue';
import { ref, toRefs, onMounted } from 'vue';

const isOpen = ref(false);
const isMobile = ref(false);
const activeId = ref('');
const windowWidth = ref(window.innerWidth);
const mobileViewpoint = 1024;

onMounted(() => {
    if (windowWidth.value <= mobileViewpoint) {
        isMobile.value = true;
    }
    window.addEventListener('resize', handleResize);
});

const handleResize = () => {
    windowWidth.value = window.innerWidth;
    if (windowWidth.value > mobileViewpoint) {
        isMobile.value = false;
    }
    if (windowWidth.value <= mobileViewpoint) {
        isMobile.value = true;
    }
};

const handleOpen = () => (isOpen.value = !isOpen.value);

const handleActive = (id) => (activeId.value = id);

const props = defineProps(['data']);
const { data } = toRefs(props);
</script>
