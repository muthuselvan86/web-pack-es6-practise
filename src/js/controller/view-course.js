/**
 * controller - To view course.
 */

// Dependencies
import CourseView from "../views/course-view";

// Export module.
export default function() {
    new CourseView({
        el: "#page-container"
    }).render();
}
