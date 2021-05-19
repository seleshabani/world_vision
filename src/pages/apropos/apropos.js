import React from 'react'
import { motion } from "framer-motion"

function Apropos() {
    return (
        <motion.div exit={{ opacity: 0 }}>
            <div>
                <h1>a propos</h1>
            </div>
        </motion.div>
    )
}

export default Apropos
