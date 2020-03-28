import React, { useState, useEffect, useCallback } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { Container, Content, LoadingContainer } from './styles';
import { ButtonContainer, Button, MyIcon } from '../../assets/Constants/const.style'

import { useSelector, useDispatch } from 'react-redux'
import { getPlanets } from '../../store/planets/planets.action'

import Loading from '../../Components/loading/loading';
import Card from '../../Components/Card/Card';
import MyMenu from '../../Components/Menu/Menu'
import dartIcon from '../../assets/images/dartIcon.png'

export default function Planets() {

    const planetsStore = useSelector(state => state.planets)
    const { loading } = planetsStore
    const totalPages = 7;
    const dispatch = useDispatch()
    const data = planetsStore.data.results
    const [page, setPage] = useState(1)    
    const [showMenu, setShowMenu] = useState(false)
    const {isSmall, isMedium} = useMedia()
    
    console.log(data)

    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }

    useEffect(()=>{        
    
      getPlanet(page)         
    },[page])
    
      const getPlanet =(body) =>{
        dispatch(getPlanets(body))
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
      <h1>Planets</h1>
      <h1 id='Page'>page: {page}</h1>
      <Content>
        {data.map((planet, index)=> 
        <Card children={<>
          <h2>{planet.name}</h2>
            <div className='content'>
              <p>gender: {planet.rotation_period}</p>
              <p>height: {planet.orbital_period}</p>
              <p>hair color: {planet.terrain}</p>
              <p>skin color: {planet.climate}</p>
              <p>eye color: {planet.population}</p>
              <p>eye color: {planet.gravity}</p>
              <p>eye color: {planet.diameter}</p>
              <p>eye color: {planet.population}</p>
            </div>
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
