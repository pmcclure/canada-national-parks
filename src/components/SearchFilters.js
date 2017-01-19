import React, { Component } from 'react';
import InputRange from 'react-input-range';
import '../../node_modules/react-input-range/dist/react-input-range.css';

import filters from '../data/filters';
import { updateQuery } from '../actions';

class SearchFilters extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = filters;
    }

    updateStore() {
        this.context.store.dispatch(
            updateQuery(this.state.query, this.state.show_filters, this.state.filters)
        );
    }

    onQueryChange(event) {
        this.setState({
            query: event.target.value.toLowerCase()
        }, () => {
            this.updateStore();
        });
    }

    toggleFilters(event) {
        var show_filters = !this.state.show_filters;
        this.setState({
            show_filters
        });
    }

    updateFilter(id, component, value) {
        let current_filters = this.state.filters;
        current_filters[id] = value;

        this.setState({
            filters: current_filters
        }, () => {
            this.updateStore();
        });
    }

    render() {
        return (
            <div className="search-filters">
                <div className="query-container">
                    <input type="text" name="query" id="query" placeholder="Name of Park" onKeyUp={this.onQueryChange.bind(this)} />
                    <label>
                        <input type="checkbox" onClick={this.toggleFilters.bind(this)} />
                        <span className="checkable">Show Filters</span>
                    </label>
                </div>

                <div className={this.state.show_filters ? '' : 'hidden'}>
                    <ul className="ranges">
                        <li>
                            <div className="label-text">Year Established</div>
                            <div className="flex two">
                                <div className="range-container">
                                    <InputRange
                                        maxValue={2020}
                                        minValue={1880}
                                        value={this.state.filters.year_established}
                                        labelSuffix=" yrs"
                                        onChange={this.updateFilter.bind(this, 'year_established')}
                                        />
                                </div>

                            </div>
                        </li>

                        <li>
                            <div className="label-text">Park Area</div>
                            <div className="flex two">
                                <div className="range-container">
                                    <InputRange
                                        maxValue={45000}
                                        minValue={0}
                                        value={this.state.filters.park_area}
                                        labelSuffix=" sq km"
                                        onChange={this.updateFilter.bind(this, 'park_area')}
                                        />
                                </div>                             
                            </div>
                        </li>                    
                    </ul>
                </div>
            </div>
        );
    }

}

SearchFilters.contextTypes = { store: React.PropTypes.object };
export default SearchFilters;
