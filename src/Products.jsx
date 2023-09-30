import React, { Fragment, useEffect, useState } from 'react'
import Card from "./Component/Card"
import { data } from "./ProductData"


function Products() {
  const [render, setRender] = useState(data)
  const [cofeesData, setCofeesdata] = useState(data)
  // console.log(cofeesData)
  const [query, setQuery] = useState([])

  function sort(event) {
    const sortValue = event.target.value
    // console.log(sortValue)
    if (sortValue == "Price") {
      const sortPrice = cofeesData.sort((a, b) => {
        return a.Price - b.Price
      })
      setCofeesdata(sortPrice)
      // console.log(cofeesData)
    }
    if (sortValue == "Name") {
      const sortName = cofeesData.sort((a, b) => {
        return a.Name.localeCompare(b.Name)
      });
      // console.log(sortName)
      setCofeesdata(sortName)
      // console.log(cofeesData)
    }
  }

  const fetchData = (event) => {
    const getSearch = event.target.value
    // console.log(getSearch)
    setQuery(getSearch)
    if (getSearch.length > 0) {
      const searchData = data.filter((item) => {
        return item.Name.toLowerCase().includes(getSearch) ||
          item.Price.toLowerCase().includes(getSearch)

      })
      document.getElementById("info").innerHTML = `Show all product( ${searchData.length})`
      // console.log(searchData.length)
      setRender(searchData)
      // console.log(cofeesData)
    } else {
      setRender(data)
    }

  }


  return (
    <div className='px-16 flex gap-5'>
      <aside className=' w-[20%] bg-white  p-7  shadow-lg '>
        <input type="search " placeholder='Search....'
          value={query}
          onChange={(e) => fetchData(e)}
          className='text-center shadow-md'
        />
        <div className='pt-2 flex flex-col'>
          <h3 className='font-bold text-2xl'>Catagory</h3>
          <label htmlFor='baked' className='text-black'> <input type="checkbox" className='' id='baked' />Baked goods</label>
          <label htmlFor='cofee' className='text-black'> <input type="checkbox" className='' id='cofee' />Cofee</label>
        </div>
        <div className='pt-2 flex flex-col'>
          <h3 className='font-bold text-2xl'>Diatary</h3>
          <label htmlFor='eco' className='text-black gap-2'> <input type="checkbox" className='' id='eco' />Eco Friendly</label>
          <label htmlFor='glutin' className='text-black'> <input type="checkbox" className='' id='glutin' />Glutin Free</label>
          <label htmlFor='nut' className='text-black'> <input type="checkbox" className='' id='nut' />Nut Free</label>
        </div>
      </aside>
      <aside className=' w-[80%] bg-white shadow-lg p-7'>
        <div className='flex justify-between'>
          <h3 id='info'>Show All Product</h3>
          <div className='flex items-center gap-2'>
            <label htmlFor="list">Sort by:</label>
            <select id='list' onChange={(e) => sort(e)}>
              <option defaultChecked>..Sort Option..</option>
              <option value="Price">Price</option>
              <option value="Name">Name</option>
            </select>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {
            render.map((item, index) => {
              return (<Fragment key={index}>
                <Card item={item}></Card>
              </Fragment>
              )
            })
          }
        </div>
      </aside>
    </div>
  )
}

export default Products
