import React, { useState, useEffect } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { Container, Content, LoadingContainer } from './styles';
import { ButtonContainer, Button, MyIcon } from '../../assets/Constants/const.style'

import { useSelector, useDispatch } from 'react-redux'
import { getStarship } from '../../store/Starships/starships.action'

import Loading from '../../Components/loading/loading';
import Card from '../../Components/CardStarships/Card';
import MyMenu from '../../Components/Menu/Menu'
import dartIcon from '../../assets/images/dartIcon.png'

export default function Starships() {

    const starshipStore = useSelector(state => state.starships)
    const { loading } = starshipStore
    const totalPages = 4;
    const dispatch = useDispatch()
    const data = starshipStore.data.results
    const [page, setPage] = useState(1)    
    const [showMenu, setShowMenu] = useState(false)
    const {isSmall, isMedium} = useMedia()
    
    console.log(data)

    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    useEffect(()=>{        
        getStarships(page)         
      },[page])
      
      const getStarships = (body) =>{
        dispatch(getStarship(body))
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
          key={index}
          name={"Starship: " + starships.name}
          first={"model: " + starships.model}
          second={"manufacturer: " + starships.manufacturer}
          third={"cost in credits: " + starships.cost_in_credits}
          fourth={"length: " + starships.length}
          fifth={"max atmosphering speed: " + starships.max_atmosphering_speed}
          sixth={"crew: " + starships.crew}
          seventh={"passengers: " + starships.passengers}
          eighth={"cargo capacity: "+ starships.cargo_capacity}
          ninth={"consumables: "+ starships.consumables}
          tenth={"hyperdrive rating: "+ starships.hyperdrive_rating}
          eleventh={"Megalight per hour: "+ starships.MGLT}
          twelfth={"starship class: "+ starships.starship_class}
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
