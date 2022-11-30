import React from 'react';
import CardList from '../../components/common/Cardlist';
import BoxJobs from '../../components/pages/Rezerve/BoxJobs';
import SelectOption from '/components/common/SelectOption';
import SecondLayout from '/layout/second.layout';
import styles from "/styles/reserve.module.scss"

function Reserve({ login, setLogin, className }) {
    const [value, setValue] = React.useState(datas[0]);
    const [open, setOpen] = React.useState(false);

    function hamdleClose() {
        setOpen(false)
    }

    function handleClick(item) {
        setValue(item)
        setOpen(true)
    }

    return (
        <>
            <div hidden={!open} onClick={hamdleClose} className={`bg-[#0003] lg:hidden fixed left-0 top-0 w-full h-screen z-[1014] ${className}`}></div>
            <main className="bg-[#f4f8fb] p-0 lg:p-4 h-[auto] flex items-start w-full">
                <div style={{ bottom: open ? 0 : -1500, transition: "0.3s ease" }} className='box-doctor fixed lg:sticky top-[auto]  lg:top-[85px] bottom-0 lg:bottom-[auto] p-2 w-full lg:w-[400px] bg-[#fff] flex-col shadow-sm rounded-[0] rounded-t-[30px] lg:rounded-xl m-0 lg:m-2 z-[1020] flex items-center justify-start h-[80vh] sm:h-[60vh]  lg:h-[85vh] right-0'>
                    <div className='flex justify-end items-center w-full'>
                        <button onClick={hamdleClose} className='btn btn-ghost block lg:hidden hover:bg-[#0000] text-[#323232]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex items-center justify-center sm:justify-start lg:flex-col h-full flex-wrap sm:flex-nowrap overflow-auto lg:overflow-hidden'>
                        <BoxJobs {...value} />
                    </div>
                </div>
                <div className='w-full px-0 lg:px-3'>
                    <div className='bg-[#fff] backdrop-blur-lg shadow-md rounded-xl m-0 lg:m-2 w-full p-3 sticky top-[80px] z-[1012] mb-5 flex justify-center lg:justify-start items-center'>
                        <SelectOption className="w-[150px] lg:w-[250px] text-[12px] lg:text-[16px]" titleName="خدمات:" items={[
                            { value: 0, text: "خدمات 1" },
                            { value: 1, text: "خدمات 2" },
                            { value: 2, text: "خدمات 3" },
                            { value: 3, text: "خدمات 4" },
                        ]} />
                        <SelectOption className="w-[150px] lg:w-[250px] text-[12px] lg:text-[16px]" titleName="مرتب سازی:" items={[
                            { value: 0, text: "پرسابقه ترین" },
                            { value: 1, text: "محبوب ترین" },
                            { value: 2, text: "خدمات 3" },
                            { value: 3, text: "خدمات 4" },
                        ]} />
                    </div>
                    <div className='bg-[#fff] shadow-sm rounded-xl m-0 lg:m-2 w-full p-3 mt-20'>
                        {
                            datas?.map(item => (
                                <CardList active={item.id == value.id} onClick={() => handleClick(item)} key={item.id} {...item} />
                            ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default Reserve;

let datas = [
    { id: 1, name: "مبین جبل پیما", img: "./img/staff/a5.png", rank: 50, lengthJop: 5, codeJop: "ت - 4477", positionsJop: ["مشاور خانواده", "روانشناس بالینی"], bio: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای" },
    { id: 2, name: "رضا علی پور", img: "./img/staff/a3.png", rank: 10, lengthJop: 5, codeJop: "ت - 4477", positionsJop: ["مشاور خانواده", "روانشناس بالینی"], bio: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای" },
    { id: 3, name: "دکتر مهسا کرمی", img: "./img/staff/a1.png", rank: 80, lengthJop: 5, codeJop: "ت - 4477", positionsJop: ["مشاور خانواده", "روانشناس بالینی"], bio: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای" },
    { id: 4, name: "دکتر امین زارع", img: "./img/staff/a2.png", rank: 20, lengthJop: 5, codeJop: "ت - 4477", positionsJop: ["مشاور خانواده", "روانشناس بالینی"], bio: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای" },
    { id: 5, name: "دکتر فاطمه رضایی", img: "./img/staff/a1.png", rank: 50, lengthJop: 5, codeJop: "ت - 4477", positionsJop: ["مشاور خانواده", "روانشناس بالینی"], bio: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای" },
    { id: 6, name: "دکتر علی اکبر نبی زاده", img: "./img/staff/a5.png", rank: 10, lengthJop: 5, codeJop: "ت - 4477", positionsJop: ["مشاور خانواده", "روانشناس بالینی"], bio: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای" },
]

Reserve.getLayout = (page) => <SecondLayout>{page}</SecondLayout>