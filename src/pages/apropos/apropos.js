import React from 'react'
import { motion } from "framer-motion"
import { PageWrapper } from '../../components/IntefaceElts'

function Apropos() {
    return (
        <motion.div exit={{ opacity: 0 }}>
            <PageWrapper>
                <h1>Nous sommes un label de musique</h1>
            </PageWrapper>
        </motion.div>
    )
}

export default Apropos
