import React from 'react'
import './header.css'

const links = ['People', 'Planet', 'Starships']

export const Header = ({onServiceChange}) => {

   const navLinks = links.map( (navItem) => {
      return (
         <li className='nav-list-item' key={navItem}>
            <a
               href='/'
               className=''
            >{navItem}
            </a>
         </li>
      )
   })


   return (
      <div className='header'>
         {/*<div className=''>*/}
            <h2 className='nav-header'>Star DB</h2>
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