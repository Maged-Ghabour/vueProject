<template>
    <div class="row">
        <div class="col-4">
            <ul class="list-group">
                <li :class="['list-group-item ', targetComponent == 'PageOneComponent' ? 'activ' : '']"
                    @click="targetComponent = 'PageOneComponent'">Page One</li>
                <li :class="['list-group-item ', targetComponent == 'PageTwoComponent' ? 'activ' : '']"
                    @click="targetComponent = 'PageTwoComponent'">Page Two</li>
                <li :class="['list-group-item ', targetComponent == 'PageThreeComponent' ? 'activ' : '']"
                    @click="targetComponent = 'PageThreeComponent'">Page Three</li>
            </ul>
        </div>
        <div class="content col-8 border border-1">
            <keep-alive>
                <component :is="targetComponent">
                </component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
import PageOneComponent from './partialComponents/PageOneComponent.vue';
import PageTwoComponent from './partialComponents/PageTwoComponent.vue';
import PageThreeComponent from './partialComponents/PageThreeComponent.vue';

export default {

    data() {
        return {
            targetComponent: PageOneComponent
        }
    },
    components: {
        PageOneComponent,
        PageTwoComponent,
        PageThreeComponent
    }
}

</script>

<style>
/* * {
    cursor: url("../assets/cursor.png"), auto;
} */

.content {
    height: calc(100vh - 150px);
}

.activ {
    background-color: #bafffe;

}
</style>