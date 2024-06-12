'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Burger({ isOpen, setIsOpen }) {

    return (
        <motion.button className='flex md:hidden focus:outline-none  flex-col gap-1' onClick={() => setIsOpen(!isOpen)}>
            <motion.span className='block w-6 h-1 bg-white' animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} />
            <motion.span className='block w-6 h-1 bg-white' animate={isOpen ? { opacity: 0 } : { opacity: 1 }} />
            <motion.span className='block w-6 h-1 bg-white' animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} />
        </motion.button>
    )
}