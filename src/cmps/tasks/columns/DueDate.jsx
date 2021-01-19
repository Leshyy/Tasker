import { Component } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

export class DueDate extends Component {
    state = {
        dateRange: {},
        isOpen: false
    }

    componentDidMount() {
        const { dateRange } = this.props.task;
        this.setState({ dateRange });
    }

    toggleDatePicker = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleSelect = (ranges) => {
        const { onUpdateTask, groupId, task } = this.props;
        const rangeCopy = { ...this.state.dateRange }
        rangeCopy.startDate = ranges.selection.startDate
        rangeCopy.endDate = ranges.selection.endDate
        this.setState({ dateRange: rangeCopy }, () => {
            task.dateRange = this.state.dateRange;
            onUpdateTask(task, groupId);
        })
    }

    render() {
        const { isOpen, dateRange } = this.state;
        if (dateRange === {}) return <div>Loading...</div>
        const selectionRange = {
            startDate: new Date(dateRange.startDate),
            endDate: new Date(dateRange.endDate),
            key: 'selection',
        }
        return (
            <section className="column-date">
                <p onClick={this.toggleDatePicker}>{new Date(dateRange.endDate).toLocaleDateString('en-GB')}</p>
                <div>
                    {isOpen && <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={this.handleSelect}
                    />}
                </div>
            </section>
        )
    }
}


