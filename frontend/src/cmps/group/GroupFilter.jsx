import { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import FilterListIcon from '@material-ui/icons/FilterList';
import { FilterModal } from './FilterModal'
import { FormatListBulleted } from '@material-ui/icons';


export class GroupFilter extends Component {
    state = {
        filterBy: {
            txt: ''
        },
        isSearching: false
    }

    handleChange = (ev) => {
        var filterBy = { ...this.state.filterBy }
        filterBy.txt = ev.target.value;
        this.setState({ filterBy }, () => this.props.getGroupsForDisplay(filterBy))
    }

    toggleSearch = () => {
        this.setState({ isSearching: !this.state.isSearching })
    }
    render() {
        const { activeBoard, toggleFilter, isFilterShow } = this.props;
        const { isSearching } = this.state;
        return (
            <div className="filter flex align-center">
                <div
                    className={`btn-search flex align-center ${isSearching && 'searching'}`}
                    onClick={this.toggleSearch}
                    onBlur={() => { this.setState({ isSearching: false }) }}
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                            this.setState({ isSearching: false })
                        }
                    }}
                >
                    <SearchIcon />
                    <input
                        className="input-search"
                        type="text"
                        autoComplete="off"
                        onChange={this.handleChange}
                        placeholder="Search"
                    />
                </div>
                <button className="btn-filter flex center align-center" onClick={toggleFilter}>
                    {<FilterListIcon />} Filter
                            {isFilterShow && <FilterModal activeBoard={activeBoard} getGroupsForDisplay={this.props.getGroupsForDisplay} />}
                </button>
            </div>
        )
    }
}
