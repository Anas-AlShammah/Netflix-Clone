import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ModelMovie from './ModelMovie';
export default function Movie({e}) {
	const [details,setDetails]=useState(false)
	function handelDetails (){
		setDetails(true)
	}
  return (
    <Card style={{ width: '18rem' }}>
     
      <Card.Body>
			<Card.Title>{e.title}</Card.Title>
				{details ? (
					<>
					
					 <Card.Img variant="top" src={'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'+e.poster_path} />
        <Card.Text>
				
        </Card.Text>
				<ModelMovie e={e}/>
				</>)
				:<Button variant="primary" onClick={handelDetails}>add to the favorite list</Button>
				}
        
      </Card.Body>
    </Card>
  );
}

