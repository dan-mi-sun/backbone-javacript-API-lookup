app.views.ApiView = Backbone.View.extend({

  el: "#api",
  events: {
    "change #search": "updateMethods"
  },

  updateMethods: function(event) {
    var search = event.currentTarget.value;
    console.log("Hello from backbone: you typed: " + search);

    try {
      this.methods = this.getProperties(search);
      this.render();
    }
    catch(event){
      $('#results').html("No such object: " + search);
    }
  },

  //Model - What to display - where the data comes from
  getProperties: function(objName) {
    return Object.getOwnPropertyNames(eval(objName).prototype).sort();
  },

  //View - Presentation detail, templates
  render: function() {
    var ul = $("<ul>");
    for(var i = 0; i < this.methods.length; i++) {
      ul.append("<li>" + this.methods[i] + "</li>");
    }
    $('#results').html(ul);
    return this.el;
  }

});
