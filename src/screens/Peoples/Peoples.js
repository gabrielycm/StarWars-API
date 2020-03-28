import React, { useState, useEffect } from 'react';
import { Container, Content, LoadingContainer } from './styles';
import { ButtonContainer, Button } from '../../assets/Constants/const.style';


import { useSelector, useDispatch } from 'react-redux';
import { getService } from '../../store/swapi/swapi.action';

import Loading from '../../Components/loading/loading';
import Card from '../../Components/Card/Card';
import MyMenu from '../../Components/Menu/Menu';
import { MyIcon } from '../../assets/Constants/const.style';
import dartIcon from '../../assets/images/dartIcon.png';
import { useMedia } from '../../hooks/useMedia';

export default function Peoples() {

    const swapiStore = useSelector(state => state.swapi  )
    const { loading } = swapiStore
    const totalPages = 9
    const dispatch = useDispatch()
    const data = swapiStore.data.results
    const [page, setPage] = useState(1)    
    const [showMenu, setShowMenu] = useState(false)
    const {isSmall, isMedium} = useMedia()
  
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    useEffect(()=>{        
        getPeople(page)         
      },[page])
      
      const getPeople = (body) =>{
        dispatch(getService("people", body))
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
        <h1>Peoples</h1>
        <h1 id='Page'>Page: {page}</h1>
      <Content>
        {data.map((people, index)=> 
        <Card
          children={<>
          <h2>{people.name}</h2>
          <p>gender: {people.gender}</p>
          <p>height: {people.height}</p>
          <p>hair color: {people.hair_color}</p>
          <p>skin color: {people.skin_color}</p>
          <p>eye color: {people.eye_color}</p>
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
  ): (<Container erro>
      <MyIcon mobile={isSmall + isMedium} onClick={toggleMenu} src={dartIcon} alt=""/>
    <h1>Error please try again later.</h1>
    <MyMenu
        show={showMenu}
        close={toggleMenu}/>
  </Container>)
}
