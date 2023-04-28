<script lang="ts">
    import Socials from './Socials.svelte';
</script>

<style lang="scss">
    header {
        display: flex;
        position: fixed;
        width: 100%;
        height: 50px;
        top: 0;
        left: 0;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
    }
</style>

<header class="header">
    <Socials />
</header>