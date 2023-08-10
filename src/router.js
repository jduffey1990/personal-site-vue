import { createRouter, createWebHistory } from 'vue-router';
import IntroSection from './components/IntroSection.vue';
import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/ContactSection.vue';

const routes = [
    { path: '/', component: IntroSection },
    { path: '/about', component: AboutSection },
    { path: '/contact', component: ContactSection }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;