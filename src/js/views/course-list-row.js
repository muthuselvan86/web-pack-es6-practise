/**
 * This view creates a row of panels.
 */

// Dependencies
import Backbone from "backbone";
import CourseRowTmpl from "../templates/course-list-row";
import CourseListItemView from "../views/course-list-item";

//Export Module.
export default class CouseListRowView extends Backbone.View {
  constructor(options) {
    super(options);
    this.options = options;
  }

  render() {
    this.$el.html(CourseRowTmpl());
    this.renderSubviews();
    return this;
  }

  renderSubviews() {
    let i = 0;
    if (typeof this.options.rowArray !== undefined)
      for (let obj of this.options.rowArray) {
        new CourseListItemView({
          course: obj
        })
          .setElement(this.$el.find(".course-column-" + i))
          .render();
        i++;
      }
  }
}
