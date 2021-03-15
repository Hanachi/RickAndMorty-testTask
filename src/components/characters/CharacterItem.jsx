import React from 'react';

import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography'

import '../../styles/style.css'

const CharacterItem = (props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <div>
      <div className='box' onClick={handleClick}>
        <img src={props.character.image} />
        <span>{`Name: ${props.character.name}`}</span>
        <span>{`Species: ${props.character.species}`}</span>
        <span>{`Status: ${props.character.status}`}</span>
        <span>{`Gender: ${props.character.gender}`}</span>
      </div>
      <Popover
        className='cardPopover'
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography className='cardInfo'>About XD: <pre>{JSON.stringify(props.character, null, 2)}</pre></Typography>
      </Popover>
    </div>
  )
}


export default CharacterItem