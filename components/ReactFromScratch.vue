<script lang="ts">
import { createRoot } from "react-dom/client";

export default {
    props: {
        label: {
            type: String,
        },
    },
    mounted() {
        // React Component のインポート
        const Button = (window as any)["react-component-cdn-template"].Button;

        // ボタンのインスタンス化
        const ButtonReact = Button({
            label: (this as any).$props.label,
            onClick: () => {
                alert("Hello React!");
            },
            bgColor: "#ffff00",
        });

        // レンダリング
        const root = createRoot((this as any).$refs.react as HTMLElement);
        root.render(ButtonReact);
    },
    render(createElement: any) {
        return createElement("div", { ref: "react" });
    },
};
</script>
