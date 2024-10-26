<script setup>
const store = useUserStore();
</script>

<template>
    <div class="mt-8 relative" >
        <div class="button-wrapper">
            <span class="dot dot-1"></span>
            <span class="dot dot-2"></span>
            <span class="dot dot-3"></span>
            <span class="dot dot-4"></span>
            <span class="dot dot-5"></span>
            <span class="dot dot-6"></span>
            <span class="dot dot-7"></span>
            <span class="button bg-yellow-500 px-16 py-4 rounded-full
            uppercase">
            {{ store.uploadedPercentage > 0 ? `${store.uploadedPercentage}%` : 
            store.uploadedPercentage == 0 && store.uploadStarted ? 'Uploading' : 'Upload' }}
        </span>
        </div>
    </div>
</template>

<style scoped>

.button-wrapper{
    position: relative;
}

.button{
    z-index: 1;
    position: relative;
    text-decoration: none;
    text-align: center;
    appearance: none;
    display: inline-block;
    width: 100% ;
}

/* Styling for the button's glowing effect on hover*/
.button::before{
    content: "";
    box-shadow: 0px 0px 24px 0px #FFEB3B;
    mix-blend-mode: screen;
    transition: opacity 0.3s;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 999px;
    opacity: 0;
}

/* Additional glowing effect for the button */
.button::after{
    content: "";
    box-shadow: 0px 0px 23px 0px #FDFCA9 inset, 0px 0px 8px 0px #FFFFFF42;
    transition: opacity 0.3s;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    border-radius: 999px;
    opacity: 0;
}

.button-wrapper:hover{
    .button::before, .button::after{
        opacity: 1;
    }

    .dot{
        transform: translate(0, 0) rotate(var(--rotation))
    }

    .dot::after{
        animation-play-state: running;
    }
}

.dot{
    display: block;
    position: absolute;
    transition: transform calc(var(--speed) / 12) ease;
    width: var(--size);
    height: var(--size);
    transform: translate(var(--starting-x), var(--starting-y))
    rotate(var(--rotation));
}
.dot::after{
    content: "";
    animation: hoverFirefly var(--speed) infinite, dimFirefly
    calc(var(--speed)/2) infinite calc(var(--speed) / 3);
    animation-play-state: paused;
    display:block;
    border-radius: 100%;
    background: yellow;
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 6px 0px #FFEB3B, 0px 0px 4px 0px #FDFCA9 inset,
    0px 0px 2px 1px #FFFFFF42;
}

.dot-1{
    --rotation: 0deg;
    --speed: 14s;
    --size: 6px;
    --starting-x: 30px;
    --starting-y: 20px;
    top: 2px;
    left: -16px;
    opacity: 0.7;
}
.dot-2{
    --rotation: 122deg;
    --speed: 16s;
    --size: 3px;
    --starting-x: 40px;
    --starting-y: 10px;
    top: 1px;
    left: 0;
    opacity: 0.7;
}
.dot-3{
    --rotation: 39deg;
    --speed: 20s;
    --size: 4px;
    --starting-x: 10px;
    --starting-y: 20px;
    top: -8px;
    left: 0;
    right: 14px;
}

.dot-4{
    --rotation: 220deg;
    --speed: 18s;
    --size: 2px;
    --starting-x: -30px;
    --starting-y: -5px;
    bottom: 4px;
    right: -12px;
    opacity: 0.9;
}

.dot-5{
    --rotation: 190deg;
    --speed: 22s;
    --size: 5px;
    --starting-x: -40px;
    --starting-y: -20px;
    bottom: -6px;
    right: -3px;
}

.dot-6{
    --rotation: 20deg;
    --speed: 15s;
    --size: 4px;
    --starting-x: 12px;
    --starting-y: 14px;
    top: -12px;
    left: 30px;
    opacity: 0.7;
}

.dot-7{
    --rotation: 300deg;
    --speed: 19s;
    --size: 3px;
    --starting-x: 6px;
    --starting-y: -20px;
    bottom: -16px;
    left: 44px;
}

@keyframes dimFirefly{
    0%{
        opacity: 1;
    }
    25%{
        opacity: 0.4;
    }
    50%{
        opacity: 0.8;
    }
    75%{
        opacity: 0.5;
    }
    100%{
        opacity: 1;
    }
}

@keyframes hoverFirefly{
    0%{
        transform: translate(0,0)
    }
    12%{
        transform: translate(3px,1px)
    }
    24%{
        transform: translate(-2px, 3px)
    }
    37%{
        transform: translate(2px,-2px)
    }
    55%{
        transform: translate(-1px, 0)
    }
    74%{
        transform: translate(0,2px)
    }
    88%{
        transform: translate(-3px, 1px)
    }
    100%{
        transform: translate(0,0)
    }
}

</style>