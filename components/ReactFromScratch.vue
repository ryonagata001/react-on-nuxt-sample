<template>
    <div>
        <div id="root"></div>
    </div>
</template>
<script lang="tsx">
import { createRoot } from "react-dom/client";
import { ReactNode } from 'react';

export default {
    mounted() {
        const Button = (window as any)["react-component-cdn-template"].Button as ReactNode;
        console.log(1);
        const root = createRoot(document.getElementById("root")!);
        console.log(2);
        root.render(
            <Button bgColor="#ffff00" onClick={() => alert("clicked")} />
        );
        console.log(3);
    },
};
</script>
