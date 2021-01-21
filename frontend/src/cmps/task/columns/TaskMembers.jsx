import { Component } from 'react';

import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';



export class TaskMembers extends Component {
    state = {
        isOpen: false,
    }

    toggleMemebers = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    getFirstName = (fullName) => {
        const regex = fullName.replace(/\s.*$/, "").trim();
        return regex
    }

    renderMembers = (members) => {
        if (!members.length) {
            return <Avatar className="avatar" src="/broken-image" />
        }
        return members.map(member => {
            return <Avatar
                key={member._id}
                className="avatar"
                alt={member.fullname}
                src={member.imgUrl}
            />
        })
    }

    render() {
        const { task, boardMembers, onAddMember, onRemoveMember } = this.props;
        const { isOpen } = this.state;
        return (
            <div className="column-members">
                <AvatarGroup max={2} className="avatar-container flex center" onClick={this.toggleMemebers} >
                    {/* {task.members.map(member => {
                        return <Avatar
                            key={member._id}
                            className="avatar"
                            alt={member.fullname}
                            src={member.imgUrl}
                        />
                    })} */}
                    {this.renderMembers(task.members)}
                </AvatarGroup>
                <Avatar style={{ display: "none" }} src="/broken-image.jpg" />
                {isOpen &&
                    <div className="members-list">
                        <input
                            type="text"
                            placeholder="Enter name"
                            autoFocus
                        />
                        {task.members.map((member) => {
                            return (
                                <div className="member-card flex align-center" key={member._id}>
                                    <div className="member-right flex align-center">
                                        <Avatar
                                            className="avatar"
                                            alt={`${member.fullname}`}
                                            src={member.imgUrl}
                                        />
                                        <span className="member-name">{member.fullname}</span>
                                    </div>
                                    <span className="member-btn" onClick={() => {
                                        onRemoveMember(member._id)
                                    }}>&minus;</span>

                                </div>
                            )
                        })}
                        <div>
                            <div className="line"></div>
                            <span className="people">People</span>
                        </div>
                        {boardMembers.map((member) => {
                            return (
                                <div className="member-card flex align-center" key={member._id}>
                                    <div className="member-right flex align-center">
                                        <Avatar
                                            className="avatar"
                                            alt={`${member.fullname}`}
                                            src={member.imgUrl}
                                        />
                                        <span className="member-name">{member.fullname}</span>
                                    </div>
                                    <span className="member-btn" onClick={() => {
                                        onAddMember(member)
                                    }}>&#43;</span>
                                </div>
                            )
                        })}
                    </div>}
                {isOpen &&
                    <div
                        className="screen"
                        onClick={this.toggleMemebers}
                    />}
            </div>
        )
    }
}
