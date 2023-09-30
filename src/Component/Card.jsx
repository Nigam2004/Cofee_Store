import React from 'react'

function Card(props) {
    const item=props.item
    
  return (
    
      <div  className="p-2 md:w-1/4 w-full">
                <div className="bg-[#40407a] p-3 rounded-2xl shadow-lg hover:-translate-y-1 duration-700 border-2 border-gray-200">
                  <img className='rounded-lg w-full h-full mb-2' src={item.image} alt="" />
                  <h2 className='text-xl text-white font-bold'>{item.Name}</h2>
                  <h2 className='text-lg text-white mb-2'>&#8377;{item.Price}</h2>
                </div>
              </div>
    
  )
}

export default Card
