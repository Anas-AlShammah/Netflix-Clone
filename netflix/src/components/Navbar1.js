import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navbar1 (){
	return(
		<>
		<Navbar bg="primary" variant="dark">
				<Container>
						
						<Nav className="me-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/favlist">FavList</Nav.Link>
						</Nav>
				</Container>
		</Navbar>
</>
	)
}