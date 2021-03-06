import React from 'react';
import style from './ProfileInfo.module.css';
import {ProfileType} from "../ProfileContainer";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

type PropsType = {
    profile: ProfileType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo = (props: PropsType) => {
    // пока профиля нет - верни Preloader
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={style.content}>
            {/*<img*/}
            {/*    src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRIB3QFozh1_t1Kc6YvfKM73Q0aUswu-l3jilKsl2k8UvLyV32u&usqp=CAU'*/}
            {/*    alt="avatar"/>*/}
            <div className={style.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;