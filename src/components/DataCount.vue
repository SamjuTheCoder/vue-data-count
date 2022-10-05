<template>
    <div>
        <center>
            <span class="fa-stack fa-2x" :data-count="count" :style="background">
                <i class="fa fa-envelope fa-stack-1x" :style="color"></i>
            </span>
        </center>
    </div>
</template>
<script>

export default {
    name: 'DataCount',
    props: {
        count: Number,
        color: String,
        background: String,
    },

    data() {
        return {
            //name: 'App',
        }
    }
}
</script>
<style  scoped>
    .fa-stack[data-count]:after{
        position:absolute;
        right:18%;
        top:20%;
        content: attr(data-count);
        font-size:30%;
        padding:.6em;
        border-radius:999px;
        line-height:.75em;
        color: white;
        background:rgba(255,0,0,.85);
        text-align:center;
        min-width:1em;
       
      }
 </style>
