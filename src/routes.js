import Contact from "./Contact.vue" 
import About from "./About.vue" 
import RecipeList from "./RecipeList.vue"

export default [
    { path: "/", component: RecipeList },
    { path: "/about", name: "about", component: About},
    { path: "/contact", name: "contact", component: Contact}
]