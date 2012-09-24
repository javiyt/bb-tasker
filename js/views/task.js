var TaskView = Backbone.View.extend( {
    el: document.getElementById( 'view' ),
    events: {
        'click a.remove': 'remove'
    },
    remove: function ( e )
    {
        this.model.destroy();
        e.preventDefault();
    },
    showTask: function ( taskid )
    {
        this.model = this.collection.getByCid( taskid );

        this.$el.find( '.title' ).html( this.model.get( 'title' ) );
        this.$el.find( '.description' ).html( this.model.get( 'description' ) );
        this.$el.find( '.assigned' ).html( this.model.get( 'assigned' ) );
    }
} );
