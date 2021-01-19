import { Component } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';

export class DueDate extends Component {
    state = {
        dateRange: {},
        isOpen: false,
        barWidth: 0,
        barColor: null
    }

    componentDidMount() {
        const { dateRange } = this.props.task;
        this.calcBarWidth(dateRange);
        this.chooseBarColor();
        this.setState({ dateRange });
    }

    toggleDatePicker = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleSelect = (ranges) => {
        const { onUpdateTask, groupId, task } = this.props;
        const rangeCopy = { ...this.state.dateRange };
        rangeCopy.startDate = ranges.selection.startDate;
        rangeCopy.endDate = ranges.selection.endDate;
        this.calcBarWidth(rangeCopy);
        this.chooseBarColor();
        this.setState({ dateRange: rangeCopy }, () => {
            task.dateRange = this.state.dateRange;
            onUpdateTask(task, groupId);
        })
    }

    calcBarWidth = (dateRange) => {
        const totalTime = new Date(dateRange.endDate).getTime() - new Date(dateRange.startDate).getTime();
        const elapsedTime = Date.now() - new Date(dateRange.startDate).getTime();
        const barWidth = (elapsedTime / totalTime) * 100;
        this.setState({ barWidth });
    }

    chooseBarColor = () => {
        const { barWidth } = this.state;
        let barColor;
        if (barWidth < 10) barColor = 'transparent';
        else if (barWidth < 30) barColor = '#037f4c';
        else if (barWidth < 70) barColor = '#fdab3d';
        else if (barWidth >= 70) barColor = '#e44258';
        this.setState({ barColor })
    }

    render() {
        const { isOpen, dateRange, barColor, barWidth } = this.state;
        if (dateRange === {}) return <div>Loading...</div>
        const selectionRange = {
            startDate: new Date(dateRange.startDate),
            endDate: new Date(dateRange.endDate),
            key: 'selection',
        }
        return (
            <section className="column-date">
                <div className="date flex align-center" onClick={this.toggleDatePicker}>
                    <div className="date-bar"
                        style={{ backgroundColor: 'green', width: `${barWidth}%` }}
                    >
                    </div>
                    <div className="date-text">
                        {new Date(dateRange.endDate).toLocaleDateString('en-GB')}
                    </div>
                </div>
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


