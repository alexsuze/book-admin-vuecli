<script setup>
const show = ref(0);
const router = useRouter();
const route = useRoute();

const init = () => {
    console.log(route);
}

const toggle = () => {
    show.value = show.value == 0 ? 1 : 0;
}

const goPage = (idx) => {
    if (idx == 0) {
        router.push({ path: '/' })
    } else {

    }
}
onMounted(() => {
    init();
})
</script>

<template>
    <div class="header d-flex justify-content-between">
        <div></div>
        <div class="toggle_box">
            <div class="d-flex justify-content-end align-items-center pe-3 toggle_info">
                <div class="char_img me-1">
                    <img src="@/assets/images/icons/person-gear.svg" width="20px" alt="" srcset="">
                </div>
                <div class="me-1">alexsuze</div>
                <div class="toggle_img" @click="toggle">
                    <img v-show="show == 0" src="@/assets/images/icons/caret-down.svg" width="20px" alt="" srcset="">
                    <img v-show="show == 1" src="@/assets/images/icons/caret-up.svg" width="20px" alt="" srcset="">
                </div>
            </div>
            <div v-show="show == 1" class="toggle_con">
                <div class="mt-2 mb-2" @click="goPage(0)">登出</div>
                <div class="mb-2" @click="goPage(1)">關於作者(前往github)</div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.header {
    height: 45px;
    border-bottom: 1px solid #c8c8c8;
    box-shadow: 0 2px 2px rgba($color: #999999, $alpha: 0.4);


    .toggle_box {
        width: 200px;
        height: 45px;
        text-align: end;

        .toggle_info {
            height: 45px;

            .toggle_img {
                cursor: pointer;
            }
        }

        .toggle_con {
            width: 200px;
            border: 1px solid rgba($color: #8c8c8c, $alpha: 0.4);
            box-shadow: 0 2px 2px rgba($color: #999999, $alpha: 0.4);
            text-align: center;

            div {
                cursor: pointer;
            }
        }
    }

}

.char_box {
    overflow: visible;
}
</style>