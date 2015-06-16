/**
 * Created by edgilmore on 6/11/2015.
 */
app.controller('MainController', ['$scope', function($scope) {
    $scope.listings =
    [
        {
            series: 'Sherlock',
            series_img: 'img/sherlock.jpg',
            genre: 'Crime drama',
            season: 3,
            episode: 'The Empty',
            description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
            datetime: new Date(2014, 11, 31, 21, 0, 0, 0)
        },
        {
            series: 'Silicon Valley',
            series_img: 'img/silicon-valley.png',
            genre: 'Comedy',
            season: 2,
            episode: 'Two Days of the Condor',
            description: 'The verdict on Pied Piper\'s fate coincides with a startling real-life drama that makes their livestream immensely popular, and emotions run high as the gang tries to keep the company together.',
            datetime: new Date(2015, 6, 7, 21, 0, 0, 0)

        }
    ];
}]);