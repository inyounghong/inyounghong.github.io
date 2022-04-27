import projects from './../../data/projects.json';

class ProjectsController {
    constructor() {
        this.name = 'projects';
        this.projects = projects;
    }
}

export default ProjectsController;
