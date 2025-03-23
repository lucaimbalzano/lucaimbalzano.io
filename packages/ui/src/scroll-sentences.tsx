'use client'

import { motion } from 'framer-motion'

type SentenceProps = {
  sentence: string
}

interface ScrollSentencesProps {
  sentence: SentenceProps[] // Array of sentence props
  textSize?: string // Optional textSize prop
}

const ScrollSentences = ({ sentence, textSize = 'text-xl' }: ScrollSentencesProps) => {
  return (
    <div className='flex justify-center bg-transparent px-4 pt-8 md:p-12'>
      <div className='w-[1200px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]'>
        <motion.div
          className='flex flex-none items-center gap-14 whitespace-nowrap pr-14'
          animate={{
            translateX: '-50%'
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop'
          }}
        >
          {sentence.length > 0 &&
            sentence.map((prop, index) => (
              <p key={index} className={`font-rollcage ${textSize}`}>
                {prop.sentence}
              </p>
            ))}
        </motion.div>
      </div>
    </div>
  )
}

export { ScrollSentences }
