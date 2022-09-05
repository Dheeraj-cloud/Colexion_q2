import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const Header = () =>{
    return (
     
      <Navbar bg="primary" variant="dark" >
      <Container>
        <Nav className="me-auto">
        <Stack direction="horizontal" gap={5}>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/blog"> Our  Blog</Nav.Link>
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          <Button variant="success">Login</Button>{''}
          <Button variant="success">Sign-up</Button>{' '}
         </Stack>
        </Nav>
      </Container>
    </Navbar>
       
      );
}
export default Header