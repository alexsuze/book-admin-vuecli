<script setup>
</script>

<template>
    <div class="container-fluid">
        <div class="row mb-4">
            <div class="col-6">
                <div class="info_div">
                    <h4 class="mt-2">累計閱讀時數</h4>
                    <div class="d-flex justify-content-evenly mt-2">
                        <div class="time_box">
                            <h5 class="mt-4">當月時數</h5>
                            <div>4,048<span>分鐘</span></div>
                            <div class="mt-2"><span>約</span>67.46<span>小時</span></div>
                        </div>
                        <div class="time_box">
                            <h5 class="mt-4">總時數</h5>
                            <div>70,503<span>分鐘</span></div>
                            <div class="mt-2"><span>約</span>1175.05<span>小時</span></div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="col-6">
                <div class="info_div">
                    <h4 class="mt-2">完讀數量</h4>
                    <div class="d-flex justify-content-evenly mt-2">
                        <div class="time_box">
                            <h5 class="mt-4">當月書量</h5>
                            <div>15<span>本</span></div>
                        </div>
                        <div class="time_box">
                            <h5 class="mt-4">總書量</h5>
                            <div>275<span>本</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <div class="info_div">
                    <h4 class="mt-2">完讀比例</h4>
                </div>

            </div>
            <div class="col-6">
                <div class="info_div">
                    <h4 class="mt-2">閱讀類別</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@font-face {
    font-family: 'CursedTimer';
    src: url('@/assets/fonts/CursedTimerUlil-Aznm.ttf');
}

.info_div {
    border: 1px solid rgba($color: #8c8c8c, $alpha: 0.4);
    box-shadow: 0 2px 2px rgba($color: #999999, $alpha: 0.4);
    height: 300px;
}

.time_box {
    width: 40%;
    height: 200px;
    border: 1px solid #8c8c8c;

    div {
        font-family: 'CursedTimer';
        font-size: 30px;
        font-weight: bolder;

        span {
            font-weight: normal;
            font-size: 16px;
            font-family: 'Courier New', Courier, monospace;
        }
    }
}
</style>