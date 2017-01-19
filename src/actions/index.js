export const updateSelection = (key, position, showInfoWindow) => {
  return {
    type: 'UPDATE_SELECTION',
    key, 
    position,
    showInfoWindow
  }
}
 
export const updateQuery = (query, show_filters, filters) => {
  return {
    type: 'UPDATE_QUERY',
    query,			//The search query itself
    show_filters,	//Whether the show filters checkbox is checked
    filters			//the values of the two filters
  }
}