// App Module

// libs
import $ from 'jquery';
import Backbone from 'backbone';

// module
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