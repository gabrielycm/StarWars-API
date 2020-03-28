import React, { useState, useEffect } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { Container, Content, LoadingContainer } from './styles';
import { ButtonContainer, Button, MyIcon } from '../../assets/Constants/const.style'

import { useSelector, useDispatch } from 'react-redux';
import { getService } from '../../store/swapi/swapi.action';

import Loading from '../../Components/loading/loading';
import Card from '../../Components/Card/Card';
import MyMenu from '../../Components/Menu/Menu';
import dartIcon from '../../assets/images/dartIcon.png';

export default function Films() {

    const swapiStore = useSelector(state => state.swapi)
    const { loading } = swapiStore
    const totalPages = 1;
    const dispatch = useDispatch()
    const data = swapiStore.data.results
    const [page, setPage] = useState(1)    
    const [showMenu, setShowMenu] = useState(false)
    const {isSmall, isMedium} = useMedia()
    
    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    const getFilms = (body) =>{
      dispatch(getService("films", body))
    }
    useEffect(()=>{        
      getFilms(page)
      },[page])
      

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
      <h1>Films</h1>
      <h1 id='Page'>page: {page}</h1>
      <Content>
        {data.map((films, index)=> 
        <Card
          films
          children={<>
            <h2>{films.title}</h2>
            <p>opening crawl: {films.opening_crawl}</p>
            <p>director: {films.director}</p>
            <p>producer: {films.producer}</p>
            <p>release date: {films.release_date}</p>
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
