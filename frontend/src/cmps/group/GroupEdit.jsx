import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { ColorLens } from '@material-ui/icons';
import { ColorCmp } from './ColorCmp';
import { DeleteModalGroup } from '../DeleteModalGroup';

export class GroupEdit extends Component {
    state = {
        group: null,
        showPallete: false,
        isModalDeleteShown: false

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
        const copyGroup = { ...group };
        copyGroup.color = chosenColor;
        onUpdateGroup(copyGroup);
        toggleModal();
    }

    onOpenModalDelete = () => {
        var { isModalDeleteShown } = this.state
        this.setState({ isModalDeleteShown: !isModalDeleteShown })
    }


    render() {
        const { onRemoveGroup, group } = this.props;
        const { showPallete } = this.state;
        return (
            <React.Fragment>
                <section className="group-edit flex col ">
                    <span className="delete flex align-center" onClick={this.onOpenModalDelete}>
                        <DeleteIcon
                            className="icon-delete"
                        />
                    Delete Group
                </span>
                    <span className="color flex align-center" onClick={this.togglePallete}>
                        <ColorLens />
                    Change Color
                    {showPallete && <ColorCmp togglePallete={this.togglePallete} changeColor={this.changeColor} />}
                    </span>
                </section>
                {this.state.isModalDeleteShown &&
                    <DeleteModalGroup
                        group={group}
                        onRemoveGroup={onRemoveGroup}
                        onCloseModalDelete={this.onOpenModalDelete}
                    />}
                {this.state.isModalDeleteShown &&
                    <div
                        className="dark-screen-nover "
                    />}
            </React.Fragment>
        )
    }
}
