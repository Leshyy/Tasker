import { Component } from 'react';

export class Notes extends Component {
    state = {
        note: ''
    }
    componentDidMount() {
        const { note } = this.props.task;
        this.setState({ note })
    }

    // handleChange = (ev) => {
    //     const { onChangeDate } = this.props;
    //     const newDate = dateFormat(ev.target.value, "yyyy-mm-dd");
    //     this.setState({
    //         date: newDate
    //     })
    //     onChangeDate(newDate);
    // }

    render() {
        const { note } = this.state;
        return (
            <section>
                <p>{note}</p>
            </section>
        )
    }
}

