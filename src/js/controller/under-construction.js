/**
 * controller - Under construction course.
 */

// Dependencies.
import UnderConstructionView from '../views/under-construction'

// Export module.
export default function () {
  if (!(this.view instanceof UnderConstructionView))
    this.view = new UnderConstructionView({
      el: "#page-container"
    });
  this.view.render();
};