import React,{useState} from 'react'
import {motion} from 'framer-motion'
import { PageWrapper } from '../../components/IntefaceElts'
import { PlayListContents, PlayListWrapper } from './styledStream'
import Player from './components/player'
import PlayListItem from './components/playListItem'

const Imgs = [
    `${process.env.PUBLIC_URL}/img/songs/a1.jpg`,
    `${process.env.PUBLIC_URL}/img/songs/a2.jpg`,
    `${process.env.PUBLIC_URL}/img/songs/a3.jpg`,
    `${process.env.PUBLIC_URL}/img/songs/1.jpg`

]
function Stream() {

    //represente la chanson encours de lecture à remplacer par une valeur venant du backend
    const [Current, setCurrent] = useState(Imgs[0])

    const changeCurrent = (value) => {
        setCurrent(value)
    }
    return (
    <motion.div exit={{ opacity: 0 }}>
        <PageWrapper>
            {/* <h1>De la musique de notre label</h1> */}
            <PlayListWrapper>
                <PlayListContents>
                    {/* ici placé une boucle <plauListItem onclick={()=>changeCureent(index)}/> */}
                    <PlayListItem Item={Imgs[0]} handle={()=>changeCurrent(Imgs[0])} />
                    <PlayListItem Item={Imgs[1]} handle={()=>changeCurrent(Imgs[1])}/>
                    <PlayListItem Item={Imgs[2]} handle={()=>changeCurrent(Imgs[2])}/>
                    <PlayListItem Item={Imgs[3]} handle={()=>changeCurrent(Imgs[3])}/>
                </PlayListContents>
                <Player Current={Current}/>
            </PlayListWrapper>
        </PageWrapper>    
    </motion.div>
    )
}

export default Stream
