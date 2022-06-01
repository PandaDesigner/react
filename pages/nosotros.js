import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
    <div>
        <Layout 
        tituloPage = "Nosotros"
        contenidoSeo= "desde el contenido del index"
        >
          <main className='contenedor'>
            <div className={styles.contenido}>
            <Image layout='responsive' width={600} height={450} src="/img/nosotros.jpg" alt='Imagen de nosotros' />
              <div >
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nisl et risus tincidunt varius nec vel felis. Nullam non lacus eget neque tempor finibus. Mauris et lectus vel risus posuere iaculis sed at lorem. Quisque luctus mi vitae mi gravida, eget vulputate lacus gravida. Aliquam ornare elementum tincidunt. 
                </p>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et nisl et risus tincidunt varius nec vel felis. Nullam non lacus eget neque tempor finibus. Mauris et lectus vel risus posuere iaculis sed at lorem. Quisque luctus mi vitae mi gravida, eget vulputate lacus gravida. Aliquam ornare elementum tincidunt. Vestibulum tempus, nibh vitae pulvinar imperdiet, urna mi fringilla erat, vitae tempor augue elit in eros. Nam scelerisque porttitor tortor vitae pharetra. Integer eu ex at metus porttitor hendrerit nec tempor mauris. Mauris a arcu porta nunc consequat consequat.
                </p>
              </div>
            </div>
          </main>

        </Layout>
    </div>
  )
}

export default Nosotros