// App Module

// libs
import $ from "jquery";
import Backbone from "backbone";
import "bootstrap";

import "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2";
import "html5-boilerplate/dist/css/normalize.css";
import "bootstrap/less/bootstrap.less";
import "font-awesome/scss/font-awesome.scss";
import "../css/main.css";

// modules
import Router from "./router/router";

// Application module.
class app {
    constructor() {
        new Router();
        Backbone.history.start({
            pushState: false
        });
    }
}

// Initialize the app.
$(() => {
    new app();
});
