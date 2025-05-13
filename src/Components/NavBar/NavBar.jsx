import React from 'react'

const NavBar = () => {
  return (
    <div className='navBar flex justify-between items-center p-[3rem]'>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-blue-600">Work<strong>Access</strong></h1>
        </div>
        <div className="menu flex gap-8">
          <li className="menuList text-shadow-neutral-600 hover:text-blue-600">Trabajos</li>
          <li className="menuList text-shadow-neutral-600 hover:text-blue-600">Empresas</li>
          <li className="menuList text-shadow-neutral-600 hover:text-blue-600">Acerca de</li>
          <li className="menuList text-shadow-neutral-600 hover:text-blue-600">Iniciar Sesión</li>
          <li className="menuList text-shadow-neutral-600 hover:text-blue-600">Registrarse</li>
        </div>
    </div>
  )
}

export default NavBar