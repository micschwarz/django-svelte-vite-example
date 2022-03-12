<script lang="ts">
    import "./lib/styles/main.scss";
    import Counter from "./lib/Counter.svelte";
    import Icon from "./lib/Icon.svelte";
    import { faUserAstronaut } from "@fortawesome/free-solid-svg-icons";
    import SvelteLogo from "./lib/SvelteLogo.svelte";
</script>

<main class="container text-center p-2">
    <SvelteLogo/>

    <div class="icon p-3 fs-3">
        <Icon icon={faUserAstronaut}/>
    </div>

    <Counter />
</main>

<style lang="scss">
    @import "./lib/styles/variables";

    .icon {
        color: $svelte_color;
    }
</style>
