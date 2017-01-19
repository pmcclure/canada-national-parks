const getVisibleParks = (parks, query, filters) => {

    let filtered_parks = parks.filter((pk) => {
        let name = pk.name.toLowerCase();

        if (( name.indexOf(query) !== -1) && (filters.year_established >= pk.yearEstablished && filters.park_area >= pk.parkArea)) {
            
            return pk;
        }
        return false;
    });
    
    return filtered_parks;


}

export default getVisibleParks;


// const getVisibleParks = (parks, query, filters) => {

//     let filtered_parks = parks.filter((pk) => {
//         let name = pk.name.toLowerCase();

//         if ((query !== '' && name.indexOf(query) !== -1) && (filters.year_established >= pk.yearEstablished && filters.park_area >= pk.parkArea)) {
            
//             return pk;
//         }
//         return false;
//     });
//     console.log(filtered_parks.length)
//     return filtered_parks;


// }

// export default getVisibleParks;
