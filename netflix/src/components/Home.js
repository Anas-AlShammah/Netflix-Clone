import axios from 'axios';
import { useEffect,useState } from 'react';
import MovieList from './MovieList';
export default function Home() {
	const [movie,setMovie]=useState([]);
	const getallfav = () =>{
		const url='http://localhost:3006/trend'
		axios.get(url)
        .then(response=>{
					setMovie(response.data)
            console.log(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
	}
	console.log(movie)
	useEffect(()=>{
		getallfav();
	},[])
	return (
		<>
		<h1>HomePage</h1>
		<MovieList movie={movie}/>
		
		</>
	)
}