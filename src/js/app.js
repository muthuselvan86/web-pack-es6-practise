// App Module

// libs
import $ from 'jquery';
import Backbone from 'backbone';
import 'bootstrap';

import 'html5-boilerplate/dist/css/normalize.css';
import '../css/main.css';
import 'bootstrap/less/bootstrap.less';
import 'font-awesome/scss/font-awesome.scss';
import 'bootstrap/dist/fonts/glyphicons-halflings-regular.woff2';

// moduleh
import Router from './router/router'

// Application module.
class app{
    constructor(){
        new Router();
        Backbone.history.start({pushState:false});
    }
};

// Initialize the app.
$(()=>{
    new app();
});