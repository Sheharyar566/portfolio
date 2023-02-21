import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Roboto_Slab, Open_Sans } from '@next/font/google';

const Roboto = Roboto_Slab({
  subsets: ['latin'],
});

const OpenSans = Open_Sans({
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --Roboto: ${Roboto.style.fontFamily};
            --OpenSans: ${OpenSans.style.fontFamily};
          }
        `}
      </style>

      <Component {...pageProps} />
    </>
  );
}
