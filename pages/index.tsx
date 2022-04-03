import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid place-content-center min-h-screen">
        <h1 className="text-4xl font-bold">
          Hi 👋
        </h1>
      </main>
    </div>
  )
}
