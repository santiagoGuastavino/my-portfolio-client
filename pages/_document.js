import { Html, Head, Main, NextScript } from 'next/document'

export default function Document () {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Santiago Guastavino Portfolio App Application. Full Stack Web Developer, Front End, Back End. Javascript, Node.js, Express.js, React.js, Next.js, React Native, SQL, NoSQL, MySQL, PostgreSQL, MongoDB, Firebase Firestore, Docker, Git, GitHub, LinkedIn, Agile Methodologies, Scrum, Kanban, HTML, CSS, Tailwind CSS, Sass." />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
