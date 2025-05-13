import React from 'react'

const Footer = () => {
  return (
    <div className='footer p-[5rem] mb-4 bg-blue-500 rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>
      <div>
        <div className="logoDiv">
            <h1 className="logo text-[25px] text-white pb-[1.5rem]">Work<strong>Access</strong></h1>
        </div>
        <p className='text-white pb-[13px] opacity-70 leading-7'>
          Recomendando buscadores y empresas con los mejores trabajos, para los mejores empleados.
        </p>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Empresa
        </span>
        <div className="grid gap-3">
          <li className='text-white opacity-[.8] hover:opacity-[1]'>Acerca de</li>
          <li className='text-white opacity-[.8] hover:opacity-[1]'>Noticias</li>
          <li className='text-white opacity-[.8] hover:opacity-[1]'>Preguntas frecuentes</li>
        </div>
      </div>

      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-white'>
          Soporte
        </span>
        <div className="grid gap-3">
          <li className='text-white opacity-[.8] hover:opacity-[1]'>Soporte</li>
          <li className='text-white opacity-[.8] hover:opacity-[1]'>Sugerencias</li>
          <li className='text-white opacity-[.8] hover:opacity-[1]'>Contactanos</li>
        </div>
      </div>
    </div>
  )
}

export default Footer