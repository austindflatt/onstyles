import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import Styles from './components/Styles/Styles'
import Form from './components/Form/Form'
import { getStyles } from './actions/styles'
import Header from './components/Header/Header';
import { Container } from '@mantine/core';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStyles());
  }, [dispatch])
  return (
    <div>
      <Header />
      <Container>
      <Form />
      <Styles />
      </Container>
    </div>
  )
}

export default App
