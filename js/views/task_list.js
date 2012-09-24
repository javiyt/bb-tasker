var SingleTaskListView = Backbone.View.extend({
    template: _.template( document.getElementById( 'tasktemplate' ).innerHTML ),
    tagName: 'li',
    events: {
        'click a[href^="#remove"]': 'removeModel'
    },
    initialize: function()
    {
        this.model.on( 'destroy', this.remove, this );
        this.model.on( 'remove', this.remove, this );
        this.model.on( 'change', this.render, this );
    },
    removeModel: function( e )
    {
        this.model.destroy();
        e.preventDefault();
    },
    remove: function()
    {
        this.$el.remove();
    },
    render: function()
    {
        var options = this.model.toJSON();

        options.id = this.model.cid
        this.el.innerHTML = this.template(  options );
        return this;
    }
});