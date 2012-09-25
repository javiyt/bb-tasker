var TabsView = Backbone.View.extend({
    el: document.getElementById( 'myTabs' ),
    showTab: function( tab )
    {
        var toggle = this.$el.find( 'a[href="#' + tab + '"]' );

        if ( toggle.length == 0 )
        {
            toggle = this.$el.find( 'a[href="#todotasks"]' );
        }

        toggle.tab( 'show' );
    }
});