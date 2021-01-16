import { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { ColorLens } from '@material-ui/icons';
import { ColorCmp } from './ColorCmp';

export class GroupEdit extends Component {
    state = {
        group: null,
        showPallete: false
    }

    componentDidMount() {
        const { group } = this.props;
        this.setState({ group });
    }

    togglePallete = () => {
        var { showPallete } = this.state;
        showPallete = !showPallete;
        this.setState({ showPallete });
    }

    changeColor = (ev, chosenColor) => {
        const { group } = this.state;
        const { toggleModal, onUpdateGroup } = this.props;
        ev.stopPropagation();
        const copy = { ...group };
        copy.color = chosenColor;
        this.setState({ group: copy }, () => {
            onUpdateGroup(this.state.group);
            toggleModal();
        })
    }


    render() {
        const { onRemoveGroup, group } = this.props;
        const { showPallete } = this.state;
        return (
            <section className="group-edit flex col center align-center">
                <span className="delete flex center align-center" onClick={(ev) => onRemoveGroup(ev, group.id)}>
                    <DeleteIcon
                        className="icon-delete"
                    />
                    Delete Group
                </span>
                <span className="color flex center align-center" onClick={this.togglePallete}>
                    <ColorLens />
                    Change Color
                    {showPallete && <ColorCmp togglePallete={this.togglePallete} changeColor={this.changeColor} />}
                </span>
            </section>
        )
    }
}
