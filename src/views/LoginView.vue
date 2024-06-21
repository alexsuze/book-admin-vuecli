<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const login = () => {
    router.push({ path: '/home' })
}
</script>

<template>
    <div class="container-fluid login">
        <div class="row">
            <div class="col-8 col-lg-8 login_bg_div"></div>
            <div class="col-4 col-lg-4 login_input_div">
                <div class="input_title">
                    <h4>Readmoo 書目系統</h4>
                </div>
                <div class="input_box">
                    <label for="">帳號：</label>
                    <input type="text">
                </div>
                <div class="input_box">
                    <label for="">密碼：</label>
                    <input type="password">
                </div>

                <button @click="login">登入</button>
            </div>
        </div>

    </div>
</template>

<style lang="scss">
.login {

    /* 登入圖片區塊 */
    .login_bg_div {
        height: 100vh;
        background-image: url('@/assets/images/login_img.jpeg');
        background-size: cover;
        background-repeat: no-repeat;
    }

    /* 登入操作區塊 */
    .login_input_div {
        border: 1px solid green;
        padding-top: 150px;

        .input_title {
            margin-bottom: 60px;

            h4 {
                font-size: 30px;
                font-weight: bold;
                color: #3A81E4;
            }
        }

        .input_box {
            margin-bottom: 40px;
        }

        button {
            background-color: #3A81E4;
            color: #FFFFFF;
            padding: 10px 30px;
            border: none;
            border-radius: 5px;
        }

    }
}
</style>