import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Navbar1 (){
	return(
		<>
		
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Movie App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="me-auto">
								<Nav.Link href="/">Home</Nav.Link>
								<Nav.Link href="/favlist">FavList</Nav.Link>
						</Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
	)
}