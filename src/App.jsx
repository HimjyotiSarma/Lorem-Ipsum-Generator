import Form from './Form'
import { useEffect, useState } from 'react'
import Paragraph from './Paragraph'
import data from './data'

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])
  const handleCount = (e) => {
    console.log(e.target.value)
    setCount(() => {
      return e.target.value
    })
  }

  const handleParagraph = () => {
    setText(() => {
      const slicedText = data.slice(0, count)
      return slicedText
    })
  }

  useEffect(() => {
    console.log('The Count now is', count)
    console.log(text)
  }, [text])

  return (
    <main className="section-center">
      <h4>tired of boring lorem ipsum?</h4>
      <Form
        count={count}
        handleCount={handleCount}
        handleParagraph={handleParagraph}
      />
      <Paragraph paras={text} />
    </main>
  )
}
export default App
