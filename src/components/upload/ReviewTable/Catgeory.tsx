import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'
import { Catgeories, catergoyList } from 'types'

type Props = {}

function Catgeory({ }: Props) {
    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={undefined}
                label="Age"
                // onChange={handleChange}
            >
                {catergoyList.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}
            </Select>
        </FormControl>
    )
}

export default Catgeory