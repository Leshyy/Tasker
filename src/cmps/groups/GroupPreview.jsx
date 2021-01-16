import { TaskAdd } from '../tasks/TaskAdd'
import { TaskList } from '../tasks/TaskList'
import DeleteIcon from '@material-ui/icons/Delete';
import { GroupEdit } from './GroupEdit';
import { Component } from 'react';
import { render } from '@testing-library/react';
import { ExpandMore } from '@material-ui/icons';


export class GroupPreview extends Component {

    state = {
        showModal: false
    }

    toggleModal = () => {
        var { showModal } = this.state;
        showModal = !showModal;
        this.setState({ showModal });
    }

    render() {
        const { group, onAddTask, onRemoveTask, onUpdateTask, onRemoveGroup, onUpdateGroup } = this.props;
        const { showModal } = this.state;
        return (
            <section className="group-preview">
                <div className="header-group flex">
                    <div className="header-left flex" >
                        <ExpandMore onClick={this.toggleModal} className="btn-expand" />
                        {showModal &&
                            <GroupEdit
                                onRemoveGroup={onRemoveGroup}
                                onUpdateGroup={onUpdateGroup}
                                group={group}
                                toggleModal={this.toggleModal}
                            />}
                        <span
                            className="group-name editable"
                            style={{ color: `${group.color}`, fontWeight: 'bold' }}
                            contentEditable="true"
                            onBlur={(ev) => {
                                console.log(ev.target.innerText);
                                const updatedGroup = { ...group }
                                updatedGroup.name = ev.target.innerText
                                onUpdateGroup(updatedGroup)

                            }}
                            suppressContentEditableWarning={true}
                        >
                            {group.name}
                        </span>
                    </div>
                    <div className="header-right flex">
                        <h3>Members</h3>
                        <h3>Status</h3>
                        <h3>Due-date</h3>
                        <h3>Priority</h3>
                        <h3>Notes</h3>
                    </div>
                </div>
                <TaskList
                    tasks={group.tasks}
                    group={group}
                    onUpdateTask={onUpdateTask}
                    onRemoveTask={onRemoveTask}
                />
                <TaskAdd
                    onAddTask={onAddTask}
                    groupId={group.id}
                />

            </section>
        )
    }
}
