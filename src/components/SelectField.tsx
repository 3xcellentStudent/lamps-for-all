import {useState} from 'react'
import {Box, InputLabel, MenuItem, FormControl, Select, SelectChangeEvent} from '@mui/material'

interface Props {
  items: []
  label: string
  minWidth: number
}

interface Item {value: string, text: string}

export default function SelectField({items, label, minWidth}: Props){

  const [state, setState] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return(
    <Box sx={{ minWidth }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          label={label}
          onChange={handleChange}
        >
          {items.map((item: Item, idx) => {
            const {value, text} = item
            return <MenuItem key={idx} value={value}>{text}</MenuItem>
          })}
        </Select>
      </FormControl>
    </Box>
  )
}