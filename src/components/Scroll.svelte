<script lang="ts">
    document.addEventListener("DOMContentLoaded", () => {
        const progress = document.querySelector(".progress") as HTMLElement;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop;
            const scrolled = (scrollTop / height) * 100;

            progress.style.width = `${scrolled}%`;
        })
    });
</script>
  
<style lang="scss">
    .scroll {
        position: fixed;
        left: 50%;
        transform: translate(-50%);
        top: 100px;
        width: 90%;
        height: 10px;
        z-index: 100;
    }

    .progress {
        height: 100%;
        width: 0;
        border-radius: 100px;
        background: linear-gradient(to right, #8E2DE2, #4A00E0);
    }
</style>

<div class="scroll">
    <div class="progress"></div>
</div>