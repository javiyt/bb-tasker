var TaskView = Backbone.View.extend({
    el: document.getElementById( 'view' ),
    showTask: function( taskid )
    {
        var model = this.collection.getByCid( taskid );

        this.$el.find( '.title' ).html( model.get( 'title' ) );
        this.$el.find( '.description' ).html( model.get( 'description' ) );
        this.$el.find( '.assigned' ).html( model.get( 'assigned' ) );
    }
});
