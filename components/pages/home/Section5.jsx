/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import SliderSection5 from './SliderSection5';
import styles from '/styles/Home.module.scss'

const comments = [
    {
        name: "حسین",
        text: "دکتر عالی بودن فقط زمان انتظار کمی طولانی تر از حد معمول شد ولی می ارزید.باتشکر",
        AssociateDr: "دکتر فلاچ",
        position: "داخلی",
        color: "#FF734E",
        rate: 3,
    },
    {
        name: "حسین",
        text: "دکتر عالی بودن فقط زمان انتظار کمی طولانی تر از حد معمول شد ولی می ارزید.باتشکر",
        AssociateDr: "دکتر فلاچ",
        position: "داخلی",
        color: "#FCD27D",
        rate: 4
    },
    {
        name: "حسین",
        text: "دکتر عالی بودن فقط زمان انتظار کمی طولانی تر از حد معمول شد ولی می ارزید.باتشکر",
        AssociateDr: "دکتر فلاچ",
        position: "داخلی",
        color: "#ED757A",
        rate: 5
    },
    {
        name: "حسین",
        text: "دکتر عالی بودن فقط زمان انتظار کمی طولانی تر از حد معمول شد ولی می ارزید.باتشکر",
        AssociateDr: "دکتر فلاچ",
        position: "داخلی",
        color: "#0075FF",
        rate: 5
    },
    {
        name: "حسین",
        text: "دکتر عالی بودن فقط زمان انتظار کمی طولانی تر از حد معمول شد ولی می ارزید.باتشکر",
        AssociateDr: "دکتر فلاچ",
        position: "داخلی",
        color: "#8D2DF2",
        rate: 5
    },
    {
        name: "حسین",
        text: "دکتر عالی بودن فقط زمان انتظار کمی طولانی تر از حد معمول شد ولی می ارزید.باتشکر",
        AssociateDr: "دکتر فلاچ",
        position: "داخلی",
        color: "#8D2DF2",
        rate: 5
    },
]

function Section5() {

    return (
        <>
            <section>
                <div className="flex mt-36 justify-center items-center">
                    <h2 className="text-[35px] font-bold mb-28">نظرات کاربران</h2>
                </div>
                <div className='h-[240px] lg:h-[350px] mb-4 overflow-hidden'>
                    <SliderSection5 comments={comments} />
                </div>
                <div className="flex justify-center items-center p-4 pb-10">
                    <button className='btn px-10  text-[18px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-20'
                    >ثبت نظر</button>
                </div>
            </section>
        </>
    );
}

export default Section5;