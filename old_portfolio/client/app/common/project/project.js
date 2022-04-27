import angular from 'angular';
import template from './project.html';

let projectModule = angular.module('project', [])
    .component('project', {
         bindings: {
             project: '=',
         },
         template
    })
    .name;

export default projectModule;
