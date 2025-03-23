'use client'

import { useEffect } from 'react'

const Hello = () => {
  useEffect(() => {
    console.log(
      `\
%cHey there, awesome developer!

If you're digging this code, check out my GitHub repo:

https://github.com/lucaimbalzano/lucaimbalzano.io

and give it a star ⭐
`,
      'font-size: 16px'
    )
  }, [])

  return null
}

export default Hello
