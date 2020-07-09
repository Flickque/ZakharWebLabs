<template>
  <div class="hello">
    <h2>FRMW-004</h2>

	<div>
        <button @click ="upStep">⬆︎</button><input v-model.number="value" type="number" value="5">
        <p>{{num}}<sup>{{step}}</sup>= {{num**(step)}}</p>
        <p v-for="number in value" :key="number">{{num}}<sup>{{step+number}}</sup> = {{num**(step+number)}}</p>
    </div>

  </div>

</template>

<script>

export default {

data() {
        return {
            value: 2,
        }
    },
    props: {
        num: {default: 2},
        step: {default: 10}
    },
    methods: {
        upStep: function() {
            this.value++
        }
    }
}

</script>


<style type="text/css">
	body{
		zoom: 200%;
	}
</style>