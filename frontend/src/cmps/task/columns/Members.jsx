import { Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';
import Amit from '../../../assets/styles/img/Amit.jpeg';
import Tair from '../../../assets/styles/img/Tair.jpeg';
import Tamir from '../../../assets/styles/img/Tamir.jpeg';

export function Members({ task }) {
    // function getFirstName(fullName) {
    //     const regex = fullName.replace(/\s.*$/, "").trim();
    //     console.log('regex is:', regex);
    //     return regex
    // }
    return (
        <div>
            <AvatarGroup max={3} className="avatar-container flex center" >
                {/* {task.members.map((member) => {
                    return <Avatar className="avatar" alt={`${member.fullname}`}
                        src={getFirstName(member.fullname)} />

                })} */}
                {/* src={`../../../assets/styles/img/${getFirstName(member.fullname)}.jpeg`} */}
                <Avatar className="avatar" alt="Amit" src={Amit} />
                <Avatar className="avatar" alt="Amit" src={Tamir} />
                <Avatar className="avatar" alt="Amit" src={Tair} />
            </AvatarGroup>
        </div>
    )
}
