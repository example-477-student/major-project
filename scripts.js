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


// function for getting JSON data and returning it
async function getData(url, opts) {
    try {
        const response = await fetch(url, opts);
        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            throw(response.status);
        }
    } catch (error) {
        console.error(error);
    }
}


document.addEventListener("DOMContentLoaded", function () {

    // get the list of genres and output to console
    getData('https://api.themoviedb.org/3/genre/movie/list?language=en', options).then(function(result) {

        console.log("genre list:", result);

    });

    // "comedy" is genre # 35, so if we search for that...
    let genreNumber = 35;
    let genreSearchURL = 'https://api.themoviedb.org/3/discover/movie?with_genres=' + genreNumber;
    getData(genreSearchURL, options).then(function(result) {

        console.log("discover results:", result);

        // find the first item in those results
        console.log("first result:", result.results[0].original_title);
    });

});