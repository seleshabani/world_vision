import React from 'react'
import { Link } from 'react-router-dom';
import Hero from '../../components/hero/Hero';
import Nav from '../../components/nav/nav';
import { ContentSection, ContentWraper, PageWrapper,ContentSectionTitle, ContentSectionSongsItems, SongsItem, ContentArtistItems, ArtistItem } from './styledHome';

const Home = () => {
    return (
        <>
            <Nav/>
            <PageWrapper>
                <ContentWraper>
                    <Hero/>
                    <ContentSection>
                        <ContentSectionTitle>
                            <h1>Notre musique</h1>
                            <h2><Link to='/'>Voir tout</Link></h2>
                        </ContentSectionTitle>
                        <ContentSectionSongsItems>
                            <SongsItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/1.jpg`} alt="" />
                                <div className="description">
                                    <h2>lorem ipsum.</h2>
                                    <div className="play">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </div>
                            </SongsItem>
                            <SongsItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/1.jpg`} alt="" />
                                <div className="description">
                                    <h2>lorem ipsum.</h2>
                                    <div className="play">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </div>
                            </SongsItem>
                            <SongsItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/1.jpg`} alt="" />
                                <div className="description">
                                    <h2>lorem ipsum.</h2>
                                    <div className="play">
                                        <i className="fa fa-play"></i>
                                    </div>
                                </div>
                            </SongsItem>
                        </ContentSectionSongsItems>
                    </ContentSection>
                    <ContentSection>
                        <ContentSectionTitle>
                            <h1>Nos artistes</h1>
                            <h2><Link to=''>Voir tout</Link></h2>
                        </ContentSectionTitle>
                        <ContentArtistItems>
                            <ArtistItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/test.png`} alt="" />
                            </ArtistItem>
                            <ArtistItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/test.png`} alt="" />
                            </ArtistItem>
                            <ArtistItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/test.png`} alt="" />
                            </ArtistItem>
                        </ContentArtistItems>
                    </ContentSection>
                </ContentWraper>
            </PageWrapper>
        </>
    )
}
export default Home;