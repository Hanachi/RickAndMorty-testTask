import React from 'react';
import { connect } from 'react-redux';

import SimpleTabs from '../components/SimpleTabs';
import { getCharacters } from '../store/characters/actions';
import { getEpisodes } from '../store/episodes/actions';
import { getLocation } from '../store/location/actions';



class TabsContainer extends React.Component {
  render() {
    return (
      <SimpleTabs {...this.props} />
    )
  }
}
const mapStateToProps = (state) => ({
  state: state,
})

const mapDispatchToProps = {
    getCharacters,
    getEpisodes,
    getLocation,
}


export default connect(mapStateToProps, mapDispatchToProps)(TabsContainer);