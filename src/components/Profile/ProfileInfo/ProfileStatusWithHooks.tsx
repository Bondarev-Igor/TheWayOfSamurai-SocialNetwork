import React, {ChangeEvent, useState} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: PropsType) => {

        let [editMode, setEditMode] = useState(false);
        let [status, setStatus] = useState(props.status);

        const activateEditMode = () => {
            setEditMode(true);
        }
        const deactivateEditMode = () => {
            setEditMode(false);
            props.updateStatus(status)
        }
        const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
            setStatus(e.currentTarget.value)
        }

    return (
        <>
            { !editMode &&
                <div>
                    <span onDoubleClick = {activateEditMode}>{props.status || 'No status'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input
                           onChange={onStatusChange}
                           onBlur={deactivateEditMode}
                           autoFocus={true}
                           value={status}/>
                </div>
            }
        </>

    )
}

export default ProfileStatusWithHooks;