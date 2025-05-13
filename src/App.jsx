// App.jsx
import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import Value  from './Components/ValueDiv/Value'
import Footer from './Components/FooterDiv/Footer'

import { AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'
import { BsHouseDoor } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { BiTimeFive } from 'react-icons/bi'
import logo1 from '../src/Assets/inclusión.png'

const Data = [
  {
    id: 1,
    image: logo1,
    title: 'Asesoría Digital',
    time: 'Disponible',
    location: 'Av. Tecnológico 100, Col. Las Américas, Celaya',
    desc: 'Orientar a los clientes sobre operaciones bancarias en dispositivos móviles.',
    company: 'BBVA',
    discapacidad: 'Auditiva, Motriz',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 2,
    image: 'https://www.pngkey.com/png/full/821-8215222_soriana-logo-png.png',
    title: 'Personal de Caja',
    time: 'Disponible',
    location: 'Av. Constituyentes 200, Col. Centro, Celaya',
    desc: 'Realizar operaciones de caja en sucursal.',
    company: 'Soriana',
    discapacidad: 'Motriz',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 3,
    image: 'https://seeklogo.com/images/P/provident-logo-2B7E4F4A2D-seeklogo.com.png',
    title: 'Auxiliar Administrativo',
    time: 'Disponible',
    location: 'Calle Francisco I. Madero 150, Col. La Escondida, Celaya',
    desc: 'Apoyo en labores administrativas.',
    company: 'Provident México',
    discapacidad: 'Visual',
    modalidad: 'Medio tiempo, Presencial'
  },
  {
    id: 4,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Grupo_Bimbo_logo.png/320px-Grupo_Bimbo_logo.png',
    title: 'Promotor de Ventas',
    time: 'Disponible',
    location: 'Blvd. Adolfo López Mateos 500, Col. Las Fuentes, Celaya',
    desc: 'Promover productos en tiendas de autoservicio.',
    company: 'Bimbo',
    discapacidad: 'Auditiva',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 5,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Walmart_logo.svg/320px-Walmart_logo.svg.png',
    title: 'Surtidor de Piso',
    time: 'Disponible',
    location: 'Av. El Sauz 400, Col. El Vergel, Celaya',
    desc: 'Acomodo de mercancía y atención a clientes.',
    company: 'Walmart',
    discapacidad: 'Motriz',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 6,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Telcel_logo.png/320px-Telcel_logo.png',
    title: 'Ejecutivo de Ventas',
    time: 'Disponible',
    location: 'Calle Benito Juárez 350, Col. Alameda, Celaya',
    desc: 'Venta de servicios de telefonía.',
    company: 'Telcel',
    discapacidad: 'Auditiva',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 7,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/FEMSA_logo.png/320px-FEMSA_logo.png',
    title: 'Repartidor de Productos',
    time: 'Disponible',
    location: 'Blvd. Adolfo López Mateos 600, Col. Emiliano Zapata, Celaya',
    desc: 'Entrega de productos en tiendas.',
    company: 'FEMSA',
    discapacidad: 'Motriz',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 8,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Oxxo_logo.png/320px-Oxxo_logo.png',
    title: 'Cajero/a de Tienda',
    time: 'Disponible',
    location: 'Calzada Independencia 600, Col. San Juanico, Celaya',
    desc: 'Cobro en caja y atención a clientes.',
    company: 'OXXO',
    discapacidad: 'Motriz',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 9,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Liverpool_logo.png/320px-Liverpool_logo.png',
    title: 'Atención a Clientes',
    time: 'Disponible',
    location: 'Blvd. Adolfo López Mateos 701, Col. Centro, Celaya',
    desc: 'Atención telefónica y en tienda.',
    company: 'Liverpool',
    discapacidad: 'Auditiva',
    modalidad: 'Medio tiempo, Presencial'
  },
  {
    id: 10,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/HSBC_logo.png/320px-HSBC_logo.png',
    title: 'Asistente de Sucursal',
    time: 'Disponible',
    location: 'Av. Constituyentes 1200, Col. Centro, Celaya',
    desc: 'Apoyo en labores administrativas bancarias.',
    company: 'HSBC',
    discapacidad: 'Visual',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 11,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Grupo_Coppel_logo.png/320px-Grupo_Coppel_logo.png',
    title: 'Vendedor/a de Piso',
    time: 'Disponible',
    location: 'Blvd. Adolfo López Mateos 1200, Col. Las Fuentes, Celaya',
    desc: 'Venta de productos y atención a clientes.',
    company: 'Coppel',
    discapacidad: 'Auditiva',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 12,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/AT%26T_logo_2016.png/320px-AT%26T_logo_2016.png',
    title: 'Asesor de Ventas',
    time: 'Disponible',
    location: 'Plaza Parque Celaya, Av. Tecnológico, Celaya',
    desc: 'Venta de planes de telefonía.',
    company: 'AT&T',
    discapacidad: 'Auditiva, Motriz',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 13,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Banorte_logo.png/320px-Banorte_logo.png',
    title: 'Promotor Financiero',
    time: 'Disponible',
    location: 'Blvd. Adolfo López Mateos 900, Col. Centro, Celaya',
    desc: 'Promoción de productos financieros.',
    company: 'Banorte',
    discapacidad: 'Visual',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 14,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Farmacias_Similares_logo.png/320px-Farmacias_Similares_logo.png',
    title: 'Asistente de Farmacia',
    time: 'Disponible',
    location: 'Calzada Independencia 1000, Col. Las Américas, Celaya',
    desc: 'Atención en mostrador y cobro.',
    company: 'Farmacias Similares',
    discapacidad: 'Motriz',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 15,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Bachoco_logo.png/320px-Bachoco_logo.png',
    title: 'Operador de Producción',
    time: 'Disponible',
    location: 'Parque Industrial Amistad, Celaya',
    desc: 'Operación de línea de producción avícola.',
    company: 'Bachoco',
    discapacidad: 'Auditiva',
    modalidad: 'Tiempo completo, Presencial'
  },
  {
    id: 16,
    image: 'logo16.png',
    title: 'Asesor de Atención al Cliente',
    time: "Disponible",
    location: 'Celaya, Calle del Trabajo, Colonia Industrial',
    desc: 'Atención a clientes con discapacidad auditiva y motriz. Responsabilidades: Resolver consultas, brindar soporte y ofrecer soluciones eficaces.',
    company: 'Asesores Inclusivos',
    discapacidad: 'auditiva, motriz',
    modalidad: 'Tiempo Completo, Presencial'
  }
];

const App = () => {
  // 1) Estados para cada filtro
  const [searchTitle, setSearchTitle]         = useState('')
  const [searchCompany, setSearchCompany]     = useState('')
  const [searchLocation, setSearchLocation]   = useState('')
  const [filterDiscapacidad, setFilterDisc]   = useState('')
  const [filterModalidad, setFilterMod]       = useState('')

  // 2) Filtrado encadenado
  const filteredData = Data.filter(item => {
    const t = item.title.toLowerCase().includes(searchTitle.toLowerCase())
    const c = item.company.toLowerCase().includes(searchCompany.toLowerCase())
    const l = item.location.toLowerCase().includes(searchLocation.toLowerCase())
    const d = !filterDiscapacidad || item.discapacidad.toLowerCase().includes(filterDiscapacidad.toLowerCase())
    const m = !filterModalidad   || item.modalidad.toLowerCase().includes(filterModalidad.toLowerCase())
    return t && c && l && d && m
  })

  return (
    <div className='w-[100%] m-auto bg-white'>
      <NavBar/>

      <div className='w-[85%] m-auto items-center justify-center'>
        {/* === SEARCH */}
        <div className='searchDiv grid gap-10 bg-gray-200 rounded-[10px] p-[3rem]'>
          <form onSubmit={e => e.preventDefault()}>
            <div className="firstDiv flex justify-between items-center gap-[10px] bg-white p-5 rounded-[8px] shadow-lg">
              {/* Buscar por título */}
              <div className="flex items-center gap-2 flex-1">
                <AiOutlineSearch className='text-2xl'/>
                <input
                  type="text"
                  placeholder='Buscar Trabajo...'
                  className='bg-transparent focus:outline-none w-full text-blue-500'
                  value={searchTitle}
                  onChange={e => setSearchTitle(e.target.value)}
                />
                <AiOutlineCloseCircle
                  className='cursor-pointer text-gray-700 text-2xl'
                  onClick={() => setSearchTitle('')}
                />
              </div>
              {/* Buscar por empresa */}
              <div className="flex items-center gap-2 flex-1">
                <BsHouseDoor className='text-2xl'/>
                <input
                  type="text"
                  placeholder='Buscar Empresa...'
                  className='bg-transparent focus:outline-none w-full text-blue-500'
                  value={searchCompany}
                  onChange={e => setSearchCompany(e.target.value)}
                />
                <AiOutlineCloseCircle
                  className='cursor-pointer text-gray-700 text-2xl'
                  onClick={() => setSearchCompany('')}
                />
              </div>
              {/* Buscar por ubicación */}
              <div className="flex items-center gap-2 flex-1">
                <CiLocationOn className='text-2xl'/>
                <input
                  type="text"
                  placeholder='Buscar por Ubicación...'
                  className='bg-transparent focus:outline-none w-full text-blue-500'
                  value={searchLocation}
                  onChange={e => setSearchLocation(e.target.value)}
                />
                <AiOutlineCloseCircle
                  className='cursor-pointer text-gray-700 text-2xl'
                  onClick={() => setSearchLocation('')}
                />
              </div>
              <button
                className='bg-blue-500 hover:bg-blue-300 text-white px-8 py-3 rounded-[10px]'
              >
                Buscar
              </button>
            </div>
          </form>

          <div className="secDiv flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2">
              <label className='font-semibold text-gray-500'>Discapacidad:</label>
              <select
                className='bg-white rounded px-4 py-1'
                value={filterDiscapacidad}
                onChange={e => setFilterDisc(e.target.value)}
              >
                <option value=''>Todas</option>
                <option value='Motriz'>Motriz</option>
                <option value='Auditiva'>Auditiva</option>
                <option value='Visual'>Visual</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <label className='font-semibold text-gray-500'>Modalidad:</label>
              <select
                className='bg-white rounded px-4 py-1'
                value={filterModalidad}
                onChange={e => setFilterMod(e.target.value)}
              >
                <option value=''>Todas</option>
                <option value='Tiempo completo'>Tiempo completo</option>
                <option value='Medio tiempo'>Medio tiempo</option>
                <option value='Presencial'>Presencial</option>
                <option value='Desde casa'>Desde casa</option>
              </select>
            </div>

            <span
              className='text-gray-600 cursor-pointer self-center'
              onClick={() => {
                setSearchTitle('')
                setSearchCompany('')
                setSearchLocation('')
                setFilterDisc('')
                setFilterMod('')
              }}
            >
              Limpiar
            </span>
          </div>
        </div>

        {/* === JOBS */}
        <div className="jobContainer flex gap-10 flex-wrap justify-center items-start py-10">
          {filteredData.length === 0
            ? <p className="text-gray-500">No se encontraron vacantes</p>
            : filteredData.map(({ id, image, title, time, location, desc, company, discapacidad, modalidad }) => (
                <div key={id} className="group singleJob w-[250px] p-5 bg-white rounded-lg hover:bg-blue-500 shadow-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h1 className='font-semibold text-gray-700 group-hover:text-white'>{title}</h1>
                    <span className='flex items-center text-gray-600 group-hover:text-white'>
                      <BiTimeFive/>{time}
                    </span>
                  </div>
                  <h6 className='text-gray-700 group-hover:text-white mb-2'>{location}</h6>
                  <p className='text-gray-700 group-hover:text-white mb-2'>
                    <strong>{desc}</strong><br/>{modalidad}
                  </p>
                  <p className='text-gray-700 group-hover:text-white mb-4'>
                    Aplicantes: {discapacidad}
                  </p>
                  <div className='company mb-4'>
                    <span className='text-gray-700 group-hover:text-white'>{company}</span>
                  </div>
                  <button className='w-full py-2 border rounded text-gray-700 group-hover:text-gray-700 group-hover:bg-white'>
                    Aplicar
                  </button>
                </div>
              ))
          }
        </div>

        <Value/>
      </div>

      <Footer/>
    </div>
  )
}

export default App