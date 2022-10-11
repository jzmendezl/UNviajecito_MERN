import React, { useState } from 'react'
import Header from '../../Components/header'
import RoutesUser from '../../Components/routesUser';
import "../../resources/css/search.css";

//New code
import {JourneyList} from "./JourneyList"
import {JourneyItem} from "./JourneyItem"
import { JourneySearch } from './JourneySearch';
import {JourneyCounter} from "./JourneyCounter";
import {CreateJourneyButton} from "./CreateJourneyButton";

const defaultJourneys=[
  {text:'Teusaquillo', completed:false},
  {text:'Chapinero Alto', completed:false},
  {text:'Engativa', completed:false},
  {text:'Suba', completed:false},
  {text:'Bosa Recreo', completed:false},
  {text:'CC Titan Plaza', completed:false},
  {text:'Rafael Uribe', completed:false},
  {text:'Soledad', completed:false},
  {text:'Puente Aranda', completed:false},
];

export default function SearchPage() {

  const [addRoute, setAddRoute] = useState(false)

  const addNewRoute = () => {
    setAddRoute(!addRoute)
  }

  //New code
  const [journeys,setJourneys] = React.useState(defaultJourneys);
  const [setString,setStringFunction] = React.useState(""); 

  const completedJourneys = journeys.filter(journey=>!!journey.completed).length;
  const totalJourneys = journeys.length;

  let filtering = [];

  if(!setString.length>=1){
    filtering = journeys;
  }else{
    filtering = journeys.filter(journey =>{
      const journeyText = journey.text.toLowerCase();
      const setStringLowerCase = setString.toLowerCase();

      return journeyText.includes(setStringLowerCase);
    });
  }

  const completeJourney = (text)=>{
    const journeyIndex = journeys.findIndex(journey => journey.text === text);
    const newJourneys = [...journeys];
    newJourneys[journeyIndex].completed = true;
    setJourneys(newJourneys)
  };

  const deleteJourney = (text)=>{
    const journeyIndex = journeys.findIndex(journey => journey.text === text);
    const newJourneys = [...journeys];
    newJourneys.splice(journeyIndex,1);
    setJourneys(newJourneys)
  };

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
      
      <div className='NewCode'>
        <React.Fragment>
          <JourneyCounter
          completedJourneys = {completedJourneys}
          totalJourneys = {totalJourneys}
          />
          <JourneySearch
            setString={setString}
            setStringFunction = {setStringFunction}
          />
          <JourneyList>
            {filtering.map(journey =>(
              <JourneyItem 
              key = {journey.text} 
              text = {journey.text}
              
              onComplete = {() => completeJourney(journey.text)}
              onDelete = {() =>deleteJourney(journey.text)} 
              completed = {journey.completed}
              />
            ))}
          </JourneyList>
          <CreateJourneyButton/>
        </React.Fragment>
      
      </div>

    </div>
  )
}
