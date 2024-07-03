<script setup>
const pageData = reactive({
    'page': 1,
    'maxPage': 10,
    'dataNum': 13
})
</script>

<template>
    <div class="booklist contain-fluid">
        <div class="row mt-4 pb-4 search_box">
            <div class="col-12 row ms-2">
                <div class="col-3 text-start">
                    <label for="">書名：</label><input type="text">
                </div>
                <div class="col-3 text-start">
                    <label for="">作者：</label><input type="text">
                </div>
                <div class="col-3 text-start">
                    <label for="">出版社：</label><input type="text">
                </div>
                <div class="col-3 text-start">
                    <label for="">主題：</label>
                    <select name="" id="">
                        <option value="">全部</option>
                    </select>
                </div>
            </div>

            <div class="col-12 row mt-4">
                <div class="col-12 text-start ps-4 search_fn">
                    <button class="search_btn">查詢</button>
                    <button class="reset_btn">重置</button>
                </div>
            </div>
        </div>

        <div class="book_list mt-4">
            <h4 class="text-start ms-4">書目列表</h4>
            <div class="row">
                <div class="col-12 book_table">
                    <table>
                        <thead>
                            <th>序號</th>
                            <th>ISBN</th>
                            <th>書名</th>
                            <th>作者</th>
                            <th>出版社</th>
                            <th>出版日期</th>
                            <th>主題</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td class="text-start ps-2">9991070629011</td>
                                <td class="text-start ps-2">你的孩子不是你的孩子</td>
                                <td class="text-start ps-2">吳曉樂</td>
                                <td class="text-start ps-2">網路與書</td>
                                <td>2018/07/05</td>
                                <td class="text-start ps-2">教育現場</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td class="text-start ps-2">9789861372556</td>
                                <td class="text-start ps-2">筆尖上的世界史：形塑民族、歷史和文明的故事力量</td>
                                <td class="text-start ps-2">馬汀·普赫納</td>
                                <td class="text-start ps-2">究竟出版</td>
                                <td>2018/07/01</td>
                                <td class="text-start ps-2">文化史</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-8"></div>
                <div class="col-4 d-flex justify-content-end align-item-center pe-4">
                    <div class="me-2">共{{ pageData.dataNum }}筆</div>
                    <div class="me-2 page_btn"><img src="@/assets/images/icons/left-arrow.svg" alt=""></div>
                    <div class="me-2"><input class="page_input" type="text" v-model="pageData.page"></div>
                    <div class="me-2">/</div>
                    <div class="me-2">{{ pageData.maxPage }}</div>
                    <div class="me-2 page_btn"><img src="@/assets/images/icons/right-arrow.svg" alt=""></div>
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.search_box {
    border-bottom: 1px solid rgba($color: #8c8c8c, $alpha: 0.4);
}

.book_table {
    table {
        width: 98%;
        margin: 0 auto;

        th {
            border: 1px solid #8c8c8c;
        }

        tr:nth-child(even) {
            background-color: rgba($color: #abd2ff, $alpha: 0.4);
        }

        td {
            border: 1px solid #8c8c8c;
        }


    }
}

.search_fn {
    button {
        margin-right: 5px;
        padding: 5px 8px;

        &.search_btn {
            background-color: #3A81E4;
            color: #FFFFFF;
            border: none;
            border-radius: 5px;
        }

        &.reset_btn {
            background-color: #FFFFFF;
            color: #3A81E4;
            border: 1px solid #3A81E4;
            border-radius: 5px;
        }
    }
}

.book_list {
    h4 {
        color: #3A81E4;
    }
}

.page_input {
    width: 60px;
    padding-left: 5px;
}

.page_btn {
    cursor: pointer;
}
</style>