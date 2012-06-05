var FormView = Backbone.View.extend({
    el: document.getElementById( 'add' ),
    events: {
        'submit form#taskform': 'addTask'
    },
    initialize: function()
    {
        _.bindAll( this, 'addTask' );

        this.collection.on( 'add', this.addTaskConfirmed, this );
    },
    addTask: function( e )
    {
        var task = {
            title: document.getElementById( 'title' ).value,
            description: document.getElementById( 'description' ).value,
            assigned: document.getElementById( 'assigned' ).value
        };

        this.collection.add( task );

        e.preventDefault();
    },
    addTaskConfirmed: function()
    {
        this.$el.find( 'input[type="text"]' ).val( '' );
    }
});