import React, { useState, useEffect }  from 'react';
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

import { getEpisodes, changePagination } from '../../store/episodes/actions';
import EpisodesFilters from '../filters/EpisodesFilters';

const useStyles = makeStyles({
  table: {
    width: 50,
  },
});

const Episodes = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEpisodes({}))
  },[]);
  const { pagination, state, state: {info = {} }, state: { results = [] } = {} } = props;
  
  const handlePaginationChange = (key, value) => {
    dispatch(changePagination({key, value}))
    dispatch(getEpisodes({}))
  }

  return  (
    
    <div className=''>
      <EpisodesFilters />
    <TableContainer component={Paper}>
      <Table className={''} size="small" aria-label="a dense table">
      <TableHead>
        <TableRow key={''}>
          <TableCell className='table__title'>
              {'id'}
          </TableCell>
          <TableCell>{'Name'}</TableCell>
          <TableCell>{'Episode'}</TableCell>
          <TableCell>{'Air date'}</TableCell>
          <TableCell>{'Url'}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {results.map((row) => (
          <TableRow key={row.id} className={classes.tableR}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell >{row.name}</TableCell>
            <TableCell>{row.episode}</TableCell>
            <TableCell>{row.air_date}</TableCell>
            <TableCell>{row.url}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      </Table>
    </TableContainer>
    <Pagination count={info.pages} page={pagination.episodePage} onChange={(event, page) => handlePaginationChange('episodePage', page)} />
    </div>
  )
}

export default Episodes