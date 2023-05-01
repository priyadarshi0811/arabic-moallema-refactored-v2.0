import SentenceMaking from '@/components/Modules/models/module2/SentenceExample'
import React from 'react'

const SentencesExamples = () => {
  return (
    <div>
      <SentenceMaking user="student" type="damma" nextM='madd' preM="damma/words-examples" />
    </div>
  )
}

export default SentencesExamples