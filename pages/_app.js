import '/styles/globals.scss'
import '/styles/components.scss'
import { AppProps } from 'next/app'
import React from 'react';
import 'animate.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';

import Router from "next/router";
import ProgressBar from '@badrap/bar-of-progress';
import { ToastContainer } from 'react-toastify';


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  const Layout = Component.Layout || EmptyLayout;
  const [loading, setLoading] = React.useState(false);
  const [login, setLogin] = React.useState(null);
  const [change, setChange] = React.useState(new Date());

  const progress = new ProgressBar({
    size: 5,
    color: "#00B6BD",
    zIndex: 1090,
    className: "bar-of-progress",
    delay: 1,
  });

  Router.events.on("routeChangeStart", progress.start);
  Router.events.on("routeChangeComplete", progress.finish);
  Router.events.on("routeChangeError", progress.finish);

  React.useEffect(() => {
    setLogin(localStorage.getItem("access-token"));
  }, [change])


  return (
    <>

      <div className={loading ? "" : "loaded"}>
        {
          getLayout(
            <Layout>
              <Component setChange={setChange} {...pageProps} login={login} setLogin={setLogin} />
            </Layout>
          )
        }
        <ToastContainer rtl={true} style={{ borderRadius: 8 }} />
      </div>

    </>
  )

}

const EmptyLayout = ({ children }) => <>{children}</>;

function LoadingPage() {
  return (
    <div className='fixed left-0 top-0 w-full h-[100vh] bg-[#ffffff] z-[10000] flex justify-center flex-col items-center'>
      {/* <video playsinline="" autoplay="autoplay" muted="muted" loop="loop" style={{ width: 120, height: 120 }}>
      <source type="video/mp4" src="/gif/heartbeat-4292852-3562189.mp4" />
    </video> */}
      <svg xlink="http://www.w3.org/1999/xlink" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="80" cy="50" r="5" fill="#93dbe9">
          <animate attributeName="cx" values="80;50" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
          <animate attributeName="cy" values="50;80" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
          <animate attributeName="fill" values="#93dbe9;#689cc5" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
        </circle><circle cx="50" cy="80" r="5" fill="#689cc5">
          <animate attributeName="cx" values="50;20" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
          <animate attributeName="cy" values="80;50.00000000000001" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
          <animate attributeName="fill" values="#689cc5;#5e6fa3" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
        </circle><circle cx="20" cy="50.00000000000001" r="5" fill="#5e6fa3">
          <animate attributeName="cx" values="20;49.99999999999999" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
          <animate attributeName="cy" values="50.00000000000001;20" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
          <animate attributeName="fill" values="#5e6fa3;#3b4368" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
        </circle><circle cx="49.99999999999999" cy="20" r="5" fill="#3b4368">
          <animate attributeName="cx" values="49.99999999999999;80" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
          <animate attributeName="cy" values="20;49.99999999999999" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
          <animate attributeName="fill" values="#3b4368;#93dbe9" keyTimes="0;1" dur="0.5847953216374269s" repeatCount="indefinite"></animate>
        </circle>
      </svg>
      <span className=' mb-2 mr-2 text-bold text-[18px]'> پلی کلینیک <span className='text-[20px] font-bold text-[#00B6BD]'>زندگی</span></span>
    </div>
  )
}