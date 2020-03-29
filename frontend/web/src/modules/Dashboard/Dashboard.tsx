import React, { useEffect } from 'react';
import SearchInput from '../../shared/components/SearchInput/SearchInput';
import { Container, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../config/store/rootReducer';

const Dashboard = () => {

  const dispatch = useDispatch();
  const cities = useSelector((state: RootState) => state.cities); 
  
  const getCities = () => {
    cities.cities.length > 0 && dispatch(getCities());
  };

  useEffect(() => {
    getCities()
  }, [])

  return (
    <>
      <Container>
        <Grid justify="center" item xs={12}>
          <SearchInput />
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
