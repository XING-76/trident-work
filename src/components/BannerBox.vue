<template>
    <div class="flex md:flex-row flex-col font-bold h-full">
        <div class="flex gap-3 md:w-1/3 p-5" v-for="d in data" :key="d.id">
            <div class="text-4xl [writing-mode:vertical-lr]">
                <span class="relative"
                    >{{ d.title }}

                    <span
                        class="rounded-full block w-4 h-4 border-[.3rem] border-[#b7918a] absolute right-[-.3rem] bottom-[-.3rem] opacity-90"
                    ></span>
                </span>
            </div>

            <div class="md:line-clamp-6">
                {{ d.description }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs } from 'vue';

const props = defineProps(['data']);
const { data } = toRefs(props);
</script>
