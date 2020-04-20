<template>
  <div>
      <h2>{{recipeTitle}}</h2>
      <h3>Ingredients</h3>
      <h2 v-for="(ingredient, i) in ingredients" :key="i">{{ingredient}}</h2>
      <h3>Steps</h3>
      <h2 v-for="(step, i) in steps" :key="i">{{step}}</h2>
  </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: {
        recipeTitle: { type: String, default: "stuff"},
        ingredients: { type: Array, default: () => []},
        steps: { type: Array, default: () => []}
    }
    
}
</script>

<style>

</style>