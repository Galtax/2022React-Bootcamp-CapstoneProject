import React from "react";

import miIconSearch  from '../../assets/iconobusqueda.png'
import miIconCarrito from '../../assets/carrito.png'

import {
  Logo,
  Menu,
  MenuItem,
  NavContainer,
  SearchContainer,
  IconBusqueda,
  IconCarrito,
  SearchInput,
} from "./Navbar.style";

const Navbar = () => {
  return (
    <NavContainer>
      <Logo href="">
        Galtax <span>  Luxury Furniture</span>
      </Logo>
      <Menu>
        <SearchContainer onSubmit={(e) => e.preventDefault()}>

          <SearchInput type={"search"} placeholder="Search..." />
          
          <IconBusqueda src={miIconSearch} />
        </SearchContainer>
        <MenuItem href="/">

          <IconCarrito src={miIconCarrito} />
        </MenuItem>
      </Menu>
    </NavContainer>
  );
};

export default Navbar;
