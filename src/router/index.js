import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/views/ContactBook.vue";
import ContactCard from "@/components/ContactCard.vue";
import ContactForm from "@/components/ContactForm.vue";
const routes = [
  {
    path: "/contacts/add",
    name: "contact.add",
    component: () => import("@/views/ContactAdd.vue"),
  },
  {
    path: "/",
    name: "contactbook",
    component: ContactBook,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
  
  {
    path: "/contacts/:id",
    name: "contact.edit",
    component: () => import("@/views/ContactEdit.vue"),
    props: true, // Truyền các biến trong $route.params vào làm props
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;
