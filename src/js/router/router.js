// Router module.

// libs
import Backbone from "backbone";

// modules
import HomeController from "../controller/list-course";
import ViewCourseController from "../controller/view-course";
import UnderConstructioController from "../controller/under-construction";

class Router extends Backbone.Router {
    constructor() {
        super(
            Object.assign(
                {},
                {
                    routes: {
                        home: HomeController,
                        "viewcourse/:id": ViewCourseController,
                        createcourse: UnderConstructioController,
                        "editcourse(/:id)": UnderConstructioController,
                        "deletecourse(/:id)": UnderConstructioController,
                        "*splat": HomeController
                    }
                }
            )
        );
    }

    initialize() {
        console.log("Hello Router");
    }
}

export default Router;
