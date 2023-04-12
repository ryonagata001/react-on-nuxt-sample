<template>
    <react-button bgColor="#ffff00" :onClick="onClick"></react-button>
</template>
<script lang="jsx">
import Vue from "vue";
export default Vue.extend({
    name: "ReactComp",
    components: {
        'react-button': process.browser && window["react-component-cdn-template"].Button, // <-- わざわざCDNで配信する必要はない
    },
    methods: {
      onClick() {
        alert('clicked');
      }
    },
});
</script>
