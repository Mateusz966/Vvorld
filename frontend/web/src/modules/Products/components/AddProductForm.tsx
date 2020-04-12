import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

interface Props {

}

const AddProductForm = (props: Props) => {

  const [brand, setBrand] = useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setBrand(event.target.value as string);
  }

  return (
    <div>
      <FormControl>
        <InputLabel id="selectBrandLabel">Marka</InputLabel>
        <Select
          labelId="selectBrandLabel"
          id="selectBrand"
          value={brand}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default AddProductForm;
