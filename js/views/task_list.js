define(['jquery', 'underscore', 'backbone'], function( $, _, Backbone )
{
    var SingleTaskListView = Backbone.View.extend({
        template: _.template( document.getElementById( 'tasktemplate' ).innerHTML ),
        tagName: 'li',
        events: {
            'click a[href^="#remove"]': 'removeModel',
            'click a[href="#done"]': 'markAsDone',
            'click a[href="#reopen"]': 'reopenTask'
        },
        initialize: function( options )
        {
            if ( options.template )
            {
                this.template = options.template;
            }
            this.model.on( 'destroy remove', this.remove, this );
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
        },
        markAsDone: function( e )
        {
            this.trigger( 'task:markAsDone', this.model );
            e.preventDefault();
        },
        reopenTask: function( e )
        {
            this.trigger( 'task:reopen', this.model );
            e.preventDefault();
        }
    });

    return SingleTaskListView;
});