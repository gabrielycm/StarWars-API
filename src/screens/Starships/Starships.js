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

export default function Starships() {

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
        getStarships(page)         
      },[page])
      
      const getStarships = (body) =>{
        dispatch(getService("starships",body))
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
      <h1>Starships</h1>
      <h1 id='Page'>page: {page}</h1>
      <Content>
        {data.map((starships, index)=> 
        <Card
        starships
        children={<>
          <h2>{starships.name}</h2>
          <p>model: {starships.model}</p>
          <p>manufacturer: {starships.manufacturer}</p>
          <p>cost in credits: {starships.cost_in_credits}</p>
          <p>length : {starships.length}</p>
          <p>max_atmosphering_speed : {starships.max_atmosphering_speed}</p>
          <p>crew: {starships.crew}</p>
          <p>passengers: {starships.passengers}</p>
          <p>cargo capacity: {starships.cargo_capacity}</p>
          <p>consumables: {starships.consumables}</p>
          <p>hyperdrive rating: {starships.hyperdrive_rating}</p>
          <p>MGLT: {starships.MGLT}</p>
          <p>starship class: {starships.starship_class}</p>
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
