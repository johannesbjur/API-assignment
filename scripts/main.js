const apiKey = '15151d4aa794075c4fccbbadcedd4089'
const url = 'http://api.themoviedb.org/3/'

async function getTopRatedMovies() {

	const response = await fetch("http://api.themoviedb.org/3/movie/top_rated?api_key=15151d4aa794075c4fccbbadcedd4089&language=en", {
		method: 'GET',
		api_key: '15151d4aa794075c4fccbbadcedd4089'

	})

	if(response.ok) {
        return response.json();
    }
}


getTopRatedMovies().then(data => {

	let movies = [];

	data.results.forEach((item, key) => {
		if ( item.vote_count >= 2000 && item.original_language == "en" ) movies.push(item)
	})

	console.log(movies)

	movies.forEach((movie) => {

	document.body.innerHTML = document.body.innerHTML + 
		`<div class="card-group px-5 pt-5">
			<div class="card">
				<div class="card-body">
					<h5 class="card-title">`+ movie.original_title + `</h5>
					`+ movie.overview + `
				</div>
			</div>
		</div>`

	})

})









