import { Component } from 'react'
import FilterListIcon from '@material-ui/icons/FilterList';
import { FilterModal } from './FilterModal'


export class GroupFilter extends Component {
    state = {
        filterBy: {
            txt: ''
        }
    }
    handleChange = (ev) => {
        var filterBy = { ...this.state.filterBy }
        filterBy.txt = ev.target.value;
        this.setState({ filterBy }, () => this.props.getGroupForDisplay(filterBy.txt))
    }

    render() {
        const { activeBoard, toggleFilter, isFilterShow } = this.props
        return (
            <div className="flex">
                <input
                    type="text"
                    autoComplete="off"
                    // name="name"
                    onChange={this.handleChange}
                    placeholder="Search"
                />
                <button className="btn-filter flex align-center" onClick={toggleFilter}>
                    {<FilterListIcon />} Filter
                            {isFilterShow && <FilterModal activeBoard={activeBoard} />}
                </button>
            </div>
        )
    }
}
