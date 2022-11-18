/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from '/styles/Home.module.scss'

function Section3() {
    return (
        <>
            <section className="container-pl">
                <div className="flex mt-36 justify-center items-center">
                    <h2 className="text-[35px] font-bold">نکات آموزشی</h2>
                </div>
                <p className="text-center text-[20px] m-auto mt-3">
                    <span>با <span className="text-[#00B6BD]">ما</span> در خانه، کمک های اولیه را بیاموزید.</span></p>
                <div className={`${styles.card_section3} flex justify-around items-center my-10 mt-16`}>
                    <div className='min-w-[300px] w-[300px] h-[300px] rounded-[30px] overflow-hidden'>
                        <img src="/img/s1.png" />
                        <p>حمله قلبی</p>
                    </div>
                    <div className='min-w-[300px] w-[300px] h-[300px] rounded-[30px] overflow-hidden'>
                        <img src="/img/s2.png" />
                        <p>شکستگی</p>
                    </div>
                    <div className='min-w-[300px] w-[300px] h-[300px] rounded-[30px] overflow-hidden'>
                        <img src="/img/s3.png" />
                        <p>مار گزیدگی</p>
                    </div>
                </div>
                <div className='text-center mb-2'>
                    <button className='btn px-9  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-20'
                    >مشاهده همه</button>
                </div>
            </section>
        </>
    );
}

export default Section3;