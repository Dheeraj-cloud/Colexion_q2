import Nav from 'react-bootstrap/Nav';

const Header = () =>{
    return (
         <div className='container'> 
           <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          
          <Nav.Item as="li">
            <Nav.Link href="/blog">Blog</Nav.Link>
          </Nav.Item>

          <Nav.Item as="li">
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li"> 
            <Nav.Link href="/contact">Contac Us</Nav.Link>
          </Nav.Item>
        </Nav>
         </div>
       
      );
}
export default Header