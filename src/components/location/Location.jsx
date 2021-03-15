import React, { useEffect }  from 'react';
import { useDispatch } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';

import { getLocation, changePagination } from '../../store/location/actions';
import LocationFilters from '../filters/LocationFilters';

const useStyles = makeStyles({
  table: {
    width: 50,
  },
});

const Location = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocation({}))
  },[]);
  const { pagination, state, state: {info = {} }, state: { results = [] } = {} } = props;
  
  const handlePaginationChange = (key, value) => {
    dispatch(changePagination({key, value}))
    dispatch(getLocation({}))
  }

  return  (
    
    <div className=''>
      <LocationFilters />
    <TableContainer component={Paper}>
      <Table className={''} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow key={''}>
          <TableCell className='table__title'>
              {'id'}
          </TableCell>
          <TableCell>{'Name'}</TableCell>
          <TableCell>{'Type'}</TableCell>
          <TableCell>{'Dimension'}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((row) => (
          <TableRow key={row.id} className={classes.tableR}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell >{row.name}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.dimension}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </TableContainer>
    <Pagination count={info.pages} page={pagination.locationPage} onChange={(event, page) => handlePaginationChange('locationPage', page)} />
    </div>
  )
}

export default Location