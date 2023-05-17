import axios from "axios"

export default function ModelMovie({e}) {
	const addToFav = (item)=>{
		console.log(item);	
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
		const url='http://localhost:3006/addMovie';
		axios.post(url,e)
		.then(res=>{
			console.log(res)
		})
		.catch((error)=>{
			console.log(error)})

	}
	return (
		<>
		<form onSubmit={handelsubmit}>
			<label htmlFor='comment'>comment</label>
			<input type="text" name="comment" />
			
		
<button onClick={()=>{addToFav(e)}} type="submit">add</button>
</form>
		</>
	)
}