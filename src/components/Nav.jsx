import React from 'react'
import { Link } from 'react-router-dom'
import {StyledNav} from '../styles/Nav.style'
import {AiFillHome, AiFillInfoCircle} from 'react-icons/ai'
import {FaUserFriends} from 'react-icons/fa'
import {MdOutlineHelp} from 'react-icons/md'

const Nav = () => {
  return (
    <StyledNav>
        <nav>
            <div>
                <Link to='/home'><AiFillHome /></Link>
                <Link to='/partner'><FaUserFriends /></Link>
                <Link to='/about'><AiFillInfoCircle /></Link>
                <Link to='/faq'><MdOutlineHelp /></Link>
            </div>
        </nav>
    </StyledNav>
  )
}

export default Nav;
