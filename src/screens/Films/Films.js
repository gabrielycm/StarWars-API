import React, { useState, useEffect } from 'react';
import { useMedia } from '../../hooks/useMedia';
import { Container, Content, LoadingContainer } from './styles';
import { ButtonContainer, Button, MyIcon } from '../../assets/Constants/const.style'

import { useSelector, useDispatch } from 'react-redux'
import { getFilm } from '../../store/Films/films.action'

import Loading from '../../Components/loading/loading';
import Card from '../../Components/Card/Card';
import MyMenu from '../../Components/Menu/Menu'
import dartIcon from '../../assets/images/dartIcon.png'

export default function Films() {

    const filmsStore = useSelector(state => state.films)
    const { loading } = filmsStore
    const totalPages = 1;
    const dispatch = useDispatch()
    const data = filmsStore.data.results
    const [page, setPage] = useState(1)    
    const [showMenu, setShowMenu] = useState(false)
    const {isSmall, isMedium} = useMedia()
    
    console.log(data)

    const toggleMenu = ()=>{
        setShowMenu(!showMenu)
    }
    const getFilms = (body) =>{
      dispatch(getFilm(body))
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
          key={index}
          name={"Title: " + films.title}
          first={films.opening_crawl}
          second={"director: " + films.director}
          third={"producer: " + films.producer}
          fourth={"release date : " + films.release_date}
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
