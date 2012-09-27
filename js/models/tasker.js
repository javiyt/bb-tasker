define(['backbone', 'collections/task'], function( Backbone, TaskCollection )
{
    var Tasker =  Backbone.Model.extend({
        defaults: {
            'tasks': new TaskCollection(),
            'done': new TaskCollection()
        }
    });

    return Tasker;
});