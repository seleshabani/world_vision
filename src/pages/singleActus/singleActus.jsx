import React from 'react'
import { PageWrapper } from '../../components/IntefaceElts'
import { NewsContentWrapper, NewsImgWrapper } from './styledSingleActus'
import { motion } from "framer-motion"
const SingleActus = () => {
    return (
        <motion.div exit={{ opacity: 0 }}>
        <NewsImgWrapper>
            <img src={`${process.env.PUBLIC_URL}/img/wv.jpeg`} alt="" />
        </NewsImgWrapper>
        <PageWrapper>
            <NewsContentWrapper>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, at.</h1>
                <div className="content">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis sed dolor quisquam ducimus dolores, maiores totam laboriosam fuga dolore maxime! Consequuntur, dolore nostrum. Cupiditate quisquam itaque ratione praesentium quia, distinctio magni omnis earum reprehenderit! Tempora, consequuntur enim sint in exercitationem perferendis neque et atque veritatis, pariatur similique iusto, provident nostrum? Reprehenderit perferendis quibusdam dolorem quasi at alias quidem? Ut ullam dicta esse vel atque porro, repellendus asperiores beatae deleniti dolorem minima dolorum sit, itaque eius animi delectus! Minima, explicabo similique eius dicta debitis veritatis beatae sequi recusandae deserunt alias expedita error, totam eveniet perferendis dolores accusantium, nam vitae. Ipsam magnam nulla laboriosam quas dignissimos exercitationem! Eos quas asperiores, ipsum nihil libero provident veniam qui consectetur, possimus quaerat distinctio nisi vel nesciunt modi magni est quisquam porro enim. Tempore nemo harum porro, saepe provident, voluptatem maxime dignissimos sint libero expedita earum ex eligendi ut perferendis consequuntur et! Praesentium porro repellat incidunt ipsum voluptatum sunt veniam, numquam atque quae aliquam assumenda sit quos! Voluptatibus laudantium beatae quasi architecto quis quam exercitationem! Fugiat aspernatur soluta nam, sequi laudantium quae reiciendis atque cupiditate fuga similique neque ipsum molestiae animi inventore facilis velit, deleniti laboriosam dignissimos quasi, dolorum consequuntur at suscipit assumenda voluptatem. Aliquam, ratione!
                    </p>
                </div>
            </NewsContentWrapper>
        </PageWrapper>
        </motion.div>
    )
}

export default SingleActus
