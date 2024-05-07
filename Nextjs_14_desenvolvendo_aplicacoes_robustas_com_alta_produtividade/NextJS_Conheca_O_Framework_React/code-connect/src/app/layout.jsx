import { Prompt } from 'next/font/google'
import { Aside } from '@/components/Aside';
import './globals.css';

export const metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs!",
};

const promptFont = Prompt({
  weight: ['400', '600'],
  subsets: ['latin'],
  display: 'swap'
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={promptFont.className}>
      <body>
        <div className='app-container'>
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
