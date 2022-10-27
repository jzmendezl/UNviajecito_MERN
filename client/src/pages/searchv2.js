import { useEffect, useState } from "react"
import CardSearch from "../Components/cardSearch";
import Header from "../Components/header"
import { useUsers } from "../context/userContext";
import "../resources/css/search2.css";


const Searchv2 = () => {

    const { currentUser } = useUsers()
    const [search, setSearch] = useState('')
    const [results, setResults] = useState([])
    const { getAllTravels } = useUsers()

    useEffect(() => {
        const getTravels = async () => {
            try {
                const res = await getAllTravels()

                // * Filter user
                let TravelsUser = []
                // eslint-disable-next-line array-callback-return
                currentUser?.userWheels.map(travel => {
                    TravelsUser.push(travel)
                })

                let noUserTravels = res.filter(travel => TravelsUser.indexOf(travel._id) === -1)

                //  * Filter on travel
                let onTravel = []
                // eslint-disable-next-line array-callback-return
                currentUser?.wheelHist.map(travel => {
                    onTravel.push(travel)
                })

                let viewTravels = noUserTravels.filter(travel => onTravel.indexOf(travel._id) === -1)

                setResults(viewTravels)
            } catch (error) {
                console.error({ message: error.message });
            }
        }
        getTravels()
    }, [currentUser?.userWheels, currentUser?.wheelHist, getAllTravels])

    return (
        <div className='pageSearch'>
            <Header />
            <div id='bodyRU'>
                <div className="bodyPageSP">
                    <div id="searchBar">
                        <input type="search" name="" id="searchInput" placeholder="Buscar"
                            onChange={e => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="bodyCardsSP">
                        <div className="cardsSP">
                            {
                                results?.map(card => (
                                    <CardSearch
                                        key={card._id}
                                        TID={card._id}
                                        userName={card.userName}
                                        contact={card.contact}
                                        vehicle={card.vehicle}
                                        passengers={card.passengers}
                                        source={card.source}
                                        destiny={card.destiny}
                                        price={card.price}
                                        seats={card.vehicle.seats}
                                        dateTime={card.dateTime}
                                        remark={card.remark}
                                    />
                                ))
                            }

                        </div>

                        <div className="filterSP">

                            <form action="">
                                <p id="titleFormSP">Filtros</p>

                                <p className="titleFields">Tipo</p>

                                <div>
                                    <label htmlFor="carField" className="fielFormSP">
                                        <input type="radio" name="kind" id="carField" />
                                        <p className="txtField">Carro</p>
                                    </label>
                                    <label htmlFor="bikeField" className="fielFormSP">
                                        <input type="radio" name="kind" id="bikeField" />
                                        <p className="txtField">Moto</p>
                                    </label>
                                </div>

                                <p className="titleFields">Precio</p>

                                <div>
                                    <label htmlFor="to5Field" className="fielFormSP">
                                        <input type="radio" name="price" id="to5Field" />
                                        <p className="txtField">Desde $5.000</p>
                                    </label>
                                    <label htmlFor="5to10Field" className="fielFormSP">
                                        <input type="radio" name="price" id="5to10Field" />
                                        <p className="txtField">De $5.000 a $10.000</p>
                                    </label>
                                    <label htmlFor="10to15Field" className="fielFormSP">
                                        <input type="radio" name="price" id="10to15Field" />
                                        <p className="txtField">De $10.000 a $15.000</p>
                                    </label>
                                    <label htmlFor="more15Field" className="fielFormSP">
                                        <input type="radio" name="price" id="more15Field" />
                                        <p className="txtField">Mas de $15.000</p>
                                    </label>
                                </div>

                                <p className="titleFields">Lugar</p>

                                <div>
                                    <label htmlFor="sourceField" className="fielFormSP">
                                        <input type="radio" name="place" id="sourceField" />
                                        <p className="txtField">Origen</p>
                                    </label>
                                    <label htmlFor="destinyField" className="fielFormSP">
                                        <input type="radio" name="place" id="destinyField" />
                                        <p className="txtField">Destino</p>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Searchv2