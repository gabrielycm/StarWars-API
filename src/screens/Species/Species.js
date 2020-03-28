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

export default function Species() {

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
        getSpecies(page)         
      },[page])
      
      const getSpecies = (body) =>{
        dispatch(getService("species",body))
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
      <h1>Species</h1>
      <h1 id='Page'>page: {page}</h1>
      <Content>
        {data.map((specie, index)=> 
        <Card
          species
          children={<>
            <h2>{specie.name}</h2>
            <p>classification: {specie.classification}</p>
            <p>designation: {specie.designation}</p>
            <p>skin colors: {specie.skin_colors}</p>
            <p>hair colors: {specie.hair_colors}</p>
            <p>eye colors: {specie.eye_colors}</p>
            <p>language: {specie.language}</p>
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
