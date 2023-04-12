<template>
    <div>
        <div>Hello React!!!</div>
        <client-only>
            <React />
        </client-only>
        <client-only>
            <ReactFromScratch />
        </client-only>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "IndexPage",
});
</script>
