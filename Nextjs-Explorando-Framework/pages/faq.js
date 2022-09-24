import Link from '../src/components/Link';
import Head from 'next/head';

// export async function getServerSideProps(){
//   console.log('Em modo DEV sempre roda'A cada acesso)
//   console.log('Rodando a cada acesso que você recebe')
export async function getStaticProps() {
  console.log('Em modo DEV sempre roda a cada acesso')
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  
  const faq = await fetch(FAQ_API_URL)
    .then(respostaDoServidor => respostaDoServidor.json())
    .then(res => res);

  return {
    props: {
      qualquerCoisa: 'que eu passar aqui',
      faq
    },
  }
}

export default function FaqPage({faq}) {
  console.log(faq)
  return (
    <div>
      <Head>
        <title>FAQ - Alura Cases Campanha</title>
      </Head>
      <h1>Alura Cases - Páginas de Pergundas FAQ</h1>
      <Link href='/'>Ir para Home</Link>

      <ul>
        {faq.map(item => (
          <li key={item.question}>
            <article>
              <h2>{item.question}</h2>
              <p>{item.answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
