<template>
    <div>
        <div>Hello React!!!</div>
        <client-only>
            <ReactFromScratch :label="message" />
        </client-only>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "IndexPage",
    data: () => ({
        message: "Hello Vue!",
    }),
});
</script>
