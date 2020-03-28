import React, { useState, useEffect } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { Container, Content, LoadingContainer } from './styles';
import { ButtonContainer, Button, MyIcon } from '../../assets/Constants/const.style'

import { useSelector, useDispatch } from 'react-redux'
import { getService } from '../../store/swapi/swapi.action'

import Loading from '../../Components/loading/loading';
import Card from '../../Components/Card/Card';
import MyMenu from '../../Components/Menu/Menu'
import dartIcon from '../../assets/images/dartIcon.png'

export default function Vehicles() {

    const swapiStore = useSelector(state => state.swapi)
    const { loading } = swapiStore
    const totalPages = 4;
    const dispatch = useDispatch()
    const data = swapiStore.data.results
    const [page, setPage] = useState(1)    
    const [showMenu, setShowMenu] = useState(false)
    const {isSmall, isMedium} = useMedia()
    
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    useEffect(()=>{        
        getVehicles(page)         
      },[page])
      
      const getVehicles = (body) =>{
        dispatch(getService("vehicles",body))
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
          vehicles
          children={<>
            <h2>{vehicles.name}</h2>
            <p>model: {vehicles.model}</p>
            <p>manufacturer: {vehicles.manufacturer}</p>
            <p>cost in credits: {vehicles.cost_in_credits}</p>
            <p>length: {vehicles.length}</p>
            <p>max atmosphering speed: {vehicles.max_atmosphering_speed}</p>
            <p>crew: {vehicles.crew}</p>
            <p>passengers: {vehicles.passengers}</p>
            <p>cargo capacity: {vehicles.cargo_capacity}</p>
            <p>consumables: {vehicles.consumables}</p>
            <p>vehicle class: {vehicles.vehicle_class}</p>
            </>
            }
          key={index}
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
