import { useId } from 'react'

export default function Home({}) {
  useId() // Throws an error

  return <div></div>
}
