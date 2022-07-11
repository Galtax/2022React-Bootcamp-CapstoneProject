import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../assets/iconlogo.png';
import {
  HeaderMain,
  Image,
  Name } from './Header.styled';
import { ROUTES } from '../../utils/constants';
import { InpurtSearch } from './InputSearch/InputSearch';
import { ShoppingCartButton } from './ShoppingCart/ShoppingCart';

function Header() {

  return (
    <HeaderMain isYellow>
      <Link to={ROUTES.home}>
        <Image src={logo} alt="logo" />
      </Link>
      <Name>
        Galtax <span>  Luxury Furniture</span>
      </Name>
      <InpurtSearch />
      <ShoppingCartButton />
    </HeaderMain>
  );
}

export default Header;
