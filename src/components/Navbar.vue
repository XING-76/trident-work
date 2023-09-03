<template>
    <nav class="relative whitespace-nowrap shadow-md">
        <!-- nav-title -->
        <div class="flex md:p-10 p-3 justify-between items-center">
            <!-- hambuger -->
            <div
                class="md:hidden block cursor-pointer font-bold hover:text-amber-700 tansition"
                @click="handleOpen"
            >
                <!-- open-icon -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                    v-if="isOpen"
                >
                    <g>
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path
                            d="M3 4h18v2H3V4zm0 7h12v2H3v-2zm0 7h18v2H3v-2z"
                        />
                    </g>
                </svg>
                <!-- close-icon -->
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960"
                    class="w-6 h-6"
                    v-if="!isOpen"
                >
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
                    />
                </svg>
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
        <div
            class="font-semibold text-center"
            :class="isOpen ? 'hidden' : 'block'"
        >
            <ul class="flex flex-col mb-3">
                <li class="m-3" v-for="d in data">
                    <span
                        :key="d.id"
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
import Logo from './Logo.vue';
import { ref, onMounted, toRefs } from 'vue';

const isOpen = ref(false);
const activeId = ref('');
let windowWidth = ref(window.innerWidth);
const mobileViewpoint = 1024;

onMounted(() => {
    window.addEventListener('resize', function () {
        windowWidth.value = window.innerWidth;
        if (windowWidth.value > mobileViewpoint) {
            isOpen.value = false;
        }
        if (windowWidth.value <= mobileViewpoint && !isOpen.value) {
            isOpen.value = true;
        }
    });
});

const handleOpen = () => (isOpen.value = !isOpen.value);

const handleActive = (id) => (activeId.value = id);

const props = defineProps(['data']);
const { data } = toRefs(props);
</script>
