import React, { useState, useEffect } from 'react';
import { Container, Content, LoadingContainer, ButtonContainer, Button} from './styles';

import { useSelector, useDispatch } from 'react-redux'
import { getPeoples } from '../../store/peoples/peoples.action'
import Loading from '../../Components/loading/loading';
import Card from '../../Components/Card/Card';

export default function Home() {

    const peopleStore = useSelector(state => state.peoples  )
    const { loading } = peopleStore
    const totalPages = 9
    const dispatch = useDispatch()
    const data = peopleStore.data.results
    const [page, setPage] = useState(1)    

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
  ) : (
    <Container>
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
          <Button disabled={page >= 9} onClick={()=> onNext()}>Next</Button>
        </ButtonContainer>
    </Container>
  );
}
