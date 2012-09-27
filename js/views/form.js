define(['jquery', 'underscore', 'backbone'], function( $, _, Backbone )
{
    var FormView = Backbone.View.extend( {
        el: document.getElementById( 'add' ),
        events: {
            'submit form': 'manageTask'
        },
        initialize: function ()
        {
            this.collection.on( 'add change', this.resetForm, this );
        },
        manageTask: function ( e )
        {
            var task = {
                title: document.getElementById( 'title' ).value,
                description: document.getElementById( 'description' ).value,
                assigned: document.getElementById( 'assigned' ).value
            };

            if ( !_.isEmpty( this.model ) )
            {
                this.model.on( 'error', this.showError, this );
                this.model.set( task );
            }
            else
            {
                this.model = this.collection.create( task );
                if ( !this.model )
                {
                    this.showError( this.model, 'Not all information has been filled' );
                }
            }

            e.preventDefault();
        },
        resetForm: function ()
        {
            this.model = undefined;
            this.$el.find( 'input[type="text"]' ).val( '' );
            this.$el.find( 'div.alert' ).addClass( 'hide' )
        },
        editTask: function ( taskid )
        {
            this.model = this.collection.getByCid( taskid );

            document.getElementById( 'title' ).value = this.model.get( 'title' );
            document.getElementById( 'description' ).value = this.model.get( 'description' );
            document.getElementById( 'assigned' ).value = this.model.get( 'assigned' );
        },
        showError: function( model, message )
        {
            this.$el.find( 'div.alert' ).removeClass( 'hide' ).find( 'strong' ).html( message );
        }
    } );

    return FormView;
});