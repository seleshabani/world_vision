import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import Hero from '../../components/hero/Hero';
import { ContentSection, ContentWraper,ContentSectionTitle, ContentSectionSongsItems, SongsItem, ContentArtistItems, ArtistItem, Testimonials, TestimonialsImg, TestimonialsContent, TestimonialsItem, TestimonialsAction } from './styledHome';
import { PageWrapper } from '../../components/IntefaceElts';

const Home = () => {
    return (
        <motion.div exit={{ opacity: 0 }}>
            <PageWrapper>
                <ContentWraper>
                    <Hero/>
                    <ContentSection>
                        <ContentSectionTitle>
                            <h1>Notre musique</h1>
                            <h2><Link to='/streams'>Voir tout</Link></h2>
                        </ContentSectionTitle>
                        <ContentSectionSongsItems>
                            <SongsItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/a1.jpg`} alt="" />
                                <div className="description">
                                    <h2>lorem ipsum.</h2>
                                    <div className="play">
                                        <Link to="/streams">
                                            <i className="fa fa-play"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SongsItem>
                            <SongsItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/a2.jpg`} alt="" />
                                <div className="description">
                                    <h2>lorem ipsum.</h2>
                                    <div className="play">
                                        <Link to="/streams">
                                            <i className="fa fa-play"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SongsItem>
                            <SongsItem>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/a3.jpg`} alt="" />
                                <div className="description">
                                    <h2>lorem ipsum.</h2>
                                    <div className="play">
                                        <Link to="/streams">
                                            <i className="fa fa-play"></i>
                                        </Link>
                                    </div>
                                </div>
                            </SongsItem>
                        </ContentSectionSongsItems>
                    </ContentSection>
                    <ContentSection>
                        <ContentSectionTitle>
                            <h1>Nos artistes</h1>
                            <h2><Link to='/artistes'>Voir tout</Link></h2>
                        </ContentSectionTitle>
                        <ContentArtistItems>
                            <ArtistItem>
                                <img src={`${process.env.PUBLIC_URL}/img/artistes/fally.jpg`} alt="" />
                            </ArtistItem>
                            <ArtistItem>
                                <img src={`${process.env.PUBLIC_URL}/img/artistes/inconnu1.jpg`} alt="" />
                            </ArtistItem>
                            <ArtistItem>
                                <img src={`${process.env.PUBLIC_URL}/img/artistes/wizkid.png`} alt="" />
                            </ArtistItem>
                        </ContentArtistItems>
                    </ContentSection>
                    <Testimonials>
                        <TestimonialsAction>
                            <i className="fa fa-caret-left"></i>
                        </TestimonialsAction>
                        <TestimonialsItem>
                            <TestimonialsImg>
                                <img src={`${process.env.PUBLIC_URL}/img/songs/test.png`} alt="" />
                            </TestimonialsImg>
                            <TestimonialsContent>
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                                <cite>
                                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis magnam nostrum iure, ipsum tempore tenetur consequuntur temporibus, harum consequatur nam ullam, illum velit eaque similique aperiam doloribus ad voluptates repellendus doloremque. Voluptas minus, quaerat nam maxime, magni esse dicta maiores et quasi ratione nulla magnam quos corrupti in! Deserunt perferendis accusantium commodi voluptates sequi cumque atque iure, rerum sapiente placeat magnam consequuntur saepe est maiores enim quia eligendi nemo expedita blanditiis distinctio sint quos officia vero iste. A velit facere aliquam quas ipsa dicta, non delectus, fugit expedita mollitia deleniti sed error odio temporibus? Ipsum nisi rem possimus recusandae optio labore cupiditate reiciendis reprehenderit harum adipisci molestiae tempora quisquam, accusantium odio! Eligendi."
                                </cite>
                            </TestimonialsContent>
                        </TestimonialsItem>
                        <TestimonialsAction>
                            <i className="fa fa-caret-right"></i>
                        </TestimonialsAction>
                    </Testimonials>
                </ContentWraper>
            </PageWrapper>
        </motion.div>
    )
}
export default Home;