/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Section1() {
    let router = useRouter();
    const [position , setPosition] = React.useState({
        position:"relative",
        left:0,
        top:0,
        transition:"0.8s"
    });

    const handleMouseMove = (e) => {
        setPosition({
            ...position,
            left:-e.nativeEvent.offsetX / 20,
            top:e.nativeEvent.offsetY / 20
        })
    }

    return (
        <>
            <section onMouseMove={handleMouseMove} className="h-[524px] w-full overflow-hidden  rounded-b-[20px] lg:rounded-b-[100px] relative">
                <img style={position} className="w-full h-full object-cover scale-[1.1]" src="/img/bgsec1.jpg" />
                <div
                    className="box_sect1 rounded-[40px] bg-[#E9FAFF] w-[90%] md:w-[60%] lg:w-[466px] h-[auto] absolute top-[50%]
                 right-[50%] lg:right-[80px] translate-y-[-50%] translate-x-[50%] lg:translate-x-[0%] p-6 pt-10">
                    <TypeAnimation
                        sequence={['نوبت دهی آنلاین', 3000, '']}
                        speed={44}
                        deletionSpeed={99}
                        wrapper="h1"
                        className='text-[#005873] text-[24px] lg:text-[38px] font-bold'
                        repeat={Infinity}
                    />
                    <h2 className='text-[20px] lg:text-[28px] text-justify w-[90%] lg:w-[75%] lining-[42px] mt-4'>در پلی کلینیک زندگی در هر زمان،
                        <span className='text-[#00B6BD]'>آنلاین</span> وقت رزرو کنید!</h2>
                    <button onClick={()=> router.push("/reserve")} className='btn px-9 text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10'>رزرو نوبت</button>    
                </div>
            </section>
        </>
    );
}

export default Section1;