import { Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { NumericFormat } from 'react-number-format';

type Props = {
    total: number,
    variant?: Variant
};

function Total({
    total,
    variant = 'overline'
}: Props) {

    return (<Typography variant={variant}>
        <NumericFormat displayType="text" value={total} prefix={'$'} decimalScale={2} fixedDecimalScale />
    </Typography>
    )
}

export default Total
