'use client';
import { useState } from "react";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";
import { QuioscoProvider } from '@/context/QuioscoProvider';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { Inter } from 'next/font/google';
import Pasos from "@/components/Pasos";
import Sidebar from "@/components/Sidebar";
import ModalProducto from "@/components/ModalProducto";


const inter = Inter({ subsets: ['latin'] });

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

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const [modal, setModal] = useState(false)

  const handleChangeModal = () => {
    setModal(!modal);
  };

  return (
      <html lang="en">
        <body className={inter.className}>
          <QuioscoProvider
            modal={modal}
            setModal={setModal}
            handleChangeModal={handleChangeModal}
          >
            <div id="__next">
              <div className='md:flex'>
                {pathname === '/' || pathname === '/resumen' || pathname === '/total' ? (
                  <>
                    <Sidebar />
                    <main className='md:w-4/12 xl:w-3/4 2xl:w-4/5 overflow-y-scroll h-screen'>
                        <div className='p-10 mt-10'>
                            <Pasos />
                            {children}
                        </div>
                    </main>
                  </>
                ) : (
                  <>
                    <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 py-5">
                        <Image
                            width={300}
                            height={100}
                            src="/assets/img/logo.svg"
                            alt="imagen logotipo"
                        />
                    </aside>
                    <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
                        <div className="p-10">
                            {children}
                        </div>
                    </main>
                  </>
                )}
                  
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
            </div>
          </QuioscoProvider>
        </body>
      </html>
  );
};
