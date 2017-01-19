import { connect } from 'react-redux';
import CardList from '../components/CardList';

import getVisibleParks from '../helpers/getVisibleParks';
import parks from '../data/parks';

//Gets data from the store and passes an object to CardList component, which can then use them as props
const mapStateToProps = (state) => {
    return {
        parks: getVisibleParks(
            parks,
            state.search.query,
            state.search.filters
        )
        
    }
   
}


const VisibleCards = connect(mapStateToProps)(CardList);

export default VisibleCards;