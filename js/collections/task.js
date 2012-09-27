define(['backbone', 'models/task'], function( Backbone, TaskModel )
{
    var TaskCollection = Backbone.Collection.extend( {
        model: TaskModel,
        localStorage: new Backbone.LocalStorage( 'TaskCollection' )
    } );

    return TaskCollection;
});
