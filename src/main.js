import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router'; 
import ContactList from './components/ContactList.vue' // kad stavimo .pa / to se odnosi na trenutni nivo, trenutni folder u kom se nalazimo
import AddContact from './components/ContactList.vue'
import ContactDetails from './components/ContactDetails.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
  {path:'/', redirect: '/contacts'}, // nije neophodno ali da znamo da nam to treba kad otvorimo stranicu
  {path: '/contacts', component: ContactList},
  {path: '/add-contact', component: AddContact},
  {path: '/contacts/:id', component: ContactList, name:'contact-details' }
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
