import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { useUnchecked } from 'state';
import { categoryAtom } from 'state';
import { Catgeories } from 'types';

export const Catgeory = memo(function Catgeory({ id, category }: {
    id: string,
    category: Catgeories | '',
}) {
    const categories = useRecoilValue(categoryAtom)
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
                {categories.map(({ name }) => <MenuItem key={name} value={name}>{name}</MenuItem>)}
            </Select>
        </FormControl>
    )
})

