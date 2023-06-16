import App from 'next/app';
import '@/styles/globals.css'
import { get } from '@/client/api';
import 'react-toastify/dist/ReactToastify.css';


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  try {
    const header = await get('header');
    const footer = await get('footer');
    return { ...appProps, pageProps: { header, footer } };
  } catch (error) {
    return { ...appProps };
  }
};
