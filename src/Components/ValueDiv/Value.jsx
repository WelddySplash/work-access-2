import React from 'react'

import imagen1 from '../../Assets/inclusión.png'
import imagen2 from '../../Assets/empleo.png'
import imagen3 from '../../Assets/respeto.png'


const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-gray-700 text-[25px] py-[2rem] pb-[3rem] font-bold w-[90%] block'>
        Los valores que fijamos como objetivo en esta lucha por un mundo de oportunidades justas
        </h1>

        <div className='grid gap-[10rem] grid-cols-3 items-center'>
          <div className="singleGrid bg-gray-200 rounded-[10px] hover:bg-pink-300 p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv bg-pink-200 p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[60px] w-[80px] flex items-center justify-center">
                <img src={imagen1} alt="" className='w-[70%]'/>
              </div>
              <span className='font-semibold text-gray-700 text-[18px]'>
                Inclusión Real
              </span>
            </div>
            <p className='text-[15px] text-gray-700 opacity-[.9] py-[1rem] font-semibold'>
            Promover activamente un entorno laboral donde todas las personas, sin importar sus capacidades, tengan acceso a oportunidades justas y significativas.
            </p>
          </div>

          <div className="singleGrid bg-gray-200 rounded-[10px] hover:bg-amber-300 p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv bg-amber-200 p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[80px] w-[80px] flex items-center justify-center">
                <img src={imagen2} alt="" className='w-[70%]'/>
              </div>
              <span className='font-semibold text-gray-700 text-[18px]'>
              Reducción del desempleo
              </span>
            </div>
            <p className='text-[15px] text-gray-700 opacity-[.9] py-[1rem] font-semibold'> 
              Trabajar para disminuir las tasas de desempleo en personas con discapacidad, conectándolas con empleadores comprometidos y vacantes adecuadas.
            </p>
          </div>

          <div className="singleGrid bg-gray-200 rounded-[10px] hover:bg-green-300 p-[1.5rem]">
            <div className="flex items-center gap-3">
              <div className="imgDiv bg-green-200 p-[4px] rounded-[0.8rem] bg-inherit-[#dedef8] h-[80px] w-[80px] flex items-center justify-center">
                <img src={imagen3} alt="" className='w-[70%]'/>
              </div>
              <span className='font-semibold text-gray-700 text-[18px]'>
              Accesibilidad y respeto
              </span>
            </div>
            <p className='text-[15px] text-gray-700 opacity-[.9] py-[1rem] font-semibold'>
            Asegurar que tanto el sitio web como los procesos de reclutamiento sean accesibles para todos, respetando la dignidad y necesidades individuales.
            </p>
          </div>


        </div>
    </div>
  )
}

export default Value