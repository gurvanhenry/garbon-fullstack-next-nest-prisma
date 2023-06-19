import styles from './page.module.css'

export default async function Home() {
  const data = await getData()

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcom to ... {data.title}
        </p>
      </div>
    </main>
  )
}

async function getData() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const res = await fetch('http://localhost:3000/message')
  console.log('res',res);
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}