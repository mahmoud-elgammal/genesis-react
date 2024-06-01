import { useState } from 'react'


export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button className="text-white bg-slate-950" onClick={() => setCount((count) => count + 1)}>count is {count}</button>
    </div>
  )
}
