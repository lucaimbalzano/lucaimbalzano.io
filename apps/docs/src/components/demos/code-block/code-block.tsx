import { CodeBlock } from '@simbashrd/ui'

const CodeBlockDemo = () => {
  return (
    <CodeBlock title='main.js' data-lang='js' figureClassName='w-full max-w-md'>
      <code>console.log('hello world')</code>
    </CodeBlock>
  )
}

export default CodeBlockDemo
