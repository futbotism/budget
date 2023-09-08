import { css } from '@mui/material';
import { Container } from 'components/shared';
import Papa from 'papaparse';
import { useState } from 'react';
import Actions from './Actions';
import { ReviewTable } from './ReviewTable';
import { theme } from 'theme';

const styles = css({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateRows: 'auto 1fr',
  height: '100%',
  justifyItems: 'stretch',
  alignItems: 'center'
})

function Upload() {
  // State to store parsed data
  const [parsedData, setParsedData] = useState<any[]>([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState<any[]>([]);

  //State to store the values
  const [values, setValues] = useState<any[]>([]);


  const onChange = (event: any) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray: any[] = [];
        const valuesArray: any[] = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        debugger

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });

  }

  return (
    <Container>
      <div css={styles}>
        <Actions onChange={onChange}/>
        <ReviewTable columns={tableRows} rows={values} />
      </div>
    </Container>
  )
}

export default Upload
