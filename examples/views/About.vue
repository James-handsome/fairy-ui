<template>
    <div>
       <f-slider v-model="value6" :step="10" show-stops></f-slider>
       
    </div>
</template>

<script>
export default {
    data() {
        return {
            value6:10,
            value7:20
        }
    },
}
</script>
