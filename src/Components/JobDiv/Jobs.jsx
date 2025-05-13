import React from 'react'
//iconos importados ------>
import { BiTimeFive } from 'react-icons/bi'
import logo1 from '../../Assets/logo(1).svg'

//Todas las chambas en un arreglo.
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


const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">

        {
          Data.map(({id,title,time,location,desc,company, discapacidad, modalidad})=>{
            return (
              //Impresora del arreglo padre
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blue-500 shadow-lg shadow-gray-400/700 hover:shadow-lg">
              <span className="flex justify-between items-center gap-4">
                <h1 className='text-[16px] font-semibold text-gray-700 group-hover:text-white'>{title}</h1>
                <span className='flex items-center text-gray-600 gap-1 group-hover:text-white'>
                  <BiTimeFive/>{time}
                </span>
              </span>
              <h6 className='text-gray-700 group-hover:text-white'>{location}</h6>
              <p className='text-[13px] text-gray-700 pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                <strong>{desc} </strong>
                <br />
                {modalidad}
              </p>
              <p className='text-[13px] text-gray-700 pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                Aplicantes: {discapacidad}
              </p>
              <div className='company flex items-center gap-2'>
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>
              <button className='border-[2px] rounder-[10px] block p-[10px] w-full text-[14px] font-semibold text-gray-700 hover:bg-white group-hover/item:text-gray-700 group-hover:text-white'>
                Aplicar
              </button>
            </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs