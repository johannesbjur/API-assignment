const apiKey = '15151d4aa794075c4fccbbadcedd4089'
const url = 'http://api.themoviedb.org/3/'

async function getTopRatedMovies() {

	const response = await fetch(`${url}movie/top_rated/?api_key=${apiKey}`, {
		method: 'GET',
	})

	if(response.ok) {
        return response.json();
    }
}

getTopRatedMovies().then(data => {

	let movies = [];

	if ( !data ) {
		document.body.innerHTML = 
		`<div class="row pt-5">
			<div class="mx-auto">
				<h3>No data</h3>
			</div>
		</div>`
		return
	}

	data.results.forEach( ( item, key ) => {
		if ( item.vote_count >= 2000 && item.original_language == "en" ) movies.push( item )
	})

	movies.forEach((movie) => {

		document.getElementById( "main-card-group" ).innerHTML = document.getElementById( "main-card-group" ).innerHTML + 
			`<div class="card m-5" style="width: 20rem; height: 50rem; overflow: hidden">
				<img class="card-img-top" src="https://image.tmdb.org/t/p/original` + movie.poster_path + `" alt="Card image cap">
				<div class="card-body">
					<h5 class="card-title">`+ movie.original_title + `</h5>
					`+ movie.overview + `
				</div>
			</div>`
		})
})


