define(['jquery', 'underscore', 'backbone', 'views/task_list', 'views/tabs'], function( $, _, Backbone, SingleTaskListView, TabsView )
{
    var ListView = Backbone.View.extend( {
        el: document.getElementById( 'tasklist' ),
        template: null,
        tabs: new TabsView(),
        initialize: function ( options )
        {
            if ( options.template )
            {
                this.template = options.template;
            }

            this.collection.on( 'add', this.addOne, this );
            this.collection.on( 'reset', this.render, this );
        },
        addOne: function ( model )
        {
            var view = new SingleTaskListView( {model: model, template: this.template} );

            view.render();

            view.on( 'task:markAsDone', this.markAsDone, this );
            view.on( 'task:reopen', this.reopenTask, this );

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
        },
        markAsDone: function( model )
        {
            this.trigger( 'task:markAsDone', model.get( 'id' ) );
        },
        reopenTask: function( model )
        {
            this.trigger( 'task:reopen', model.get( 'id' ) );
        }
    } );

    return ListView;
});
