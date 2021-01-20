import { Component } from 'react'
import Input from '@material-ui/core/Input';

export class BoardFilter extends Component {
    state = {
        filterBy: {
            txt: ''
        }
    }

    handleChange = (ev) => {
        var filterBy = { ...this.state.filterBy }
        filterBy.txt = ev.target.value;
        this.setState({ filterBy }, () => {
            this.props.getBoradsForDisplay(this.state.filterBy.txt);
        })
    }

    render() {
        const { filterBy } = this.state
        return (
            <section className="board-filter">
                <Input
                    type="text"
                    name="name"
                    autoComplete="off"
                    placeholder="search"
                    onChange={this.handleChange}
                    value={filterBy.txt}>
                </Input>
            </section>
        )
    }
}
