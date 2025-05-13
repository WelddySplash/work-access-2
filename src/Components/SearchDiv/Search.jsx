import React from 'react'
//Iconos importados de React Icons ====>
import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci' 

const Search = () => {
  return (
    <div className='searchDiv grid gap-10 bg-gray-200 rounded-[10px] p-[3rem]'>
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-gray-500">
          {/* Primera busqueda */}
          <div className="flex gap-2 items-center">
            <AiOutlineSearch className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Buscar Trabajo....' />
            <AiOutlineCloseCircle className='text-[30px] text-gray-700 icon'/>
          </div>
          {/* Segunda busqueda */}
          <div className="flex gap-2 items-center">
            <BsHouseDoor className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Buscar Empresa....' />
            <AiOutlineCloseCircle className='text-[30px] text-gray-700 icon'/>
          </div>
          {/* Tercera Busqueda */}
          <div className="flex gap-2 items-center">
            <CiLocationOn className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500 focus:outline-none w-[100%]' placeholder='Buscar por Ubicación....' />
            <AiOutlineCloseCircle className='text-[30px] text-gray-700 icon'/>
          </div>
          <button className='bg-blue-500 h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Buscar</button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className='text-gray-500 font-semibold'>Ordenar Por:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Discapacidad Motriz</option>
            <option value="">Discapacidad Auditiva</option>
            <option value="">Discapacidad Visual</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className='text-gray-500 font-semibold'>Tipo de Trabajo:</label>
          <select name="" id="relevance" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Tiempo Completo</option>
            <option value="">Medio Tiempo</option>
            <option value="">Presencial</option>
            <option value="">Desde casa</option>
          </select>
        </div>

        

        <span className='text-gray-600 cursor-pointer'>Limpiar</span>
      </div>
    </div>
  )
}

export default Search