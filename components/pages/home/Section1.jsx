/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import SliderMain from './SliderMain';


function Section1({ mainProps }) {
    let texts = []
    let router = useRouter();

    texts = []
    mainProps?.texts?.map(i => {
        texts.push(i.text)
        texts.push(i.time * 1000)
    })

    function handleScroll(e) {
        let st = window.pageYOffset

        let rounded = st / 4
        let scale = 1 - (st / 5) / 100
        document.documentElement.style.setProperty('--rounded', (rounded) + 'px');
        document.documentElement.style.setProperty('--scale', (scale < 0 ? 0 : scale));

    }

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <section id="pageSect1" className="h-[90vh] w-full overflow-hidden relative">
                {/* <img style={position} className="w-full h-full object-cover scale-[1.1]" src="/img/bgsec1.jpg" /> */}
                <SliderMain slider={mainProps?.imgs} mainProps={mainProps} />
                <div
                    className="box_sect1 z-[1032] rounded-[40px] bg-[#e9faffcf] w-[90%] md:w-[60%] lg:w-[466px] h-[auto] absolute top-[50%]
                 right-[50%] lg:right-[80px] translate-y-[-50%] translate-x-[50%] lg:translate-x-[0%] p-6 pt-10">
                    {
                        texts.length == 0 ?
                            "...loading" :
                            <TypeAnimation
                                sequence={texts}
                                speed={44}
                                deletionSpeed={99}
                                wrapper="h1"
                                className='text-[#005873] text-[24px] lg:text-[38px] font-bold'
                                repeat={Infinity}
                            />
                    }
                    <h2 className='text-[20px] lg:text-[28px] text-justify w-[90%] lg:w-[75%] lining-[42px] mt-4'>در پلی کلینیک زندگی در هر زمان،
                        <span className='text-[#00B6BD]'>آنلاین</span> وقت رزرو کنید!</h2>
                    <button onClick={() => router.push("/reserve")} className='btn px-9 text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10'>رزرو نوبت</button>
                </div>
            </section>
        </>
    );
}

export default Section1;