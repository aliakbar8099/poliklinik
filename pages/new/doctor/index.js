import React from 'react';
import CardList from '../../../components/common/Cardlist';
import TextInput from '../../../components/common/TextInput';
import SecondLayout from '/layout/second.layout';
import SelectOption from '/components/common/SelectOption';

function NewDoctor() {
    let [value, setValue] = React.useState({
        name: null,
        img: "/img/de.png",
        lengthJop: null,
        codeJop: null,
        positionsJop: [],
        bio: null,
    })
    const [msg, setMsg] = React.useState({
        type: "",
        text: "",
    });
    const [week, setWeek] = React.useState([])

    function getValue(e) {
        setMsg({
            type: "",
            text: "",
        });
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    React.useEffect(() => { }, [week])

    function onAddbage(e) {
        e.preventDefault();
        setValue({
            ...value,
            positionsJop: [
                ...value.positionsJop,
                { id: value.positionsJop.length + 1, text: e.target.bage.value }
            ]
        })
        document.querySelector("input[name=bage]").value = ""
    }

    function handleDel(id) {
        let newValue = value.positionsJop.filter(i => i.id != id);

        setValue({
            ...value,
            positionsJop: [...newValue]
        })
    }

    function handleWeek(w) {
        let isWeek = week.find(i => i == w)
        if (typeof isWeek == "undefined") {
            setWeek([...week, w].sort())
        } else {
            let newList = week.filter(i => i != w)
            setWeek(newList)
        }
    }

    return (
        <div className='h-[auto] bg-[#f4f8fb] p-4 pb-32'>
            <div class="bg-[#fff] w-full p-2 mb-2 rounded-lg mt-20 lg:mt-0 sticky top-[83px] shadow-md z-[1010]">
                <article className={`flex anClick hover-b items-center border  boredr-[#005974] p-3 rounded-xl mb-3 active`}>
                    <div class="avatar">
                        <div class="w-[70px] lg:w-[90px] rounded-xl">
                            <img className='hover:scale-110 transition' src={value["img"]} />
                        </div>
                    </div>
                    <div className='p-1 mr-3 flex justify-center items-start flex-col'>
                        <h3 className='font-bold flex items-center'>
                            <span className="text-[12px] lg:text-[15px]">{value.name}</span>
                        </h3>
                        <div>
                            <small hidden={!value["lengthJop"]} className="text-[10px] lg:text-[15px]">{value.lengthJop} سال سابقه</small>
                        </div>
                        <div className='text-center'>
                            {
                                value.positionsJop?.map((position, i) => (
                                    <div key={position.id} className="badge badge-outline mt-1 ml-1 text-[10px]">
                                        {position.text}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button className='btn hidden lg:flex btn-success w-[auto] lg:w-[150px] text-[14px] mt-auto justify-between text-[#fff] mr-auto my-auto'>
                        <span className='text-[9px] lg:text-[12px]'>ثبت پزشک</span>
                        <svg className="hidden lg:block" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bccac604="" data-v-48b88f42=""><title data-v-bccac604="" data-v-48b88f42="">icon</title> <path d="M5.25 10.3118L0.75 5.81177L5.25 1.31177" stroke="white" stroke-opacity="0.66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-bccac604="" data-v-48b88f42=""></path></svg>
                    </button>
                </article>
            </div>
            <div className='flex flex-wrap items-start bg-[#fff] p-2 rounded-xl shadow-lg'>
                <div className='w-full text-[20px] font-bold px-3 mt-4'>
                    <h3 className='flex items-center text-[#272727]'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38" fill="#272727"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        <span className='mt-2 mr-3'>
                            اطلاعات شخصی پزشک
                        </span>
                    </h3>
                </div>
                <TextInput nameInput="name" onGetValue={getValue} calssStyle="w-full md:w-1/2 lg:w-1/3" title="نام و نام خانوادگی پزشک" msg="" />
                <TextInput nameInput="lengthJop" onGetValue={getValue} type="number" calssStyle="w-full md:w-1/2 lg:w-1/3" title="چند سال سابقه؟" msg="" />
                <TextInput nameInput="img" onGetValue={getValue} calssStyle="w-full md:w-1/2 lg:w-1/3" type="file" msg="" title="تصویر پروفایل پزشک" />
                <TextInput nameInput="NationalCode" onGetValue={getValue} calssStyle="w-full md:w-1/2 lg:w-1/3" title="کد ملی دکتر" msg="" />
                <TextInput nameInput="lengthJop" onGetValue={getValue} type="number" calssStyle="w-full md:w-1/2 lg:w-1/3" title="شماره تماس دکتر" msg="" />
                <TextInput nameInput="codeJop" onGetValue={getValue} calssStyle="w-full md:w-1/2 lg:w-1/3" title="کد نظام پزشکی" msg="" />
                <SelectOption title="دسته بندی خدمات" className="w-full md:w-1/2 lg:w-[32%]" titleName="خدمات:" items={[
                    { value: 0, text: "خدمات 1" },
                    { value: 1, text: "خدمات 2" },
                    { value: 2, text: "خدمات 3" },
                    { value: 3, text: "خدمات 4" },
                ]} />
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <form onSubmit={onAddbage} className='flex items-end'>
                        <TextInput onGetValue={getValue} nameInput="bage" calssStyle="w-full" title="تخصص ها" msg="" />
                        <button type='submit' className='btn btn-info mb-2 text-[16px] rounded-[11px]'>+</button>
                    </form>
                    <div className='text-center'>
                        {
                            value.positionsJop?.map((position, i) => (
                                <div key={position.id} className="badge badge-outline mt-1 ml-1 text-[10px] ">
                                    <svg onClick={() => handleDel(position.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block cursor-pointer w-4 h-4 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                    {position.text}
                                </div>
                            ))
                        }
                    </div>
                </div>
                <TextInput nameInput="bio" onGetValue={getValue} type="textarea" rows={4} calssStyle="w-full md:w-1/2 lg:w-1/3" title="بیو گرافی" msg="" />
                <div className='w-full text-[20px] font-bold px-3 mt-4'>
                    <h3 className='flex items-center text-[#272727]'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38" fill="#272727"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" /></svg>                        <span className='mt-2 mr-3'>
                            اطلاعات حضور پزشک
                        </span>
                    </h3>
                </div>
                <div className='w-full mt-4 px-3 mr-3'>
                    <h4 className='w-full mb-4'>چه روز های هفته حضور دارد؟</h4>
                    <div>
                        <button onClick={() => handleWeek(0)} className={`bton ${week.find(i => i == 0) == 0 ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px]`}>جمعه</button>
                        <button onClick={() => handleWeek(1)} className={`bton ${week.find(i => i == 1) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px]`}>شنبه</button>
                        <button onClick={() => handleWeek(2)} className={`bton ${week.find(i => i == 2) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px]`}>یک شنبه</button>
                        <button onClick={() => handleWeek(3)} className={`bton ${week.find(i => i == 3) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px]`}>دو شنبه</button>
                        <button onClick={() => handleWeek(4)} className={`bton ${week.find(i => i == 4) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px]`}>سه شنبه</button>
                        <button onClick={() => handleWeek(5)} className={`bton ${week.find(i => i == 5) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px]`}>چهار شنبه</button>
                        <button onClick={() => handleWeek(6)} className={`bton ${week.find(i => i == 6) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px]`}>پنج شنبه</button>
                    </div>
                </div>
                <div className='w-full mt-4 px-3 mr-3 flex items-end'>
                    <TextInput msg="" calssStyle="w-full md:w-1/2 lg:w-1/4" title="از ساعت" type="time" />
                    <spam className="mb-4">تا</spam>
                    <TextInput msg="" calssStyle="w-full md:w-1/2 lg:w-1/4" title="تا ساعت" type="time" />
                </div>

                <button className='btn block lg:hidden btn-success w-full  text-[17px] mt-auto justify-between text-[#fff] mt-5'>
                    <span className='text-[16px]'>ثبت پزشک</span>
                    <svg className="hidden lg:block" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bccac604="" data-v-48b88f42=""><title data-v-bccac604="" data-v-48b88f42="">icon</title> <path d="M5.25 10.3118L0.75 5.81177L5.25 1.31177" stroke="white" stroke-opacity="0.66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-bccac604="" data-v-48b88f42=""></path></svg>
                </button>
            </div>
        </div>
    );
}

export default NewDoctor;

NewDoctor.getLayout = (page) => <SecondLayout>{page}</SecondLayout>