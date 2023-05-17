import axios from "axios"
import { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function FavList (){
	const [comment,setComment]=useState({});
	const [listFav,setListFav]=useState([]);
	const getFavlist = ()=>{
		const url ='http://localhost:3006/getMovies'
		axios.get(url)
		 .then(res=>{
			console.log(res.data);
			setListFav(res.data)
		 })
		 .catch((error)=>{
			console.log(error);
		 })
	}
	useEffect (()=>{
		getFavlist();
	},[comment])
	function handelDelete (id){
		setListFav(listfav=>listFav.filter(e=>e.id != id))
		const url =`http://localhost:3006/delete/${id}`
		console.log(url)
		axios.delete(url)
		 .then(res=>console.log(res.data))
		 .catch((error)=>console.log(error))
	}
	async function handelUpdata (id,comment){
		const url =`http://localhost:3006/UPDATE/${id}`
		const result=await axios.put(url,comment);
		console.log(result.data)
		const url1 ='http://localhost:3006/getMovies'
		axios.get(url1)
		 .then(res=>{
			console.log(res.data);
			setListFav(res.data)
		 })
		 .catch((error)=>{
			console.log(error);
		 })
	}
	function handelchange (e){
		setComment({comment:e.target.value});
	}
	return(
		<>
		{listFav.map(e=>(
			 <Card style={{ width: '18rem' }}>
     
			 <Card.Body>
			 <Card.Title>{e.title}{e.id}</Card.Title>
				 
		
						<Card.Img variant="top" src="holder.js/100px180" />
				 <Card.Text>
					 {e.overview}
				 </Card.Text>
				 <Card.Text>
				 comment:
				 <form >
			
			<input type="text" name="comment" onChange={handelchange} />
			</form> 
					 {''} {e.comment}
				 </Card.Text>
				 <Button variant="primary" onClick={()=>handelDelete(e.id)}>Delete</Button>
				 <Button variant="primary" onClick={()=>handelUpdata(e.id,comment)}>Updata</Button>
			 </Card.Body>
		 </Card>
		))}

		</>
	)
}