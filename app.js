/**
 * We add a data object to the options we pass into our Vue constructor. 
 * That data object contains/returns a multiple properties
 * 
 * Vue automatically creates getter and setter functions for each property of the data
object when it initializes our application. That gives us the ability to retrieve the current value of, or set a new value for, any of our instance’s properties without writing
any additional code.
 */

const myvueapp = Vue.createApp({
    data() {
        return {
            movieTitle0: 'The Godfather',
            moviePoster0: 'images/moviePosterTheGodfather.png',
            movieTitle1: 'The Godfather Part II',
            moviePoster1: 'images/moviePosterTheGodfatherPart2.png',
            movieTitle2: 'Star Wars',
            moviePoster2: 'images/moviePosterStarWars.png',
            text0: '',
            text1: '',
            text2: '',
            newMovieTitle: '',
            avgRating: '',
            ratings: [
                {id: 0, rating: 5},
                {id: 1, rating: 4},
                {id: 2, rating: 4}
            ]
        }
    },

    /** Define a new method getUser() that will return new user info with image
     * We will enhance this method to make an API call next
     * You can access data elements using the this keyword
     * Note that you are using the assignment operator here to set values
     */

    methods: {
        /** Define a method that will make an API call to get random user data. This has to be async and 
         * must wait for response so use await keyword
         * TO use this method, update the HTML code on-click to use this method on click event
         */

        onInput0(e) {
            this.text0 = e.target.value;
        },

        onInput1(e) {
            this.text1 = e.target.value;
        },

        onInput2(e) {
            this.text2 = e.target.value;
        },

        setAvg(rating) {
            const total = 0;
            length = rating.ratings,length;
            for (var i = 0; i<length; i++) {
                total += parseFloat(rating[i]);
            }
            rating.avgRating = total / length;
        },

        getTitle(){
            const newMovieTitle = document.querySelector("input[name=frmMovieTitle]");
        },

        async getNextAsync() {

            const resp = await fetch('data/movies.json');
            const { results } = await resp.json();

            console.log(results);

            /*Observe the fetch response in browser console output
            that is what's used to build response here*/

            // this.movieTitle0 = results[0].movieTitle;
            // this.moviePoster0 = results[0].moviePoster;
            // this.movieTitle1 = results[1].movieTitle;
            // this.moviePoster1 = results[1].moviePoster;
        },
    },
})

myvueapp.mount('#app')
