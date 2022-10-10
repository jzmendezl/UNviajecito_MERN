import React, { useState } from 'react'
import Header from '../Components/header'
import RoutesUser from '../Components/routesUser';
import "../resources/css/search.css";

export default function SearchPage() {

  const [addRoute, setAddRoute] = useState(false)

  const addNewRoute = () => {
    setAddRoute(!addRoute)
  }

  return (
    <div className='pageSearch'>
      <Header />

      <div id='bodyRU'>
        <div id='zoneAddSP'>
          <button onClick={addNewRoute} id='btnAddRouteSP' >Añadir Ruta</button>
        </div>
        {
          addRoute
            ?
            <RoutesUser />
            :
            <div>

            </div>
        }
      </div>
    </div>
  )
}
