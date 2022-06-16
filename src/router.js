import { createWebHashHistory } from 'vue-router';
import { createRouter } from 'vue-router';
import Home from './views/Home.vue';
import Cats from './views/Cats.vue';
import CatAdd from './views/CatAdd.vue';
import CatsDetail from './views/CatsDetail.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes : [
        {
            path: "/",
            name: "Home",
            component: Home
        },
        {
            path: "/chats",
            name: "Cats",
            component: Cats
        },
        {
            path: "/add",
            name: "Add",
            component: CatAdd
        },
        {
            path: "/chats/:id",
            name: "Detail",
            component: CatsDetail
        },
    ]
});

export default router;