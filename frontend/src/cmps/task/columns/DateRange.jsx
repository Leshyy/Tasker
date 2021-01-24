import { Component } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
var dateFormat = require("dateformat");

export class DateRange extends Component {
    state = {
        isOpen: false,
        dateRange: {},
        timeline: '',
        workingDays: 0,
        barWidth: 0,
        barColor: null
    }

    componentDidMount() {
        const { dateRange } = this.props.task;
        const { group } = this.props;
        this.setState({ dateRange, barColor: group.color }, () => {
            this.showTimeline();
            this.calcBarWidth(dateRange);
        })
    }

    toggleDatePicker = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    handleSelect = (ranges) => {
        const { onUpdateTask, group, task } = this.props;
        const rangeCopy = { ...this.state.dateRange };
        rangeCopy.startDate = ranges.selection.startDate;
        rangeCopy.endDate = ranges.selection.endDate;
        this.calcBarWidth(rangeCopy);
        this.setState({ dateRange: rangeCopy }, () => {
            this.showTimeline();
            task.dateRange = this.state.dateRange;
            onUpdateTask(task, group.id);
        })
    }

    showTimeline = () => {
        const { dateRange } = this.state;
        let start = dateFormat(dateRange.startDate, "mmm-dd");
        let end = dateFormat(dateRange.endDate, "mmm-dd");
        this.setState({ timeline: `${start} - ${end}` })
    }

    calcBarWidth = (dateRange) => {
        const totalTime = new Date(dateRange.endDate).getTime() - new Date(dateRange.startDate).getTime();
        const elapsedTime = Date.now() - new Date(dateRange.startDate).getTime();
        const barWidth = (elapsedTime / totalTime) * 100;
        const workingDays = totalTime / 1000 / 60 / 60 / 24;
        this.setState({ barWidth, workingDays });
    }

    render() {
        const { isOpen, timeline, workingDays, dateRange, barColor, barWidth } = this.state;
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
                        style={{ backgroundColor: `${barColor}`, width: `${barWidth}%` }}
                    >
                    </div>
                    <div className="date-content">
                        {timeline}
                    </div>
                    <div className="date-hover-content">
                        {`${workingDays}d`}
                    </div>
                </div>
                <div>
                    {isOpen && <DateRangePicker
                        ranges={[selectionRange]}
                        onChange={this.handleSelect}
                    />}
                </div>
                {isOpen &&
                    <div
                        className="screen"
                        onClick={this.toggleDatePicker}
                    />}
            </section>
        )
    }
}


