import { Component } from 'react';
import DatePicker from "react-datepicker";

export class DueDate extends Component {
    state = {
        date: '2021-15-01'
    }
    componentDidMount() {
        const { dueDate } = this.props.task;
        const date = dateFormat(dueDate, "yyyy-mm-dd");
        this.setState({ date });
    }

    handleChange = (ev) => {
        const { onChangeDate } = this.props;
        const newDate = dateFormat(ev.target.value, "yyyy-mm-dd");
        this.setState({
            date: newDate
        })
        onChangeDate(newDate);
    }

    render() {
        const { date } = this.state;
        return (
            <section>
                <input
                    className="date"
                    type="date"
                    value={date}
                    onChange={this.handleChange}
                />
            </section>
        )
    }
}
// import { Component } from 'react';
// var dateFormat = require("dateformat");

// export class DueDate extends Component {
//     state = {
//         date: '2021-15-01'
//     }
//     componentDidMount() {
//         const { dueDate } = this.props.task;
//         const date = dateFormat(dueDate, "yyyy-mm-dd");
//         this.setState({ date });
//     }

//     handleChange = (ev) => {
//         const { onChangeDate } = this.props;
//         const newDate = dateFormat(ev.target.value, "yyyy-mm-dd");
//         this.setState({
//             date: newDate
//         })
//         onChangeDate(newDate);
//     }

//     render() {
//         const { date } = this.state;
//         return (
//             <section>
//                 <input
//                     className="date"
//                     type="date"
//                     value={date}
//                     onChange={this.handleChange}
//                 />
//             </section>
//         )
//     }
// }

