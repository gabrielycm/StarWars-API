import React, { useState, useEffect } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { Container, Content, LoadingContainer } from './styles';
import { ButtonContainer, Button, MyIcon } from '../../assets/Constants/const.style'

import { useSelector, useDispatch } from 'react-redux'
import { getVehicle } from '../../store/Vehicles/vehicles.action'

import Loading from '../../Components/loading/loading';
import Card from '../../Components/Card/Card';
import MyMenu from '../../Components/Menu/Menu'
import dartIcon from '../../assets/images/dartIcon.png'

export default function Vehicles() {

    const vehiclesStore = useSelector(state => state.vehicles)
    const { loading } = vehiclesStore
    const totalPages = 4;
    const dispatch = useDispatch()
    const data = vehiclesStore.data.results
    const [page, setPage] = useState(1)    
    const [showMenu, setShowMenu] = useState(false)
    const {isSmall, isMedium} = useMedia()
    
    console.log(data)

    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    useEffect(()=>{        
        getVehicles(page)         
      },[page])
      
      const getVehicles = (body) =>{
        dispatch(getVehicle(body))
      }

      const onBack = ()=>{
        page > 1 && setPage(page - 1)
      }
      
      const onNext = ()=>{
        page < totalPages && setPage(page + 1)
      }
     return loading ?(
      <LoadingContainer>
        <Loading/>
      </LoadingContainer>
    ) : data ? (
      <Container>
        <MyIcon mobile={isSmall + isMedium} onClick={toggleMenu} src={dartIcon} alt=""/>
      <h1>Vehicles</h1>
      <h1 id='Page'>page: {page}</h1>
      <Content>
        {data.map((vehicles, index)=> 
        <Card 
          key={index}
          name={"Vehicle: " + vehicles.name}
          first={"Model: " + vehicles.model}
          second={"Manufacturer: " + vehicles.manufacturer}
          third={"cost in credits: " + vehicles.cost_in_credits}
          fourth={"length : " + vehicles.length}
          fifth={"max atmosphering speed: " + vehicles.max_atmosphering_speed}
          sixth={"crew: " + vehicles.crew}
          seventh={"passengers: " + vehicles.passengers}
          eighth={"cargo capacity: "+ vehicles.cargo_capacity}
          ninth={"consumables: "+ vehicles.consumables}
          tenth={"vehicle class: "+ vehicles.vehicle_class}
          />
        )}
      </Content>
      <ButtonContainer>
          <Button disabled={page <= 1} onClick={()=> onBack()}>Back</Button>
          <Button disabled={page >= totalPages} onClick={()=> onNext()}>Next</Button>
        </ButtonContainer>
        <MyMenu
        show={showMenu}
        close={toggleMenu}/>
    </Container>
  ) : (
    <Container erro>
        <MyIcon mobile={isSmall + isMedium} onClick={toggleMenu} src={dartIcon} alt=""/>
      <h1>Error please try again later.</h1>
      <MyMenu
        show={showMenu}
        close={toggleMenu}/>
    </Container>
  )
}
