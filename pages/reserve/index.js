import React from 'react';
import SelectOption from '/components/common/SelectOption';
import SecondLayout from '/layout/second.layout';
import styles from "/styles/reserve.module.scss"

function Reserve({ login, setLogin }) {
    return (
        <>
            <main className={styles.main}>
                <article className='flex w-[550px] bg-[#fff] flex-wrap flex-col justify-center items-center'>
                    <div className='flex justify-around w-full items-center'>
                        <SelectOption titleName="خدمات" items={[
                            { value: 0, text: "خدمات 1" },
                            { value: 1, text: "خدمات 2" },
                            { value: 2, text: "خدمات 3" },
                            { value: 3, text: "خدمات 4" },
                        ]} />
                        <SelectOption titleName="پزشک" />
                    </div>
                    <div className='flex justify-around w-full items-center'>
                        <SelectOption titleName="روز" />
                        <SelectOption titleName="ساعت" />
                    </div>
                    <div>
                        <button className='btn px-14 w-full  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10'
                        >رزور</button>
                    </div>
                </article>
            </main>
        </>
    );
}

export default Reserve;

Reserve.getLayout = (page) => <SecondLayout>{page}</SecondLayout>