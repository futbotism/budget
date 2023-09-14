import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useUnchecked } from 'state'
import { Catgeories, catergoyList } from 'types'
import { memo } from 'react';

export const Catgeory = memo(function Catgeory({ id, category }: {
    id: string,
    category: Catgeories | '',
}) {

    const { updateTransactionCategory } = useUnchecked()

    const handleChange = (event: SelectChangeEvent) => {
        updateTransactionCategory(id, event.target.value as Catgeories)
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={category}
                label="Age"
                onChange={handleChange}>
                {catergoyList.map(category => <MenuItem key={category} value={category}>{category}</MenuItem>)}
            </Select>
        </FormControl>
    )
})

