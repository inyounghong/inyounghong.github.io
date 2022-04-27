import angular from 'angular';
import About from './about/about';
import Contact from './contact/contact';
import Detail from './detail/detail';
import Home from './home/home';
import Projects from './projects/projects';
import Resume from './resume/resume';

let componentModule = angular.module('app.components', [
    Home,
    Contact,
    Detail,
    About,
    Projects,
    Resume,
])

.name;

export default componentModule;
