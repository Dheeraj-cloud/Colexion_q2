import 'bootstrap-icons/font/bootstrap-icons.css'
import Card from 'react-bootstrap/Card';
import foot from '../styles/Footer.module.css'
const Footer =  ()=>{
    return (
        <>
      <Card bg="primary" className="text-center">
      
      <Card.Footer className="text">
      <div className={foot.icon}>
      <i class="bi bi-discord"></i>
      <i class="bi bi-instagram"></i>
      <i class="bi bi-telegram"></i>
      </div> 

      </Card.Footer>
    </Card>
           
        </>
    )
}

export default Footer
