var Tasker =  Backbone.Model.extend({
    defaults: {
        'tasks': new TaskCollection(),
        'done': new TaskCollection()
    }
});