<script setup>
import Chart from 'chart.js/auto';
import current from '@/assets/json/currentRead.json';
const chartObj = reactive({
    labels: [
        '06/01',
        '06/02',
        '06/03',
        '06/04',
        '06/05',
        '06/06',
        '06/07',
    ],
    datasets: [
        {
            label: "時數(分)",
            data: [33, 22, 55, 44, 12, 65, 32],
            backgroundColor: ['#3A81E4'],
            barPercentage: 0.5
        }
    ]
})

const listData = reactive({
    'time': [],
    'read': {},
    'all': {}
})
const init = () => {
    const ctx = document.getElementById('readedChart');
    let chart = new Chart(ctx, {
        type: 'bar',
        data: chartObj,
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    })
    listData.time = current.data.current;
    console.log(listData.time);
}

onMounted(() => {
    init();
})
</script>

<template>
    <div class="frontpage container-fluid">
        <div class="row mt-4">
            <div class="col-6 ">
                <div class="info_box me-2">
                    <h4 class="mt-2">近期閱讀時數</h4>
                    <div class="chart_box">
                        <canvas id="readedChart"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="info_box me-2">
                    <h4 class="mt-2">近期閱讀書籍</h4>
                    <div class="d-flex justify-content-center row mt-4">
                        <div class="col-4 book_box">
                            <img src="@/assets/images/book_1.jpg" alt="" srcset="">
                        </div>
                        <div class="col-4 book_box">
                            <img src="@/assets/images/book_2.webp" alt="" srcset="">
                        </div>
                        <div class="col-4 book_box">
                            <img src="@/assets/images/book_3.jpg" alt="" srcset="">
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <!-- <div class="row mt-4">
            <div class="col-6">
                <div class="info_box me-2">
                    <h4 class="mt-2">本月累計時數</h4>
                    <div class="row mt-4">
                        <div class="col-6">
                            <h5>本月時數</h5>
                        </div>
                        <div class="col-6">
                            <h5>上月時數</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="info_box">
                    <h4 class="mt-2">近期購買書籍</h4>
                </div>
            </div>
        </div> -->
    </div>
</template>

<style scoped lang="scss">
.chart_box {
    width: 95%;
    height: 250px;
    margin: 0 auto;

    canvas {
        width: 90%;
    }
}

.info_box {
    border: 1px solid rgba($color: #8c8c8c, $alpha: 0.4);
    box-shadow: 0 2px 2px rgba($color: #999999, $alpha: 0.4);
    height: 300px;
}

.book_box {
    width: 25%;

    img {
        width: 100%;
    }
}
</style>