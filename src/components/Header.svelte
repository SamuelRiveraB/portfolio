<script lang="ts">
    import Socials from './Socials.svelte';
</script>

<style lang="scss">
    .header {
        display: flex;
        position: fixed;
        width: 100%;
        height: 50px;
        top: 0;
        left: 0;
        border: none !important;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        border-bottom: 1px solid #ccc;
        -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
        box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.1);
        z-index: 10;
    }
</style>

<header class="header">
    <Socials />
</header>