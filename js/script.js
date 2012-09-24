var AppRouter = Backbone.Router.extend( {
    routes: {
        'add': 'add',
        'view-:id': 'view',
        'edit-:id': 'add',
        '*home': 'home'
    },
    views: {},
    collections: {},
    initialize: function ()
    {
        this.collections.tasks = new TaskCollection();
        this.views.list = new ListView( {collection: this.collections.tasks} );
        this.views.task = new TaskView( {collection: this.collections.tasks} );
        this.views.form = new FormView( {collection: this.collections.tasks} );

        this.collections.tasks.on( 'add', this.goToHome, this );
        this.collections.tasks.on( 'remove', this.goToHome, this );
        this.collections.tasks.on( 'change', this.goToHome, this );

        this.collections.tasks.fetch();
    },
    showOnly: function ( section )
    {
        $( 'div.hero-unit' ).hide();
        $( '#' + section ).show();
        $( 'li', 'ul.nav' ).removeClass( 'active' );
        $( 'a[href="#' + section + '"]', 'ul.nav' ).parent().addClass( 'active' );
    },
    goToHome: function ()
    {
        this.navigate( 'home' );
        this.home();
    },
    home: function ()
    {
        this.showOnly( 'home' );
    },
    add: function ( taskid )
    {
        this.showOnly( 'add' );

        if ( taskid )
        {
            this.views.form.editTask( taskid );
        }
        else
        {
            this.views.form.resetForm();
        }
    },
    view: function ( taskid )
    {
        this.showOnly( 'view' );
        this.views.task.showTask( taskid );
    }
} );

$( function ()
{
    var App = new AppRouter();
    Backbone.history.start();
} );




