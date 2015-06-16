/**
 * Created by edgilmore on 6/15/2015.
 */
app.directive('programListing', function () {
    return{
        restrict: 'E',
        scope: {
            listing: '='
        },
        templateUrl: 'js/directives/html/program-listing.html'
    };
});
