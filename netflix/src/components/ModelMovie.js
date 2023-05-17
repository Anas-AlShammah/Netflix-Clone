import axios from "axios"
import { useState } from "react";

export default function ModelMovie({e}) {
	const [comment,setComment]=useState({});
	const [value,setValue]=useState({
		title:"",summary:'',comment:""
	});
	let iditem;
	const addToFav = (item)=>{
		
		item={...item,...comment}
		console.log(item);
	iditem=e.item	;
		const url='http://localhost:3006/addMovie'
		axios.post(url,item)
		.then(res=>{
			console.log(res)
		})
		.catch((error)=>{
			console.log(error)})
		
	}
	function handelchange (e){
		setComment({comment:e.target.value});
	}
	console.log(comment)
	return (
		<>
	
		<form >
			<label htmlFor='comment' >comment</label>
			<input type="text" name="comment" onChange={handelchange} />
			</form>
<button onClick={()=>{addToFav(e)}} >add</button>

		</>
	)
}