import React from 'react'
import {motion} from 'framer-motion'
import { PageWrapper } from '../../components/IntefaceElts'
import SpringSlider from '../../components/IntefaceElts/Slider'
import { Actuitem, ActusItems, ContentSection, CSectionTitle, SliderArea } from './styledActus';
import { Link } from 'react-router-dom';
// import 'react-slideshow-image/dist/styles.css'

const Images = [
    `${process.env.PUBLIC_URL}/img/artistes/riches.jpg`,
    `${process.env.PUBLIC_URL}/img/artistes/unnamed.jpg`,
    `${process.env.PUBLIC_URL}/img/wv.jpeg`
  ];

function Actus() {
    return (
        <motion.div exit={{ opacity: 0 }}>
            <PageWrapper>
                <SliderArea>
                    <SpringSlider items={Images}/>
                </SliderArea>
                <ContentSection>
                    <ActusItems>
                        <CSectionTitle>
                            News
                        </CSectionTitle>

                        <Actuitem>
                            <div className="img">
                                <img src={`${process.env.PUBLIC_URL}/img/songs/1.jpg`} alt="" />
                            </div>
                            <div className="content">
                                <h2>
                                <Link to="/single">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolore?
                                </Link>
                                </h2>
                            </div>
                        </Actuitem>
                        <Actuitem>
                            <div className="img">
                                <img src={`${process.env.PUBLIC_URL}/img/songs/1.jpg`} alt="" />
                            </div>
                            <div className="content">
                                <h2>
                                <Link to="/single">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, dolore?
                                </Link>
                                </h2>
                            </div>
                        </Actuitem>
                    </ActusItems>
                </ContentSection>
            </PageWrapper>
        </motion.div>
    )
}

export default Actus
