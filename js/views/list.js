var ListView = Backbone.View.extend( {
    el: document.getElementById( 'tasklist' ),
    template: _.template( document.getElementById( 'tasktemplate' ).innerHTML ),
    initialize: function ()
    {
        this.collection.on( 'add', this.addOne, this );
        this.collection.on( 'remove', this.remove, this );
        this.collection.on( 'change', this.render, this );
    },
    remove: function ( model )
    {
        this.$el.find( 'a[href="#view-' + model.cid + '"]' ).parent().remove();
    },
    addOne: function ( model )
    {
        var options = model.toJSON();
        options.id = model.cid;

        this.$el.append( this.template( options ) );
    },
    render: function ( model )
    {
        this.$el.find( 'a[href="#view-' + model.cid + '"]' ).html( model.get( 'title' ) );
    }
} );
