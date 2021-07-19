import Navbar from './Navbar';
import Head from 'next/head';

const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <meta keywords={`nextjs` + keywords}></meta>
        <title>Главная страница</title>
      </Head>
      <Navbar />
      <div>{children}</div>
    </>
  );
};

export default MainContainer;
