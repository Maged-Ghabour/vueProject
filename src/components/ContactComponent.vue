<template>
    <div>
        <div class="row">
            <div class="col-8" v-if="showForm">
                <form>
                    <div class="mb-1">
                        <label for="title">Title</label>
                        <input class="form-control" v-model="title" type="title" name="title" id="title">
                    </div>
                    <div class="mb-1">
                        <label for="content">Content</label>

                        <textarea class="form-control" name="content" id="content" rows="5"
                            v-model="content"></textarea>
                    </div>

                    <div class="mb-1">
                        <input type="checkbox" v-model="immdeiatly" true-value="Immediatly"
                            false-value="Not Immdeiatly">
                        <label for="immediately">&nbsp;Send Immdeiatly :</label>
                    </div>

                    <h5 class="text-center">Share On</h5>
                    <div class="mb-1" v-for="social in postData.shareOn" :key="social">
                        <input type="checkbox" :id="social" name="social" :value="social" v-model="shareOn">
                        <label for="immediately">&nbsp; {{ social }}</label>
                    </div>


                    <h5 class="text-center">Categories</h5>
                    <div class="mb-1" v-for="category in postData.categories" :key="category">
                        <input type="radio" :id="category" name="category" :value="category" v-model="categoryData">
                        <label for="immediately">&nbsp; {{ category }}</label>
                    </div>

                    <h5 class="text-center">Series</h5>
                    <div class="mb-1">
                        <select class="form-select" name="aseries" id="aseries" v-model="seriesData">
                            <option v-for="aseries in postData.series" :key="aseries" :value="aseries">
                                {{
                                    aseries
                                }}
                            </option>
                        </select>
                        <label for="immediately">&nbsp; {{ category }}</label>
                    </div>

                    <button @click="showForm = false" class="btn btn-primary d-block w-100">Add</button>

                </form>
            </div>

            <div class="col-4" v-if="showForm">
                <div class="col">
                    <table class="table table-striped">
                        <tbody>
                            <tr>
                                <th class="w-50">Title</th>
                                <td class="w-50">{{ title }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Content</th>
                                <td class="w-50 wraptextarea">{{ content }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Send Immdediatly</th>
                                <td class="w-50">{{ immdeiatly }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Share On</th>
                                <td class="w-50">
                                    <ul>
                                        <li v-for="media in shareOn" :key="media">{{ media }}</li>
                                    </ul>
                                </td>
                            </tr>
                            <tr>
                                <th class="w-50">Category</th>
                                <td class="w-50">{{ categoryData }}</td>
                            </tr>
                            <tr>
                                <th class="w-50">Series</th>
                                <td class="w-50">{{ seriesData }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button @click="showForm = true" class="btn btn-primary d-block w-100">Back</button>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showForm: true,
            title: "",
            content: "",
            immdeiatly: "",
            shareOn: [],
            categoryData: "",
            seriesData: "",

            postData: {
                shareOn: ["instagram", "twitter", "facebook",],
                categories: ["front-end", "back-end", "full stack"],
                series: ["First Edition", "Second Edition", "Third Edition"]
            }
        }
    },

}
</script>

<style scoped>
.wraptextarea {
    white-space: pre;
}
</style>