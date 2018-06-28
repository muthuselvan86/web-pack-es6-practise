/**
 * This view creates a row of panels.
 */

import Backbone from "backbone";
import CourseViewTmpl from "../templates/course-view";
import Session from "../app/session";

export default class CourseView extends Backbone.View {
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
      CourseViewTmpl({
        course: Session.getCourseData()
      })
    );
    return this;
  }
}
