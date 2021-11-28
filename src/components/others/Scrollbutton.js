import {useState} from 'react'
import styled from 'styled-components'

export default function Scrollbutton() {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1500) {
            setVisible(true)
        } else if (scrolled <= 1500) {
            setVisible(false)
        } 
    }

    const scrollToTop = () => {
      window.scrollTo({
       top: 0, 
       behaviour: 'smooth',
      })  
    }
    window.addEventListener('scroll', toggleVisible)
    
    return (
      <>
      <Scroll>
       <div className='d-none d-md-block d-lg-block'>
         <i className='bi bi-arrow-up-square-fill' onClick={scrollToTop}
         style={{display: visible ? 'inline' : 'none'}} ></i>
        </div>   
      </Scroll>
       <div className="d-md-none d-lg-none mt-5 mb- text-center">
        <p className="bg-dark text-white mt- mb-0 p-2" size="sm" onClick={scrollToTop}>
          <i className="bi bi-arrow-up"></i>Back to top</p>
         </div>
      </>
    )
}
const Scroll = styled.div`
  .bi-arrow-up-square-fill {
    position: fixed;
    left: 80%;
    bottom: 40px;
    height: 20px;
    font-size: 2rem;
    z-index: 1;
    cursor: pointer;
    color: var(--mainWhite);
  }
`
