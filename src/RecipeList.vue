<template>
    <div class="container mt-1">
        <b-button variant="success" class="float-right" @click="showAddModal=true">Add Recipe</b-button>
        <h1>My Recipe List</h1> 
        <b-modal size="lg" title="Add New Recipe" v-model="showAddModal" @ok="recipes.push(newRecipe)">
        Title: <b-input v-model="newRecipe.title"></b-input>
        </b-modal>
        <recipe v-for="(recipe, i) in recipes" :key="i" :recipeTitle="recipe.title"></recipe>
  </div>
</template>
<script>
import Recipe from "./Recipe.vue";

export default {
components: { Recipe },
  data() {
    return {
      message: 'Hello World',
      recipes: [],
      showAddModal: false,
      newRecipe: {
        title: ""
      }
    };
  },
}
</script>

<style>

</style>