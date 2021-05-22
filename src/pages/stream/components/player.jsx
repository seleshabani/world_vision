import React from 'react'
import { useRef,useState } from 'react'
import {StyledPlayer , PlayerActions, PlayerBtnPlay, PlayerBtnsmove, PlayerImg, StyledAudio} from '../styledStream'

const Player = ({Current}) => {
    const playerRef = useRef()
    const [isPlaying, setisPlaying] = useState(false)

    const handlePlay = ()=>{
        if (!isPlaying) {
            setisPlaying(true)
            playerRef.current.play()
        }else{
            setisPlaying(false)
            playerRef.current.pause()
        }
    }
    return (
        <>
            <StyledPlayer>
                    <PlayerImg>
                        <img src={Current} alt="" />
                    </PlayerImg>
                    <PlayerActions>
                        <PlayerBtnsmove>
                            <i className="fa fa-backward"></i>
                        </PlayerBtnsmove>
                        <PlayerBtnPlay onClick={()=>handlePlay()}>
                            {!isPlaying?<i className="fa fa-play"></i>:<i className="fa fa-pause"></i>}
                        </PlayerBtnPlay>
                        <PlayerBtnsmove>
                            <i className="fa fa-forward"></i>
                        </PlayerBtnsmove>
                    </PlayerActions>
                </StyledPlayer>
                <StyledAudio src={`${process.env.PUBLIC_URL}/audio/audio.mpeg`} ref={playerRef}>
                </StyledAudio>
        </>
    )
}

export default Player
