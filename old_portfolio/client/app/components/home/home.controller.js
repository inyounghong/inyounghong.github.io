import projects from './../../data/projects.json';

class HomeController {
    constructor() {
        this.name = 'home';
        this.projects = projects;
    }
}

export default HomeController;
