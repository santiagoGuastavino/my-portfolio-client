import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Socials from '../components/Socials'
import { useEffect } from 'react'

export default function Home () {
  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_DEFAULT_URL)
      .then(res => res.json())
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Head>
        <title>Santiago Guastavino</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Socials />
    </>
  )
}
