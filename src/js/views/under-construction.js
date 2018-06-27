/**
 * This view creates a under-construction notice.
 */

// Dependencies.
import Backbone from "backbone";
import UnderConstructionTmpl from "../templates/under-construction";

// Module export
export default class UnderConstructionView extends Backbone.View {
    constructor(options) {
        super(options);
    }

    //Render the view
    render() {
        this.$el.html(UnderConstructionTmpl());
        return this;
    }
}
