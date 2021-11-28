import {useState, useEffect} from 'react'
import { Navbar, Nav, Container, Badge, NavDropdown, Button,} from 'react-bootstrap'
import { NavWrapper } from './styles'
import {NavLink as Link, useLocation} from 'react-router-dom'
import Search from './Search'
import SideNav from '../Offcanvas/Offcanvas'
import Navtab from '../Navtab/Navtab'
import { commerce } from '../../lib/Commerce'

const Navroute = ({navBackground, BagItems, totalCost}) => {
  const [merchant, setMerchant] = useState([])
 
  const fetchMerchant = async () => {
    const {data} = await commerce.merchants.about()
    setMerchant(data)
  }
  useEffect(() => {
   fetchMerchant()
  }, [])
  console.log(merchant)

   
  const location = useLocation()
    
    return (
      <NavWrapper>
        <Navbar expand='lg' variant='light'fixed='top'
        style={{ transition: '1s ease', backgroundColor: navBackground ? 'white' : 'transparent'}}>
          <Container fluid> 
           {['top'].map((placement, idx) => (
           <SideNav key={idx} placement={placement} name={placement} />
             ))} 
            <Navbar className='d-lg-none'>  
             <Link to='/'>
              {merchant.map((shop) => (
              <Navbar.Brand className='fw-bold d-lg-none'>{shop.name}</Navbar.Brand>
              ))}
              </Link>
               </Navbar>  
               <Navbar className='d-lg-none'>  
               {location.pathname === '/bag'? (
              <h6 className='align-self-center'>Bag:<small className='fw-bold mx-1'>{totalCost}</small></h6>
               ) : (
              <Link to='/bag' className='align-self-center px-3'>         
               <span><i className='bi bi-bag'></i>Bag</span>
               {BagItems > 0 ? <Badge pill bg='warning'>{BagItems}</Badge> : <Badge pill bg='warning'></Badge> }
              </Link>
              )}            
              <Search />
             </Navbar>  
            <Navbar.Collapse id='responsive-navbar-nav' className='d-none d-lg-block'>
              <Nav className='me-auto'>
              {merchant.map((shop) => (
               <div className='d-flex' key={shop.id}>
                <h6 className='mx-3' activeClassName="active" end>{shop.country}</h6>
                <h6 className='mx-3' activeClassName="active">{shop.status}</h6> 
                </div>
                 ))}
              </Nav>
              {merchant.map((shop) => (
              <div>
              <Link to='/'><Navbar.Brand className='mx-auto'>{shop.name}</Navbar.Brand></Link> 
              </div>
               ))}
              <Nav className='ms-auto'>
               <NavDropdown title='Sign in' id='collapsible-nav-dropdown'>
                  <p className='mb-0 text-center'><small>Save your favorite item</small></p>
                  <NavDropdown.Item>
                    <Link to='/!'><Button size='sm'>Create my account</Button></Link>
                    </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className='text-center'>
                  <Link to='/!'><Button variant='dark' size='sm'>Sign in</Button></Link>
                  </NavDropdown.Item>
                </NavDropdown>
                {location.pathname === '/bag'? (
              <h6 className='align-self-center mx-3'>Bag: <strong>{totalCost}</strong></h6>
               ) : (
              <Link to='/bag' className='align-self-center mx-3' activeClassName="active">         
               <span><i className='bi bi-bag'></i>Bag</span>
               {BagItems > 0 ? <Badge pill bg='warning'>{BagItems}</Badge> : <Badge pill bg='warning'></Badge> }
              </Link>
              )}            
              <Search />
              </Nav>
            </Navbar.Collapse>
          </Container>
           <Navtab/>
        </Navbar>
      </NavWrapper>
    )
}

export default Navroute;
