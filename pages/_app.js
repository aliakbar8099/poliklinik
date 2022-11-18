import '/styles/globals.scss'
import { AppProps } from 'next/app'
import React from 'react';
import 'animate.css';

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const Layout = Component.Layout || EmptyLayout;
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    // console.log();
    // document.body.addEventListener("loadstart" , ()=> console.log("starting....."))
    // document.body.addEventListener("loadeddata" , ()=> console.log("loaded"))
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        setLoading(false)
      }
    }, 3000);
  }, [])

  return (
    <>
      <div hidden={!loading} className='fixed left-0 top-0 w-full h-[100vh] bg-[#ffffff] z-[10000] flex justify-center flex-col items-center'>
        <video playsinline="" autoplay="autoplay" muted="muted" loop="loop" style={{ width: 120, height: 120 }}>
          <source type="video/mp4" src="/gif/heartbeat-4292852-3562189.mp4" />
        </video>
        <span className=' mb-2 mr-2 text-bold text-[18px]'> پلی کلینیک <span className='text-[20px] font-bold text-[#00B6BD]'>زندگی</span></span>
      </div>
      <div className={loading ? "" : "loaded"}>
        {
          getLayout(
            <Layout>
              <div>
              <Component {...pageProps} />
              </div>
            </Layout>
          )
        }
      </div>
    </>
  )

}

const EmptyLayout = ({ children }) => <>{children}</>;
