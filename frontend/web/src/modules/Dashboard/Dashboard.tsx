import React from 'react';
import SearchInput from '../../shared/components/SearchInput/SearchInput';
import { Container, Grid } from '@material-ui/core';

const Dashboard = () => {
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
