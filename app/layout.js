import './_styles/embla.css';
import './globals.css';
import { Orbitron, Jura } from 'next/font/google';

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const jura = Jura({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-par',
});

export const metadata = {
  title: {
    template: 'Linn Johansen | %s',
    default: 'Linn Johansen | Designer & Developer',
  },
  description:
    'Portfolio of Linn Johansen, a web designer & developer specializing in Tailwind CSS, React, Next.js & accessible design. I make performant look pretty.',
  lang: 'en',
};

function RootLayout({ children }) {
  return (
    <html
      lang='en'
      dir='ltr'
      className={`${jura.variable} ${orbitron.variable}`}
    >
      <body className='relative aspect-auto w-full max-w-screen min-h-screen scrollbar-gutter-stable overflow-x-hidden'>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
