/**
 * collection - To store the courses.
 */

// Dependencies
import PageableCollection from 'backbone.paginator';
import CourseModel from '../models/course';

export default class CoursesCollection extends Backbone.PageableCollection {

  constructor(options) {
    super({},{
      model: CourseModel,
      mode: "client",
      state: {
        pageSize: 6,
        currentPage: 1
      }

    })
  }

  get url() {
    return 'http://localhost:3000/inventory/list';
  }
}