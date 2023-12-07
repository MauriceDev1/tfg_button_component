import { useState } from 'react'
import Button from './components/Button'

function App() {
  const data = [
    {
      id: 1,
      title: 'Button 1',
      link: '',
      color:'purple'
    },
    {
      id: 2,
      title: 'Button 2',
      link: '',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Button 3',
      link: '',
      color: 'red'
    },
  ]
  return (
    <div class="w-full">
      <div class="w-10/12 m-auto flex gap-3 py-3">
        {data.map(d =>
          <Button 
            key={d.id}
            title={d.title}
            link={d.link}
            color={d.color}
          />
        )}
      </div>
    </div>
  )
}

export default App
