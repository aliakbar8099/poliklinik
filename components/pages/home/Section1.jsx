/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { TypeAnimation } from 'react-type-animation';

function Section1() {
    return (
        <>
            <section className="h-[524px] w-full overflow-hidden rounded-b-[100px] relative">
                <img className="w-full h-full object-cover" src="/img/bgsec1.jpg" />
                <div
                    className="box_sect1 rounded-[40px] bg-[#E9FAFF] w-[466px] h-[331px] absolute top-[50%]
                 right-[80px] translate-y-[-50%] p-6 pt-10">
                    <TypeAnimation
                        sequence={['نوبت دهی آنلاین', 3000, '']}
                        speed={44}
                        deletionSpeed={99}
                        wrapper="h1"
                        className='text-[#005873] text-[38px] font-bold'
                        repeat={Infinity}
                    />
                    <h2 className='text-[28px] text-justify w-[75%] lining-[42px] mt-4'>در پلی کلینیک زندگی در هر زمان،
                        <span className='text-[#00B6BD]'>آنلاین</span> وقت رزرو کنید!</h2>
                    <button className='btn px-9 text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10'>رزرو نوبت</button>    
                </div>
            </section>
        </>
    );
}

export default Section1;