var TaskCollection = Backbone.Collection.extend( {
    model: TaskModel,
    localStorage: new Backbone.LocalStorage( 'TaskCollection' )
} );