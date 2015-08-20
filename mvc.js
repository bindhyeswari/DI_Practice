

/**
 * @class Model
 * @description Creates a model object which can be used to update a model
 * */
function Model() {

}
Model.prototype.set = function (property_name, property_value) {
    // update the model data
    // update the view
};


function View(updatefn) {
    // custom code to take in information and update the view for that
    // all view logic --> what elements to update and what operations
    //   need to be performed stay within the view function
    this.update = updatefn;
}

function Controller(model, view) {
    // attach view and model
}

var candidates_model = new Model();
candidates_model.set('canddidates', [{name: 'Alok'}, {name: 'Likhita'}]);


