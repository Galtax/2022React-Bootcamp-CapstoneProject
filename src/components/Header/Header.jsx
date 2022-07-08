import React from 'react';
import { Link } from 'react-router-dom'
import { ReactComponent as ShoppingCartIcon } from '../../images/shopping-cart.svg';
import logo from '../../assets/iconlogo.png';
import {
  HeaderMain,
  Image,
  Name,
  ButtonCart } from './Header.styled';
import { ROUTES } from '../../utils/constants';
import { InpurtSearch } from './InputSearch/InputSearch';

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
      <ButtonCart>
        <ShoppingCartIcon />
      </ButtonCart>
    </HeaderMain>
  );
}

export default Header;
