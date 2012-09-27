define(['underscore', 'backbone'], function( _, Backbone )
{
    var TaskModel = Backbone.Model.extend( {
        defaults: {
            title: '',
            assigned: '',
            description: ''
        },
        validate: function( attrs )
        {
            if ( _.isEmpty( attrs.title ) || _.isEmpty( attrs.assigned ) || _.isEmpty( attrs.description ) )
            {
                return 'Not all needed attributes are present';
            }
        }
    } );

    return TaskModel;
});