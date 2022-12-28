import React from 'react';
import { getCategory } from '../../../services/admin';
import styles from '/styles/Home.module.scss'
import { Svgs } from '../../common/Icons'

function Section2({ category }) {
    const [sticky, setSticky] = React.useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        // console.log(position);
        setSticky(document.getElementById("section2")?.offsetTop - 130 > position);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <>
            <section id="section2" className="container-pl">
                <svg className="fixed bottom-[20px] right-[20px] z-[1010]" width="85" height="70" viewBox="0 0 85 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M56.0229 15.1416C72.027 15.1416 84.9999 25.2357 84.9999 37.6873C84.9999 46.5781 78.3849 54.2659 68.7755 57.9366C68.1051 62.2019 69.4292 66.7143 72.7517 70.0005C66.3746 70.0005 60.9864 65.8295 59.2139 60.0967C58.1658 60.1859 57.1015 60.2333 56.0229 60.2333C40.0198 60.2333 27.0459 50.139 27.0459 37.6874C27.0457 25.2357 40.0199 15.1416 56.0229 15.1416Z" fill="#005974" />
                    <path d="M28.977 0C12.9729 0 0 10.0942 0 22.5457C0 31.4365 6.61502 39.1243 16.2244 42.795C16.8948 47.0603 15.5707 51.5727 12.2482 54.8588C18.6253 54.8588 24.0135 50.6879 25.786 44.9551C26.8341 45.0443 27.8984 45.0917 28.977 45.0917C44.9801 45.0917 57.954 34.9974 57.954 22.5458C57.9542 10.0942 44.98 0 28.977 0Z" fill="#FFD24D" />
                </svg>
                <div className="flex mt-10 items-center relative justify-center">
                    <h2 className="text-[26px] lg:text-[35px] font-bold text-center">خدمات <span className="text-[#00B6BD]">ما</span></h2>
                </div>
                <p className="text-center text-[14px] lg:text-[20px] w-[80%] lg:w-[20%] m-auto mt-1 "><span>مجموعه <span className="text-[#00B6BD]">ما</span> با ارائه خدمات متنوع آماده پاسخگویی ب شماست.</span></p>
                <div className={`${styles.Section2_Items} flex my-10 flex-wrap lg:flex-nowrap justify-center`}>
                    {
                        category?.map(item => (
                            <div key={item?.id} className="w-[40%] lg:w-[25%] h-[200px] mb-10 bg-[#DEEEF2] mx-2 md:mx-5 rounded-[30px] flex flex-col justify-center items-center">
                                {Svgs[item?.svg].svg}
                                <h3 className="mt-9 text-[#000] text-[18px]">{item?.title}</h3>
                            </div>
                        ))
                    }
                </div>
                <div className='text-center mb-2'>
                    <button className='btn px-9  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10'
                    >مشاهده همه</button>
                </div>
            </section>
        </>
    );
}

export default Section2;