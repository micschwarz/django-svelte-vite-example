<script>
    import { icon as faIcon } from "@fortawesome/fontawesome-svg-core";

    export let icon;

    $: html = faIcon(icon).html;
</script>

{@html html}
