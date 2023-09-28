import { FormControl, Icon, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, css } from '@mui/material';
import { memo } from 'react';
import { useRecoilValue } from 'recoil';
import { useUnchecked } from 'state';
import { categoryAtom } from 'state';
import { theme } from 'theme';
import { Catgeories } from 'types';

const styles = css({
    display: 'flex',
    justifyContent: 'space-between',
    section: {
        display: 'flex',
        gap: theme.spacing(0.5),
        alignItems: 'center'
    },
    div: {
        height: '30px',
        width: '30px'
    }
})

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
                {categories.map(({ name, icon, color }) => <MenuItem css={styles} key={name} value={name}>
                    <Typography>{name}</Typography>
                    <section>
                        {!category && <Icon>{icon}</Icon>}
                        <div style={{ background: color }}></div>
                    </section>
                </MenuItem>)}
            </Select>
        </FormControl>
    )
})

