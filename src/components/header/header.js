import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const links = ['People', 'Planets', 'Starships', 'Login', 'Secret']

export const Header = ({onServiceChange}) => {

   const navLinks = links.map( (navItem) => {
      return (
         <li className='nav-list-item' key={navItem}>
            <Link to={`/${navItem.toLowerCase()}/`}
               href='/'
               className=''
            >{navItem}
            </Link>
         </li>
      )
   })


   return (
      <div className='header'>
         {/*<div className=''>*/}
         <Link to='/' style={{textDecoration:'none'}}>
            <h2 className='nav-header'>Star DB</h2>
         </Link>
            <ul className='nav-list'>
               {navLinks}
            </ul>
         <button
            className='btn btn-primary btn-sm'
            onClick={onServiceChange}
         >ChangeContext</button>
         {/*</div>*/}
      </div>
   )
}