/**
 * This view creates a row of panels.
 */

// Dependencies.
import Backbone from 'backbone';
import CourseListTmpl from '../templates/course-list';
import CourseListRowView from '../views/course-list-row';
import CoursesCollection from '../collections/courses';

class CouseListView extends Backbone.View {

  constructor(options) {
    super(Object.assign({}, options, {
      events: {
        "click .next-elem": "showNextPage",
        "click .previous-elem": "showPreviousPage",
        "click .courses-view-type .btn-default": "toggleView"
      }
    }));
  }

  // Initialize the model
  initialize() {
    this.colSize = 3;
    this.collection = new CoursesCollection();
    this.promise = this.collection.fetch();
  }

  /**
   * Resolve the collection data.
   */
  resolvePromise() {
    this.getLoader();
    var _self = this;
    this.promise.done(function () {
      _self.render();
      _self.renderPanelRows(_self.collection.getPage(_self.collection.state.currentPage).toJSON());
    });
    this.promise.fail(function () {
      _self.getError("we are unable to process your request!");
    });
  }

  /**
   * Render the view.
   */
  render() {
    this.$el.html(
      CourseListTmpl({
        rowTwo: this.collection.state.pageSize === 6 ? true : false,
        rowThree: this.collection.state.pageSize === 9 ? true : false
      })
    );
  }

  /**
   * Loader symbol.
   */
  getLoader() {
    this.$el.html('<div><center><i class="fa fa-circle-o-notch fa-spin" style="font-size:24px"></i><center></div>');
  }

  /**
   * Error Message.
   */
  getError(errorText) {
    this.$el.html(
      '<div class="alert alert-danger"><strong><span class="glyphicon glyphicon-alert"></span> Error : </strong>' +
      errorText +
      "</div>"
    );
  }

  /**
   * Render the panel rows.
   */
  renderPanelRows(data) {
    var rowArray,
      row = 0;

    this.$el.find(".course-rows").empty();
    for (var i = 0; i < data.length; i += this.colSize) {
      rowArray = data.slice(i, i + this.colSize);

      this.$el
        .find(".course-rows")
        .append(new CourseListRowView({
          rowArray: rowArray
        }).render().el);
      row++;
    }

    this.enablePagination();
  }

  /**
   * Pagination.
   */
  enablePagination() {
    this.$el
      .find(".previous-elem")
      .toggleClass("disabled", !this.collection.hasPreviousPage());
    this.$el
      .find(".next-elem")
      .toggleClass("disabled", !this.collection.hasNextPage());
  }

  showNextPage(e) {
    e.preventDefault();
    if (this.collection.hasNextPage())
      this.renderPanelRows(this.collection.getNextPage().toJSON());
  }

  showPreviousPage(e) {
    e.preventDefault();
    if (this.collection.hasPreviousPage())
      this.renderPanelRows(this.collection.getPreviousPage().toJSON());
  }

  /**
   * Toggle views.
   */
  toggleView(e) {
    e.preventDefault();
    if ($(e.currentTarget).hasClass("active")) return;
    $(e.currentTarget)
      .addClass("active")
      .siblings()
      .removeClass("active");
    this.collection.setPageSize($(e.currentTarget).data("panelSize"));
    this.renderPanelRows(this.collection.getFirstPage().toJSON());
  }

}

export default CouseListView;