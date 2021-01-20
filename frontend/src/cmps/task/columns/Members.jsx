import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import { Component } from 'react';
import Amit from '../../../assets/styles/img/Amit.jpeg';
import Tair from '../../../assets/styles/img/Tair.jpeg';
import Tamir from '../../../assets/styles/img/Tamir.jpeg';

export class Members extends Component {
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

    render() {
        const { task } = this.props;
        const { isOpen } = this.state;
        return (
            <div className="column-members">
                <AvatarGroup max={3} className="avatar-container flex center" onClick={this.toggleMemebers} >
                    {/* {task.members.map((member) => {
                    return <Avatar className="avatar" alt={`${member.fullname}`}
                    src={getFirstName(member.fullname)} />
                    
                })} */}
                    {/* src={`../../../assets/styles/img/${getFirstName(member.fullname)}.jpeg`} */}
                    <Avatar className="avatar" alt="Amit" src={Amit} />
                    <Avatar className="avatar" alt="Amit" src={Tamir} />
                    <Avatar className="avatar" alt="Amit" src={Tair} />
                </AvatarGroup>
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
                                    <Avatar className="avatar" alt={`${member.fullname}`}
                                        src={this.getFirstName(member.fullname)} />
                                    <span className="member-name">{member.fullname}</span>
                                </div>
                            )
                        })}
                        <div>
                            <div className="line"></div>
                            <span className="people">People</span>
                        </div>
                        {task.members.map((member) => {
                            return (
                                <div className="member-card flex align-center" key={member._id}>
                                    <Avatar className="avatar" alt={`${member.fullname}`}
                                        src={this.getFirstName(member.fullname)} />
                                    <span className="member-name">{member.fullname}</span>
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
