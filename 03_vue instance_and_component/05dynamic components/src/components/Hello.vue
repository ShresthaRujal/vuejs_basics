<template>
    <div class="container">
        <div>
            <p>slot is takes over and renders the contains between the opening and closing selector that were passed from outside </p>
            <slot name="title"></slot>
        </div>
        <div>
            <slot name="para"></slot>
        </div>
        <div>
            <p>place for default slot</p>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default { 
    
}
</script>

<style scoped>
    div{
        border: 1px solid #ccc;
        box-shadow:  1px 1px 2px black;
        padding: 30px;
        margin: 30px auto;
        text-align: center;
    }

    h3{
        color: red;
    }
</style>
