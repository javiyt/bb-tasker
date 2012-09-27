define(['jquery', 'underscore', 'backbone', 'views/task_list', 'views/tabs'], function( $, _, Backbone, SingleTaskListView, TabsView )
{
    var ListView = Backbone.View.extend( {
        el: document.getElementById( 'tasklist' ),
        template: _.template( document.getElementById( 'tasktemplate' ).innerHTML ),
        tabs: new TabsView(),
        initialize: function ()
        {
            this.collection.on( 'add', this.addOne, this );
            this.collection.on( 'reset', this.render, this );
        },
        addOne: function ( model )
        {
            var view = new SingleTaskListView( {model: model} );

            view.render();
            this.$el.append( view.el );
        },
        render: function ( collection )
        {
            collection.each( function( model )
            {
                this.addOne( model );
            }, this );
        },
        showTab: function( tab )
        {
            this.tabs.showTab( tab );
        }
    } );

    return ListView;
});
