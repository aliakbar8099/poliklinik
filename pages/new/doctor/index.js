import React from 'react';
import CardList from '../../../components/common/Cardlist';
import TextInput from '../../../components/common/TextInput';
import SecondLayout from '/layout/second.layout';

function NewDoctor() {
    let [value, setValue] = React.useState({
        name: null,
        img: "/img/de.png",
        lengthJop: null,
        codeJop: null,
        positionsJop: [],
        bio: null,
    })

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

    return (
        <div className='h-[89vh] bg-[#f4f8fb] p-4'>
            <div class="bg-[#fff] w-full p-2 mb-2 rounded-lg mt-20 lg:mt-0">
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
                <TextInput calssStyle="w-full md:w-1/2 lg:w-1/3" title="نام و نام خانوادگی پزشک" msg="" />
                <TextInput type="number" calssStyle="w-full md:w-1/2 lg:w-1/3" title="چند سال سابقه؟" msg="" />
                <TextInput calssStyle="w-full md:w-1/2 lg:w-1/3" type="file" msg="" title="تصویر پروفایل پزشک" />
                <TextInput calssStyle="w-full md:w-1/2 lg:w-1/3" title="کد نظام پزشکی" msg="" />
                <div className='w-full md:w-1/2 lg:w-1/3'>
                    <form onSubmit={onAddbage} className='flex items-end'>
                        <TextInput nameInput="bage" calssStyle="w-full" title="تخصص ها" msg="" />
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
                <TextInput type="textarea" rows={4} calssStyle="w-full md:w-1/2 lg:w-1/3" title="بیو گرافی" msg="" />
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