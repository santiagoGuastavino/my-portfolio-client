import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Contact from '../components/Contact'
import Socials from '../components/Socials'

export default function Home () {
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
