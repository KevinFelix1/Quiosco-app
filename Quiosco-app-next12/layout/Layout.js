import useKiosco from '../hooks/useKiosco';
import Head from 'next/head';
import Modal from 'react-modal';
import { ToastContainer } from 'react-toastify';
import Sidebar from '../components/Sidebar';
import ModalProducto from '../components/ModalProducto';
import Pasos from '../components/Pasos';

import 'react-toastify/dist/ReactToastify.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

export default function Layout({children, pagina}) {
    const { modal } = useKiosco();
    return (
      <>
        <Head>
            <title>{`Cafe - ${pagina}`}</title>
            <meta name="description" content="Quosco Cafeteria" />
        </Head>
        <div className='md:flex'>
            <Sidebar />
            <main className='md:w-4/12 xl:w-3/4 2xl:w-4/5 overflow-y-scroll h-screen'>
              <div className='p-10 mt-10'>
                <Pasos />
                {children}
              </div>
            </main>
        </div>

        {modal && (
          <Modal
            isOpen={ modal }
            style={customStyles}
          >
            <ModalProducto />
          </Modal>
        )}

        <ToastContainer />
      </>
    )
};