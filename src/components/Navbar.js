import React,{useState,useEffect} from "react";
import styled from "styled-components";
import logo from '../logo.png'
const Navbar = () => {
    const[show,setShow] = useState(false)
    useEffect(() => {
       const event= window.addEventListener('scroll',()=>{
            if (window.scrollY>500) {
                setShow(true)
            }
            else{
                setShow(false)
            }
        })
        return () => {
            window.removeEventListener('scroll',event)
        }
    }, [show])

  return (
    <Wrapper>
      <nav className={show?'header nav_back':'header'}>
        <div className="logo">
          <img src={logo} alt="NetFLix" />
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  .header {
    position: fixed;
    z-index: 5;
    top: 0;
    width: 100%;
    .logo {
      width: 200px;
      img {
        width: 100%;
      }
    }
  }
  .header.nav_back{
      background: #000;
  }

`;
