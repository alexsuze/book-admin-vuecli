<script setup>
const emits = defineEmits(['titleName']);
const route = useRoute();

const init = () => {
    emits('titleName', route.meta.title);
}

onMounted(() => {
    init();
})
</script>

<template>
    <div>
        <div class="book_img mt-3 ms-3">
            <div class="img_box">
                <img src="https://im1.book.com.tw/image/getImage?i=https://www.books.com.tw/img/E05/003/04/E050030474.jpg&v=5b3564edk&w=375&h=375"
                    alt="">
            </div>
        </div>
        <div>
            <table>
                <tr>
                    <td>書名：</td>
                    <td>你的孩子不是你的孩子</td>
                    <td>作者：</td>
                    <td>吳曉樂</td>
                </tr>

                <tr>
                    <td>譯者：</td>
                    <td>無</td>
                    <td>出版社</td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
.book_img {
    margin: 0 auto;

    .img_box {
        width: 200px;
        height: 250px;

        img {
            width: 100%;
        }
    }
}
</style>