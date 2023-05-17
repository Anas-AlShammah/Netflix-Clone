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
					 <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Text>
          {e.overview}
        </Card.Text>
				<ModelMovie e={e}/>
				</>)
				: null
				}
        <Button variant="primary" onClick={handelDetails}>add to the favorite list</Button>
      </Card.Body>
    </Card>
  );
}

