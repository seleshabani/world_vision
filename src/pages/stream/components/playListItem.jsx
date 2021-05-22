import React from 'react'
import { StyledPlayListItem, PlayListItemDetail, PlayListItemImg} from '../styledStream'

const PlayListItem = ({Item,handle}) => {
    return (
        <StyledPlayListItem onClick={handle}>
            <PlayListItemImg>
                <img src={Item} alt="" />
            </PlayListItemImg>
            <PlayListItemDetail>
                <h2>un titre de chanson</h2>
                <span>Lorem ipsum dolor sit amet.</span>
            </PlayListItemDetail>
        </StyledPlayListItem>
    )
}

export default PlayListItem
