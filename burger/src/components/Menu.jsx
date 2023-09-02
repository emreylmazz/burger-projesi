
import {} from 'react'
import {Data}  from '../helpers/Data'
import MenuItem from './MenuItem';
import '../styles/Menu.css'

export const Menu = () => {
  return (
    <div className='menu'>
<h1 className='menutitle'>Burgerlerimiz</h1>
<div className='menulist'>
{Data.map((menuItem,key) => {
  return (
    <MenuItem
    key={key}
     image = {menuItem.image} 
    name = {menuItem.name}
    content= {menuItem.content}
    price= {menuItem.price}
    />
  )
})}

</div>
    </div>
  )
}
 
export default Menu