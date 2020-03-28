//@ts-nocheck
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const SearchInput = () => {

  const [selectedCityId, setSelectedCityId] = useState('');

  return (
    <Autocomplete
      onChange={(event, value) => setSelectedCityId(value?.id)}
      options={cities}
      getOptionLabel={(option: any) => option.name}
      style={{ width: 300 }}
      //@ts-ignore
      renderInput={params => <TextField {...params} label="Find by city" variant="outlined" />}
    />
  );
};

export default SearchInput;
