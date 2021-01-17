import { Component } from 'react';

export class Notes extends Component {
    state = {
        note: '',
        isEditable: false
    }
    componentDidMount() {
        const { note } = this.props.task;
        this.setState({ note })
    }

    handleChange = (ev) => {
        this.setState({ note: ev.target.value })
    }

    onSave = (ev) => {
        const { handleNoteChange } = this.props;
        this.setState({ isEditable: false });
        handleNoteChange(this.state.note);
    }

    render() {
        const { note, isEditable } = this.state;
        return (
            <section className="column-notes">
                <p className="editable" onClick={() => this.setState({ isEditable: true })}>{note}</p>
                {isEditable &&
                    <textarea
                        className="modal-edit"
                        cols="20" rows="10"
                        autoFocus
                        value={note}
                        onChange={this.handleChange}
                        onKeyDown={(ev) => {
                            if (ev.key === 'Enter') {
                                this.onSave(ev);
                            }
                        }}
                    />}
            </section>
        )
    }
}

