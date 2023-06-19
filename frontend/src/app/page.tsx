import { GFButton } from '@/components/GFButton';
import styles from './page.module.css'

export default async function Home() {
  const data = await getData()

  return (
    <main className={styles.main}>
      <p>
        {data.title}
      </p>
      <GFButton>Button from chakra</GFButton>
    </main>
  )
}

async function getData() {
  const res = await fetch('http://localhost:3000/message')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}