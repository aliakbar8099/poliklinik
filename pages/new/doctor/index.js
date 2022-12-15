import React, { useRef } from 'react';
import CardList from '../../../components/common/Cardlist';
import TextInput from '../../../components/common/TextInput';
import SecondLayout from '/layout/second.layout';
import SelectOption from '/components/common/SelectOption';
import { postUpload } from '../../../services/post-api';
import { toast } from 'react-toastify';
import { getCategory, postDoctor, postReserveTime } from '../../../services/admin';
import { useRouter } from 'next/router';
import { Editor } from '@tinymce/tinymce-react';
import { body } from 'express-validator';


const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

let weeks = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه"]

function range(end, start = 0, step = 1) {
    let result = []
    for (let i = start; i <= end; i += step) {
        result.push(i)
    }
    return result
}

function NewDoctor() {
    const router = useRouter();

    let [value, setValue] = React.useState({
        fullname: null,
        img: "/img/se.jpeg",
        lengthJop: null,
        codeJop: null,
        NationalCode: null,
        phoneNumber: null,
        positionsJop: [],
    })
    let [value2, setValue2] = React.useState({
        weekDay: [],
    })
    const [msg, setMsg] = React.useState({
        type: "",
        text: "",
    });
    const [loadingU, setLoadingU] = React.useState(false)
    const [loading, setLoading] = React.useState(false)
    const [loading2, setLoading2] = React.useState(false)
    const [week, setWeek] = React.useState([])
    const [category, setCategory] = React.useState([]);
    const [selectName, setSelectName] = React.useState("");
    const [selectValue, setSelectValue] = React.useState("");
    const editorRef = useRef(null);

    React.useMemo(() => {
        setValue({ ...value, "bio": editorRef.current?.getContent() })
    }, [editorRef.current])


    React.useEffect(() => {
        setLoading(true)
        setLoading2(true)
        getCategory().then(res => {
            setCategory(res.data)
            setLoading(false)
            setLoading2(false)
        })
    }, [])


    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    React.useMemo(() => {
        setValue2({
            ...value2,
            weekDay: week
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [week])

    function getValue(e) {
        setMsg({
            type: "",
            text: "",
        });
        setValue({ ...value, [e.target.name]: e.target.value });
    }

    function getValue2(e, n_week) {
        const upd_obj = week.map(obj => {

            if (obj.number == n_week) {

                obj[e.target.name] = e.target.value

                if (!obj.inputDate || !obj.exportDate) {
                    return 0
                } else {
                    let ddEXP = obj.exportDate.split(":")[1]
                    let ddINP = obj.inputDate.split(":")[1]
                    let hhEXP = obj.exportDate.split(":")[0]
                    let hhINP = obj.inputDate.split(":")[0]

                    let res = ((parseInt(hhEXP) - parseInt(hhINP)) * 60) + (parseInt(ddEXP) - parseInt(ddINP))

                    obj["orderVisit"] = res / parseInt(obj.lengthTimeVisit)

                    document.getElementById("rez" + n_week).value = Math.floor(res / parseInt(obj.lengthTimeVisit))
                    document.getElementById("rez" + n_week).max = Math.floor(res / parseInt(obj.lengthTimeVisit))
                    return obj
                }

            }

            return obj;

        })
        setValue2(upd_obj);
    }

    React.useEffect(() => { }, [week, value.img])

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
        let isWeek = week.find(i => i.number == w)

        if (!isWeek) {
            setWeek([...week, {
                week: weeks[w],
                number: w,
                inputDate: 0,
                exportDate: 0,
                lengthTimeVisit: 15,
                orderVisit: 0,
                listComplete: []
            }].sort((a, b) => (a.number > b.number) ? 1 : ((b.number > a.number) ? -1 : 0)))
            setTimeout(() => {
                window.scrollTo(0, document.getElementById("week_" + w).offsetTop - 400);
            }, 100);

        } else {
            let newList = week.filter(i => i.number != w)
            setWeek(newList)
        }
    }

    async function getFile(e) {
        const file = e.target.files[0];
        const type = e.target.files[0].type.split("/")[1]
        let fileBase4 = await toBase64(file)
        setLoadingU(true)
        postUpload({ file: fileBase4, type }).then(res => {
            setValue({
                ...value,
                img: res.url
            })
            toast.success("با موفقیت آپلود شد")
            setLoadingU(false)
        }).catch((err) => console.log(err))
    }

    function handleSubmit(e) {
        setLoading2(true);
        postDoctor({...value , category: selectValue, bio: editorRef.current.getContent()}).then(res => {
            setTimeout(() => {
                postReserveTime({ weekDay: week, NationalCode: value.NationalCode }).then(res2 => {
                    toast.success("با موفقیت انجام شد")
                    setLoading2(false);
                    router.push("/reserve");
                }).catch(err => {
                    toast.error(err.response.data.msg);
                    setLoading2(false)
                })
            }, 2000);
        }).catch(err => {
            toast.error(err.response.data.msg);
            setLoading2(false)
        })
    }

    function setLimitRezerveHandle(e, n_week) {
        if (parseInt(e.target.value) > parseInt(e.target.max)) {
            toast.error("تعداد رزرو نمی تواند بیشتر از " + e.target.max + " تا باشد ")
            e.target.classList.add("error")
            return false
        }
        e.target.classList.remove("error")
        const upd_obj = week.map(obj => {

            if (obj.number == n_week) {

                obj[e.target.name] = e.target.value

            }
            return obj;

        })
        setValue2(upd_obj);
    }

    console.log(week);


    return (
        <div className='h-[auto] bg-[#f4f8fb] p-4 pb-32'>
            <div className={`bg-[#fff]  w-full p-2 mb-2 rounded-lg mt-20 lg:mt-0 sticky top-[83px] shadow-md z-[1080] ${loading2 ? "skeleton" : ""}`}>
                <article className={`flex anClick  hover-b items-center border  boredr-[#005974] p-3 rounded-xl mb-3 active `}>
                    <div class="avatar">
                        <div class="w-[70px] lg:w-[90px] rounded-xl">
                            <img className='hover:scale-110 transition' src={value["img"]} />
                        </div>
                    </div>
                    <div className='p-1 mr-3 flex justify-center items-start flex-col'>
                        <h3 className='font-bold flex items-center'>
                            <span className="text-[12px] lg:text-[15px]">{value.fullname}</span>
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
                    <button disabled={loading2} onClick={handleSubmit} className='btn hidden lg:flex btn-success w-[auto] lg:w-[150px] text-[14px] mt-auto justify-between text-[#fff] mr-auto my-auto'>
                        {
                            loading2 ?
                                <progress className="progress w-[80px]"></progress>
                                :
                                <>
                                    <span className='text-[9px] lg:text-[12px]'>ثبت پزشک</span>
                                    <svg className="hidden lg:block" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bccac604="" data-v-48b88f42=""><title data-v-bccac604="" data-v-48b88f42="">icon</title> <path d="M5.25 10.3118L0.75 5.81177L5.25 1.31177" stroke="white" stroke-opacity="0.66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-bccac604="" data-v-48b88f42=""></path></svg>
                                </>
                        }
                    </button>
                </article>
            </div>
            <div className='flex flex-wrap items-start bg-[#fff] p-2 rounded-xl shadow-lg mb-[200px]'>
                <div className='w-full text-[20px] font-bold px-3 mt-4'>
                    <h3 className='flex items-center text-[#272727]'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38" fill="#272727"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                        <span className='mt-2 mr-3'>
                            اطلاعات شخصی پزشک
                        </span>
                    </h3>
                </div>
                {
                    loading ?
                        <div className='flex justify-center w-full items-start flex-wrap'>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-20 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                            <div className='p-6 rounded-[12px] w-full md:w-1/2 lg:w-[30%] mt-16 mr-8 skeleton mt-5'></div>
                        </div>
                        :
                        <>
                            <TextInput nameInput="fullname" onGetValue={getValue} calssStyle="w-full md:w-1/2 lg:w-1/3" title="نام و نام خانوادگی پزشک" msg="" />
                            <TextInput nameInput="lengthJop" onGetValue={getValue} type="number" calssStyle="w-full md:w-1/2 lg:w-1/3" title="چند سال سابقه؟" msg="" />
                            <TextInput nameInput="img" onGetValue={getFile} calssStyle="w-full md:w-1/2 lg:w-1/3" type="file" msg="" title={"تصویر پروفایل پزشک" + (loadingU ? " درحال آپلود..." : "")} />
                            <TextInput nameInput="NationalCode" onGetValue={getValue} calssStyle="w-full md:w-1/2 lg:w-1/3" title="کد ملی دکتر" msg="" />
                            <TextInput nameInput="phoneNumber" onGetValue={getValue} type="number" calssStyle="w-full md:w-1/2 lg:w-1/3" title="شماره تماس دکتر" msg="" />
                            <TextInput nameInput="codeJop" onGetValue={getValue} calssStyle="w-full md:w-1/2 lg:w-1/3" title="کد نظام پزشکی" msg="" />
                            <SelectOption {...{ selectValue, setSelectValue, selectName, setSelectName }} title="دسته بندی خدمات" className="w-full md:w-1/2 lg:w-[25%]" titleName="خدمات:" items={category} />
                            <div className='w-full md:w-1/2 lg:w-[25%] mr-auto'>
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
                            <div className='w-full md:w-1/2 lg:w-[50%] m-auto'>
                                <h3 className='mb-4 text-[18px] font-bold'>بیو گرافی</h3>
                                <Editor
                                    id='textEd'
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue={`<p>${value.fullname ? value.fullname : ""} ${value.lengthJop ? " دارای " + value.lengthJop + " سال سابقه " : ""}</p>`}
                                    init={{
                                        height: 500,
                                        menubar: false,
                                        selector: 'textarea',  // change this value according to your HTML
                                        directionality: 'rtl',
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'undo redo | formatselect | ' +
                                            'bold italic backcolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help' + 'ltr rtl',
                                        content_style: 'body { font-family:IRANSans; font-size:1۶px }'
                                    }}
                                />
                            </div>
                            {/* <TextInput nameInput="bio" onGetValue={getValue} type="textarea" rows={4} calssStyle="w-full md:w-1/2 lg:w-1/3" title="بیو گرافی" msg="" /> */}
                            <div className='w-full text-[20px] font-bold px-3 mt-4'>
                                <h3 className='flex items-center text-[#272727]'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="38" viewBox="0 0 24 24" width="38" fill="#272727"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" /></svg>                        <span className='mt-2 mr-3'>
                                        اطلاعات حضور پزشک
                                    </span>
                                </h3>
                            </div>
                            <div className='w-full mt-4 px-3 mr-3 sticky top-[200px] bg-[#fff] mb-10 z-10'>
                                <h4 className='w-full mb-4'>چه روز های هفته حضور دارد؟</h4>
                                <div>
                                    <button onClick={() => handleWeek(5)} className={`bton ${week.find(i => i.number == 5) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px] show_active`}>جمعه</button>
                                    <button onClick={() => handleWeek(6)} className={`bton ${week.find(i => i.number == 6) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px] show_active`}>شنبه</button>
                                    <button onClick={() => handleWeek(0)} className={`bton ${week.find(i => i.number == 0) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px] show_active`}>یک شنبه</button>
                                    <button onClick={() => handleWeek(1)} className={`bton ${week.find(i => i.number == 1) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px] show_active`}>دو شنبه</button>
                                    <button onClick={() => handleWeek(2)} className={`bton ${week.find(i => i.number == 2) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px] show_active`}>سه شنبه</button>
                                    <button onClick={() => handleWeek(3)} className={`bton ${week.find(i => i.number == 3) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px] show_active`}>چهار شنبه</button>
                                    <button onClick={() => handleWeek(4)} className={`bton ${week.find(i => i.number == 4) ? "active" : ""} p-5 m-2 border boredr-1 border-[#0003] rounded-[20px] show_active`}>پنج شنبه</button>
                                </div>
                            </div>

                            <>
                                {
                                    week?.map(({ number, exportDate, inputDate, orderVisit, lengthTimeVisit }, i) => (
                                        <div id={"week_" + number} key={i} className='w-full mt-4 px-3 mr-3 flex items-end flex-wrap border border-2 border-[#234fef48] rounded-xl py-5'>
                                            <div className='mb-5 ml-3 text-[18px] font-bold'>{weeks[number]}</div>
                                            <TextInput onGetValue={(e) => getValue2(e, number)} nameInput="inputDate" inputStyle="text-center" msg="" calssStyle="w-full md:w-1/2 lg:w-1/6" title="از ساعت" type="time" />
                                            <spam className="mb-4">تا</spam>
                                            <TextInput onGetValue={(e) => getValue2(e, number)} nameInput="exportDate" inputStyle="text-center" msg="" calssStyle="w-full md:w-1/2 lg:w-1/6" title="تا ساعت" type="time" />
                                            {/* <TextInput onGetValue={(e) => getValue2(e, number)} nameInput="lengthTimeVisit" inputStyle="text-center" msg="" calssStyle="w-full md:w-1/2 lg:w-[10%]" title="مدت زمان هر رزور(دقیقه)" defaultValue={12} type="number" /> */}
                                            <div dir='ltr' className='w-full md:w-1/2 lg:w-1/3 mx-3'>
                                                <h3 className='text-right mb-5'>مدت زمان هر رزور</h3>
                                                <div className="tooltip w-full" data-tip={lengthTimeVisit}>
                                                    <input defaultValue={15} onChange={(e) => getValue2(e, number)} name="lengthTimeVisit" type="range" min="1" max="60" className="range" step="1" />
                                                </div>
                                                <style jsx>
                                                    {
                                                        `
                                                        .tooltip:after {
                                                            transition:0.1s ease;
                                                            left:${(lengthTimeVisit / 60) * 100}%;
                                                        }
                                                        .tooltip:before {
                                                            transition:0.1s ease;
                                                            left:${(lengthTimeVisit / 60) * 100}% 
                                                        }
                                                        `
                                                    }
                                                </style>
                                                <div className="w-full flex justify-between text-xs">
                                                    {
                                                        range(60, 0, 5).map(i => (
                                                            <span className='w-[1.6%]' key={i}>{i}</span>
                                                        ))

                                                    }
                                                </div>
                                            </div>
                                            <TextInput onInputText={(e) => setLimitRezerveHandle(e, number)} inputId={"rez" + number} nameInput="orderVisit" inputStyle="text-center" msg="" calssStyle="w-full md:w-1/2 lg:w-[15%]" title="تعداد رزرو" type="number" />
                                        </div>
                                    ))
                                }
                            </>
                            <button onClick={handleSubmit} className='btn block lg:hidden btn-success w-full text-[17px] mt-auto justify-between text-[#fff] mt-5'>
                                <span className='text-[16px]'>ثبت پزشک</span>
                                <svg className="hidden lg:block" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bccac604="" data-v-48b88f42=""><title data-v-bccac604="" data-v-48b88f42="">icon</title> <path d="M5.25 10.3118L0.75 5.81177L5.25 1.31177" stroke="white" stroke-opacity="0.66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-bccac604="" data-v-48b88f42=""></path></svg>
                            </button>
                        </>
                }
            </div>
        </div>
    );
}

export default NewDoctor;

NewDoctor.getLayout = (page) => <SecondLayout>{page}</SecondLayout>