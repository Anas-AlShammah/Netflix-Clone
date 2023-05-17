import axios from "axios"
import { useState,useEffect } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function FavList (){
	const [comment,setComment]=useState({});
	const [listFav,setListFav]=useState([]);
	const [updata,setUpdata]=useState(false);
	const getFavlist = ()=>{
		const url ='http://localhost:3006/getMovies'
		axios.get(url)
		 .then(res=>{
			
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
		
		axios.delete(url)
		 .then(res=>console.log(res.data))
		 .catch((error)=>console.log(error))
	}
	async function handelUpdata (id,comment){
		const url =`http://localhost:3006/UPDATE/${id}`
		const result=await axios.put(url,comment);
		
		const url1 ='http://localhost:3006/getMovies'
		axios.get(url1)
		 .then(res=>{
			
			setListFav(res.data)
		 })
		 .catch((error)=>{
			console.log(error);
		 })
	}
	function handelchange (e){
		setComment({comment:e.target.value});
	}
	function handelApper(){
		setUpdata(true);
	}
	return(
		<>
		{listFav.map(e=>(
			 <Card style={{ width: '18rem' }}>
    
			 <Card.Body>
			 <Card.Title>{e.title}{e.id}</Card.Title>
				 
		
					
				 <Card.Text>
					 {e.summary}
				 </Card.Text>
				 <Card.Text>
				 comment:
				 {updata ? ( <form >
			
			<input type="text" name="comment" onChange={handelchange} />
			<Button variant="primary" onClick={()=>handelUpdata(e.id,comment)}>Updata</Button> 
			</form> 
			
			): null}
				
					 {''} {e.comment}
				 </Card.Text>
				 <Button variant="primary" onClick={()=>handelDelete(e.id)}>Delete</Button>
				 {!updata && <button onClick={handelApper} >Updata</button> }
			 </Card.Body>
		 </Card>
		))}

		</>
	)
}