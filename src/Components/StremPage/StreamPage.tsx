import React from 'react';
import style from './StreamPage.module.css'
import AudioBox from "../AudioBox/AudioBox";


type TrackListType = {
    id: number,
    name: string,
    executor: string,
    source: string,
}

type StreamPagePropsType = {
    trackList: Array<TrackListType>
}

const StreamPage: React.FC<StreamPagePropsType> = ({trackList}) => {

    return (
        <div className={style.streamPage}>
            <div className={style.streamPage_header}>
                <span className={style.streamPage_resume}>Resume</span>

                {trackList.map((audio: TrackListType) =>
                    <AudioBox key={audio.id} audio={audio}/>
                )}
            </div>
        </div>)
}

export default StreamPage