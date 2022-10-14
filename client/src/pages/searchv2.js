import { useState } from "react"
import CardSearch from "../Components/cardSearch";
import Header from "../Components/header"
import RoutesUser from "../Components/routesUser"
import "../resources/css/search2.css";


const Searchv2 = () => {

    const [addRoute, setAddRoute] = useState(false)
    const [search, setSearch] = useState('')

    const addNewRoute = () => {
        setAddRoute(!addRoute)
    }

    console.log(search);

    return (
        <div className='pageSearch'>
            <Header />
            <div id='zoneAddSP'>
                <button onClick={addNewRoute} id='btnAddRouteSP' >Añadir Ruta</button>
            </div>

            <div id='bodyRU'>
                {
                    addRoute
                        ?
                        <div id="formAddRouteSP">
                            <RoutesUser />
                        </div>
                        :
                        <div className="bodyPageSP">
                            <div id="searchBar">
                                <input type="search" name="" id="searchInput" placeholder="Buscar"
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </div>

                            <div className="bodyCardsSP">
                                <div className="cardsSP">
                                    <CardSearch />
                                    <CardSearch />
                                    <CardSearch />
                                    <CardSearch />
                                    <CardSearch />
                                    <CardSearch />
                                    <CardSearch />
                                </div>

                                <div className="filterSP">

                                    <form action="">
                                        <p id="titleFormSP">Filtros</p>

                                        <p className="titleFields">Tipo</p>

                                        <div>
                                            <label htmlFor="carField" className="fielFormSP">
                                                <input type="radio" name="kind" id="carField" />
                                                <p class="txtField">Carro</p>
                                            </label>
                                            <label htmlFor="bikeField" className="fielFormSP">
                                                <input type="radio" name="kind" id="bikeField" />
                                                <p class="txtField">Moto</p>
                                            </label>
                                        </div>

                                        <p className="titleFields">Precio</p>

                                        <div>
                                            <label htmlFor="to5Field" className="fielFormSP">
                                                <input type="radio" name="price" id="to5Field" />
                                                <p class="txtField">Desde $5.000</p>
                                            </label>
                                            <label htmlFor="5to10Field" className="fielFormSP">
                                                <input type="radio" name="price" id="5to10Field" />
                                                <p class="txtField">De $5.000 a $10.000</p>
                                            </label>
                                            <label htmlFor="10to15Field" className="fielFormSP">
                                                <input type="radio" name="price" id="10to15Field" />
                                                <p class="txtField">De $10.000 a $15.000</p>
                                            </label>
                                            <label htmlFor="more15Field" className="fielFormSP">
                                                <input type="radio" name="price" id="more15Field" />
                                                <p class="txtField">Mas de $15.000</p>
                                            </label>
                                        </div>

                                        <p className="titleFields">Lugar</p>

                                        <div>
                                            <label htmlFor="sourceField" className="fielFormSP">
                                                <input type="radio" name="place" id="sourceField" />
                                                <p class="txtField">Origen</p>
                                            </label>
                                            <label htmlFor="destinyField" className="fielFormSP">
                                                <input type="radio" name="place" id="destinyField" />
                                                <p class="txtField">Destino</p>
                                            </label>
                                        </div>

                                        <p className="titleFields">Localidad</p>

                                        <div>
                                            <label htmlFor="" className="fielFormSP">
                                                <select name="" id="selectSP"></select>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                }
            </div>

        </div>

    )
}

export default Searchv2