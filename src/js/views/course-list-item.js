/**
 * This view creates a row of panels.
 */

import Backbone from "backbone";
import CourseRowItemTmpl from "../templates/course-list-item";
import Session from "../app/session";

export default class CourseListItemView extends Backbone.View {
  constructor(options) {
    super(
      Object.assign({}, options, {
        events: {
          "click .course-link": "handleClick"
        }
      })
    );
    this.options = options;
  }

  //Render the view
  render() {
    this.$el.html(
      CourseRowItemTmpl({
        course: this.options.course
      })
    );
    return this;
  }

  // Handle the click event.
  handleClick(e) {
    e.preventDefault();
    Session.setCourseData(this.options.course || {});
    Backbone.history.navigate(e.currentTarget.hash, {
      trigger: true
    });
  }
}
