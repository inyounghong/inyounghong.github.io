import angular from 'angular';
import template from './experience.html';

let experienceModule = angular.module('experience', [])
    .component('experience', {
         bindings: {
             experience: '=',
         },
         template,
    })
    .name;

export default experienceModule;
