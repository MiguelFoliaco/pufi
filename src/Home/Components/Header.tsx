import React from 'react'
import { Navbar } from './Navbar'
import { Button } from '../../Shared/Components/Button';
import '../less/Header.less';

export const Header = () => {
  return (
    <>
      <div className="header-cont">
        <Navbar />

        <h2>ESTÁR CÓMODO,<br/> NUNCA FUE TAN FACIL.</h2>

        <Button outlineColor='white' textColor='white'><>SHOP</></Button>
      </div>
    </>
  )
}
