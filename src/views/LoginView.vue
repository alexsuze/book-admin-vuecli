<script setup>

</script>

<template>
    <div class="container-fluid login">
        <div class="row">
            <div class="col-9 login_bg_div"></div>
            <div class="col-3 login_input_div">
                <div>
                    <h4>Readmoo 書目系統</h4>
                </div>
                <div>
                    <label for="">帳號：</label>
                    <input type="text">
                </div>
                <div>
                    <label for="">密碼：</label>
                    <input type="password">
                </div>
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
    }
}
</style>