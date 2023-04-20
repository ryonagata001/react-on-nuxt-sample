<script lang="tsx">
import Vue from "vue";
import GuestReservation from './ReactFromLib'
import { createRoot } from "react-dom/client";
import { ReactNode } from "react";
export default Vue.extend({
    mounted() {
        const GuestReservationReact = GuestReservation();
        const root = createRoot((this as any).$refs["lib-component"]);
        root.render(GuestReservationReact);
    },
    render(createElement: any) {
        return createElement("div", { ref: "lib-component" });
    },
});
</script>
