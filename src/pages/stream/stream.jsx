import React from 'react'
import {motion} from 'framer-motion'
import { PageWrapper } from '../../components/IntefaceElts'
import { PlayListContents, PlayListItem, PlayListItemDetail, PlayListItemImg, PlayListWrapper } from './styledStream'
import Player from './components/player'

function Stream() {
    return (
    <motion.div exit={{ opacity: 0 }}>
        <PageWrapper>
            {/* <h1>De la musique de notre label</h1> */}
            <PlayListWrapper>
                <PlayListContents>
                    <PlayListItem>
                        <PlayListItemImg>
                            <img src={`${process.env.PUBLIC_URL}/img/songs/a1.jpg`} alt="" />
                        </PlayListItemImg>
                        <PlayListItemDetail>
                            <h2>un titre de chanson</h2>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </PlayListItemDetail>
                    </PlayListItem>
                    <PlayListItem>
                        <PlayListItemImg>
                            <img src={`${process.env.PUBLIC_URL}/img/songs/a2.jpg`} alt="" />
                        </PlayListItemImg>
                        <PlayListItemDetail>
                            <h2>un titre de chanson</h2>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </PlayListItemDetail>
                    </PlayListItem>
                    <PlayListItem>
                        <PlayListItemImg>
                            <img src={`${process.env.PUBLIC_URL}/img/songs/a3.jpg`} alt="" />
                        </PlayListItemImg>
                        <PlayListItemDetail>
                            <h2>un titre de chanson</h2>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </PlayListItemDetail>
                    </PlayListItem>
                    <PlayListItem>
                        <PlayListItemImg>
                            <img src={`${process.env.PUBLIC_URL}/img/songs/a3.jpg`} alt="" />
                        </PlayListItemImg>
                        <PlayListItemDetail>
                            <h2>un titre de chanson</h2>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </PlayListItemDetail>
                    </PlayListItem>
                </PlayListContents>
                <Player/>
            </PlayListWrapper>
        </PageWrapper>    
    </motion.div>
    )
}

export default Stream
