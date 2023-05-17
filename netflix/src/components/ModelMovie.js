import axios from "axios"
import { useState } from "react";
export default function ModelMovie({e}) {
	const [comment,setComment]=useState('');
	let iditem;
	const addToFav = (item)=>{
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
	function handelsubmit (e){
		e.preventDefault();
		setComment(e.target.comment.value);

	}
	return (
		<>
		{comment}
		<form onSubmit={handelsubmit}>
			<label htmlFor='comment'>comment</label>
			<input type="text" name="comment" />
			
		
<button onClick={()=>{addToFav(e)}} type="submit">add</button>
</form>
		</>
	)
}