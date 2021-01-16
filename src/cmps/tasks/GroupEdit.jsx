import { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { ColorLens } from '@material-ui/icons';

export class GroupEdit extends Component {
    state = {
    }

    render() {
        const { onRemoveGroup , group } = this.props;
        return (
            <section className="group-edit flex center align-center">
                <DeleteIcon
                    className="delete-icon"
                    onClick={onRemoveGroup(group.id)}
                />

            </section>
        )
    }
}
