import { useState } from 'react'
import './App.css';
import WeatherCard from './components/weather-card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <WeatherCard />
      </div>
    </>
  )
}

export default App
