//@ts-nocheck
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { useSelector } from 'react-redux';
import { RootState } from '../../../config/store/rootReducer';
import styled from 'styled-components';


const CustomAutocomplete = styled(Autocomplete)`
  margin: 0 auto;
`;


const SearchInput = () => {

  const [selectedCityId, setSelectedCityId] = useState('');
  const cities = useSelector((state: RootState) => state.cities); 

  const searchInCity = (city: string, type = '') => {

  }

  return (
    <CustomAutocomplete
      onChange={(event, value) => setSelectedCityId(value?.id)}
      options={cities?.cities}
      getOptionLabel={(option: any) => option.name}
      style={{ width: 300 }}
      //@ts-ignore
      renderInput={params => <TextField {...params} label="Find by city" variant="outlined" />}
    />
  );
};

export default SearchInput;
