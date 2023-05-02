<script>
    import dev from '../assets/images/dev.png';
    import linkedin from '../assets/images/linkedin.png';
    import github from '../assets/images/github.png';
</script>
  
<style lang="scss">
    button:focus {
        outline: 0;
    }

    .socials {
        z-index: 1;
        display: flex;
        height: 100%;
        position: relative;
        border: none;
        background-color: transparent;
        justify-content: center;
        align-items: center;
        cursor: default;
    }

    .logo {
        display: flex;
        width: 100px;
        height: 100px;
        position: relative;
        border: none;
        border-radius: 50%;
        background-color: #ffffff;
        justify-content: center;
        align-items: center;
        -webkit-box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.1);
        -moz-box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.1);
        box-shadow: 0px 4px 0px 0px rgba(0,0,0,0.1);
    }

    .logo-img {
        position: relative;
        top: 5px;
        width: 100%;
        transition: all 0.1s;
    }

    .container {
        z-index: -1;
        width: 100%;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.1s;
        background-color: transparent;
        visibility: hidden;
    }
    .cont-img {
        width: 40px;
        margin: 0 10px;
        cursor: pointer;
    }

    .socials:hover .logo-img, .socials:focus .logo-img {
        visibility: hidden;
    }

    .socials:hover .container, .socials:focus .container {
        z-index: 2;
        visibility: visible;
    }
</style>

<button class="socials">
    <div class="logo">
        <img class="logo-img" src={dev} alt="dev"/>
    </div>
    <div class="container">
        <img class="cont-img" src={linkedin} alt="dev"/>
        <img class="cont-img" src={github} alt="dev"/>
    </div>
</button>