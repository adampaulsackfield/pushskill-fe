import React from 'react'
import { Link } from 'react-router-dom'
import {StyledNav} from '../styles/Nav.style'

const Nav = () => {
  return (
    <StyledNav>
        <nav>
            <div>
                <Link to='/home'>Home</Link>
                <Link to='/partner'>Partner</Link>
                <Link to='/about'>About</Link>
                <Link to='/help'>Help</Link>
                <Link to='/faq'>FAQs</Link>
            </div>
        </nav>
    </StyledNav>
  )
}

export default Nav