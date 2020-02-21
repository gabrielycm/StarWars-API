import React, { useState, useEffect } from 'react';
import { Container, Content, LoadingContainer } from './styles';
import { ButtonContainer, Button } from '../../assets/Constants/const.style';

import { useSelector, useDispatch } from 'react-redux';
import { getPeoples } from '../../store/peoples/peoples.action';
import Loading from '../../Components/loading/loading';
import Card from '../../Components/Card/Card';
import MyMenu from '../../Components/Menu/Menu';
import { MyIcon } from '../../assets/Constants/const.style';
import dartIcon from '../../assets/images/dartIcon.png';
import { useMedia } from '../../hooks/useMedia';

export default function Peoples() {

    const peopleStore = useSelector(state => state.peoples  )
    const { loading } = peopleStore
    const totalPages = 9
    const dispatch = useDispatch()
    const data = peopleStore.data.results
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
        dispatch(getPeoples(body))
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
          key={index}
          name={people.name}
          gender={people.gender}
          height={people.height}
          hair_color={people.hair_color}
          skin_color={people.skin_color}
          eye_color={people.eye_color}
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
