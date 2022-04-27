import angular from 'angular';
import template from './projectLarge.html';

let projectLargeModule = angular.module('projectLarge', [])
    .component('projectLarge', {
         bindings: {
             project: '=',
         },
         template
    })
    .name;

export default projectLargeModule;
