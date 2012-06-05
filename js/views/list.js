var ListView = Backbone.View.extend({
    el: document.getElementById( 'tasklist' ),
    template: _.template( document.getElementById( 'tasktemplate' ).innerHTML ),
    initialize: function()
    {
        this.collection.on( 'add', this.render , this );
    },
    render: function()
    {
        this.$el.find( 'li' ).remove();
        this.collection.each(function( model )
        {
            var options = model.toJSON();
            options.id = model.cid;

            if ( !_.isEmpty( options.title ) )
            {
                this.$el.append( this.template( options ) );
            }
        }, this );
    }
});
