import template from './app.html';
import './app.scss';

let appComponent = {
  template,
  controller: function() {
      this.loaded = true;
  }
};

export default appComponent;
