import React, { useState } from 'react'
import Header from '../../Components/header'
import RoutesUser from '../../Components/routesUser';
import "../../resources/css/search.css";

//New code
import {Travel} from "./Travel"
import {JourneyList} from "./JourneyList"
import {JourneyItem} from "./JourneyItem"
import { JourneySearch } from './JourneySearch';
import {JourneyCounter} from "./JourneyCounter";

const defaultJourneys=[
  {text:'Chapinero', completed:false},
  {text:'Engativa', completed:false},
  {text:'Suba', completed:false},
  {text:'Bosa Recreo', completed:false}
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
      <Travel/>
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
            />
          ))}
        </JourneyList>
      </div>

    </div>
  )
}
