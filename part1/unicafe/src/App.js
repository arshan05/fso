import { useState } from 'react'
import Statistics from './components/Statistics'
import Button from './components/Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
      setGood(good+1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad+1)
  }


  return (
    <div>
      <h1>give feedback</h1>
      <Button text = 'good' clickEvent={handleGood}/>
      <Button text = 'neutral' clickEvent={handleNeutral}/>
      <Button text = 'bad' clickEvent={handleBad}/>
      
      <h1>statistics</h1>
      <Statistics good = {good} neutral = {neutral} bad = {bad} />
    </div>
  )
}

export default App