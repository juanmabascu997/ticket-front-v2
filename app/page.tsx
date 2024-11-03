import { SessionProvider } from 'next-auth/react';
import 'tailwindcss/tailwind.css';
import './index.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
