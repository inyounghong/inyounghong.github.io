import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resumeComponent from './resume.component';

let resumeModule = angular.module('resume', [
  uiRouter
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('resume', {
      url: '/resume',
      component: 'resume'
    });
})

.component('resume', resumeComponent)

.name;

export default resumeModule;
