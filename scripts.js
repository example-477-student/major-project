// scripts for major project

// first sign up for API Read Access Token and Key at https://www.themoviedb.org/settings/api
// then use options copied from https://developer.themoviedb.org/reference/discover-movie

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjFiNzYwNjlmNjRiNjU5MmY4NGJiOTQ5YmQ5ZGVkNiIsIm5iZiI6MTc3NzkxNTYwMS41MzIsInN1YiI6IjY5ZjhkNmQxY2ZlMTA5OTNlYmRmNTczYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BOdM0xjg3W246TZQTxQtxeTRmgXZD73klu19tQkiWF8'
    }
};


document.addEventListener("DOMContentLoaded", function () {

    // get the list of genres and output to console
    fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(err => console.error(err));

    // "comedy" is genre # 35, so if we search for that...
    fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=35', options)
        .then(res => res.json())
        .then(function(result) {
            // the JSON object is in "result"
            console.log(result);
        })
        .catch(err => console.error(err));

});