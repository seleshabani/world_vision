import React from 'react'
import Hero from '../../components/hero/Hero';
import Nav from '../../components/nav/nav';
import { ContentWraper, PageWrapper } from './styledHome';

const Home = () => {
    return (
        <>
            <Nav/>
            <PageWrapper>
                <ContentWraper>
                    <Hero/>
                </ContentWraper>
            </PageWrapper>
        </>
    )
}
export default Home;