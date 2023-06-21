import Link from "next/link"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div style={{ margin: 30 }}>
        <div>🏠 <Link href="/">garbonfact</Link> 🏠</div>
        <div style={{ borderColor: "#AA4436", borderWidth: 1, borderStyle: 'solid', padding: 5, marginTop: 10, marginBottom: 10 }}>
          {children}
        </div>
        <div>🍀</div>
      </div>
    </>
  )
};
