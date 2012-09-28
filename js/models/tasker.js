define(['backbone', 'collections/task'], function( Backbone, TaskCollection )
{
    var Tasker =  Backbone.Model.extend({
        defaults: {
            'tasks': new TaskCollection(),
            'done': new TaskCollection()
        },
        markAsDone: function( id )
        {
            var model = this.get( 'tasks' ).get( id );

            this.get( 'tasks' ).remove( id );
            this.get( 'done' ).add( model );
        },
        reopenTask: function( id )
        {
            var model = this.get( 'done' ).get( id );

            this.get( 'done' ).remove( id );
            this.get( 'tasks' ).add( model );
        }
    });

    return Tasker;
});