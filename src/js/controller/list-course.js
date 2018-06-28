/**
 * controller - To list course.
 */

// Modules
import CourseListView from "../views/course-list";

// Implementation
export default function() {
  if (!(this.listView instanceof CourseListView))
    this.listView = new CourseListView({
      el: "#page-container"
    });

  this.listView.resolvePromise();
}
