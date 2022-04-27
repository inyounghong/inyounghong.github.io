import angular from 'angular';
import Experience from './experience/experience';
import Sidebar from './sidebar/sidebar';
import Project from './project/project';
import ProjectLarge from './projectLarge/projectLarge';

let commonModule = angular.module('app.common', [
    Experience,
    Sidebar,
    Project,
    ProjectLarge,
])

.name;

export default commonModule;
