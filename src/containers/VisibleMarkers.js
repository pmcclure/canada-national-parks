import { connect } from 'react-redux';

import MapMarkerList from '../components/MapMarkerList'; //component for rendering markers
import getVisibleParks from '../helpers/getVisibleParks';
import parks from '../data/parks'; //hard-coded parks data

//Gets data from the store and passes an object to MapMarkerList component, which can then use them as props
const mapStateToProps = (state) => {
    return {
        parks: getVisibleParks(
            parks,
            state.search.query, //search query entered by the user
            state.search.filters // search filters selected by the user
        )
    }
}

const VisibleMarkers = connect(mapStateToProps)(MapMarkerList);

export default VisibleMarkers;