import Movie from "./Movie"
export default function MovieList({movie}) {
	return (
		<>
		
		{movie.map(e=>(
			<ul key={e.id}>
<Movie e={e}/>
			</ul>
		))}
		</>
	)
}