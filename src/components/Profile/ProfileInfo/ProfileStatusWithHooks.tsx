import React, {ChangeEvent} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

       let [editMode, setEditMode]= useState(false)
       let [status, setStatus] = useState(props.status)

       useEffect( () => {
            setStatus(props.status)
       }, [props.status]
       )

       const activateEditMode = () => {
        setEditMode(true)
    }
      
        const  deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

         const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <>  {!editMode &&
                    <div>
                        <span title={'Double click for status change'} onDoubleClick={activateEditMode} >{props.status || '-----'}</span>
                    </div>
                }
                {editMode &&
                    <div >
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} 
                        value={status}/>
                    </div>
                }
            </>
        )
    }

export default ProfileStatusWithHooks;