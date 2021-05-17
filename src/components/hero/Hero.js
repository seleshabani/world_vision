import React from 'react'
import { Button } from '../IntefaceElts'
import { HeroAction, HeroImg, HeroWrapper } from './StyledHero'

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroAction>
                <h1>Ramener la musique en vie.</h1>
                <h2>Obtenez votre vaccin musical</h2>
                <Button bgck='black'>
                    Nous rejoindre
                </Button>
            </HeroAction>
            <HeroImg>
                <img src={`${process.env.PUBLIC_URL}/img/z1.jpg`} alt=''/>
            </HeroImg>
        </HeroWrapper>
    )
}
export default Hero
