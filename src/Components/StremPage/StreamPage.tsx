import Player from 'Components/Player/Player';
import React, {useContext, useEffect, useRef, useState} from 'react';
import style from './StreamPage.module.css'
import AudioBox from "../AudioBox/AudioBox";
import {Context} from "../../App";

export type TrackListType = {
    id: number,
    name: string,
    executor: string,
    source: string,
}

type StreamPagePropsType = {
    trackList: Array<TrackListType>
}

const StreamPage: React.FC<StreamPagePropsType> = ({trackList}) => {
    // @ts-ignore
    const {play, currentAudioURL} = useContext(Context);

    return (
        <div className={style.streamPage}>
            <div className={style.streamPage_header}>
                <span className={style.streamPage_resume}>Resume</span>

                {trackList.map((audio: TrackListType) =>
                    <div key={audio.id}>
                        <AudioBox audio={audio}/>
                    </div>
                )}
            </div>
        </div>)
}

export default StreamPage