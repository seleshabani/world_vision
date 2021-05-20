import React from 'react'
import {motion} from 'framer-motion'

function Artistes() {
    return (
        <motion.div exit={{ opacity: 0 }}>
            <div>
                <h1>Artistes</h1>
            </div>
        </motion.div>
    )
}

export default Artistes
