<script setup>
const show = ref(0);
const router = useRouter();
const route = useRoute();
const props = defineProps({
    'title': String
})

const titleName = ref('')
const init = () => {
    titleName.value = props.title;
}


onMounted(() => {
    init();
})

</script>

<template>
    <div class="header d-flex justify-content-between align-items-center">
        <div class="title_name ps-3">{{ titleName }}</div>
    </div>
</template>

<style scoped lang="scss">
.header {
    height: 45px;
    border-bottom: 1px solid #c8c8c8;
    box-shadow: 0 2px 2px rgba($color: #999999, $alpha: 0.4);

    .title_name {
        font-size: 22px;
    }
}
</style>