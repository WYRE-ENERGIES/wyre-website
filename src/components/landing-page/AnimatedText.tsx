"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedTextProps {
  text: string
  delay?: number
  classNames?: string
}

export default function AnimatedText({ classNames, text, delay = 0 }: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const words = text.split(" ")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 8,
        stiffness: 100,
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      y: 10,
      transition: {
        type: "spring" as const,
        damping: 8,
        stiffness: 100,
        duration: 0.5,
      },
    },
  }

  return (
    <motion.h1
      className={`${classNames}`}
      variants={container}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-[0.25em]" variants={container}>
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span key={letterIndex} className="inline-block" variants={child}>
              {letter}
            </motion.span>
          ))}
        </motion.span>
      ))}
    </motion.h1>
  )
}

