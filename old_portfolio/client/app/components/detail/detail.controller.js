import projects from './../../data/projects.json';

class DetailController {
    constructor($stateParams, $location) {

        var id = $stateParams.projectId;

        this.name = 'detail';
        this.projectId = id;
        this.project = projects[id];
        this.imagePath = "./images/" + id;
        this.includePath = '../../../pages/' + id + '.html';

    }
}
DetailController.$inject = ["$stateParams", "$location"];
export default DetailController;
