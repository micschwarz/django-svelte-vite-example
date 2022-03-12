<script lang="ts">
    let count: number = 0;
    const increment = () => {
        count += 1;
    };
</script>

<button class="p-3" on:click={increment}>
    Clicks: {count}
</button>

<style lang="scss">
    @use "sass:color";
    @import "./styles/variables.scss";

    button {
        font-family: inherit;
        font-size: inherit;
        color: $svelte_color;
        background-color: color.change($svelte_color, $alpha: 0.1);
        border-radius: 2em;
        border: 2px solid transparent;
        outline: none;
        width: 200px;
        font-variant-numeric: tabular-nums;
        cursor: pointer;
    }

    button:focus {
        border: 2px solid $svelte_color;
    }

    button:active {
        background-color: color.change($svelte_color, $alpha: 0.2);
    }
</style>
