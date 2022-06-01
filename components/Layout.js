import  Head  from 'next/head'
import Footer from './Footer'
import Header from './Header'
const Layout = ( { children, tituloPage, contenidoSeo } ) => {
  return (
    <>
        <Head>
          <title>GuitarraApp - {tituloPage}</title>
          <meta name="description" content= { contenidoSeo } />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      <Header/>
      <h2 className='heading'>{tituloPage}</h2>
      {children}
      <Footer/>
    </>
  )
}

export default Layout