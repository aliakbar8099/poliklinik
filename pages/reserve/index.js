import { useRouter } from 'next/router';
import React from 'react';
import CardList from '../../components/common/Cardlist';
import TabelTime from '../../components/pages/Rezerve/TabelTime';
import BoxJobs from '../../components/pages/Rezerve/BoxJobs';
import { getAllDoctor, getSingleDoctor, getTimeReserve, getTimeReserveComplet } from '../../services/get-api';
import SelectOption from '/components/common/SelectOption';
import SecondLayout from '/layout/second.layout';
import { getCategory } from '/services/admin';
import { postCreateRezerve } from '/services/post-api';
import Router from "next/router";
import TextInput from '../../components/common/TextInput';
import { toast } from 'react-toastify';
import { addRezerveTimeUser } from '../../services/update';

let weeks = ["یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه", "شنبه",]

function Reserve({ data, login, setLogin, className }) {

    const router = useRouter()

    const [value, setValue] = React.useState(null);
    const [change, setChange] = React.useState(null);
    // const [data, setData] = React.useState([])
    const [category, setCategory] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [loading2, setLoading2] = React.useState(false);
    const [loading3, setLoading3] = React.useState(false);
    const [tabletime, setTabelTime] = React.useState(false);
    const [time, setTime] = React.useState(null)
    const [selectName, setSelectName] = React.useState("");
    const [selectValue, setSelectValue] = React.useState("");
    const [user, setUser] = React.useState(null)
    const [rezs, setRezs] = React.useState([])
    const [complete, setComplete] = React.useState([]);
    const [btnCard, setBtnCard] = React.useState("col")


    React.useEffect(() => {
        if (!localStorage.getItem("card_status")) {
            localStorage.setItem("card_status", "col")
        }
        setBtnCard(localStorage.getItem("card_status"))
        setLoading(true)
        setLoading2(true)
        getAllDoctor().then(ress => {
            if(ress.count > 0){
                getSingleDoctor(tabletime.id || ress.data[0]?._id).then(res => {
                    getCategory().then(res2 => {
                        setCategory(res2.data)
                        setLoading(false)
                        setLoading2(false)
                    })
                })
            }
            setValue(ress.data[0])
        })
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    React.useEffect(() => {
        let getUser = JSON.parse(localStorage.getItem("user"))
        setUser(getUser)
        setTabelTime(router.query);
    }, [router.query, value, change])

    function handleClose() {
        setOpen(false)
    }

    function handleClick(item) {
        let is = false
        setLoading2(true)
        getSingleDoctor(item._id).then(res => {
            setValue(res.data)
            setLoading2(false)
            setOpen(true)
            is = true
        })
        return is
    }

    function handleBack() {
        router.back()
        document.body.style.overflow = "auto"
    }

    function handleClick2(Id) {
        if (login) {
            getSingleDoctor(Id).then(res => {
                router.push("?id=" + Id)
                setChange(new Date())
                setValue(res.data)
            })
        }
        else {
            document.getElementById("modalAuth").checked = true
        }
    }

    function getStatus(n, nc, tv) {
        setLoading3(true)
        setTimeout(() => {
            getTimeReserveComplet(n, nc, tv).then(res => {
                document.getElementById("confrimRez").classList.remove("modal-open")
                setComplete(res.data)
                setLoading3(false)
            })
        }, 500);
    }

    function submitReserve(params) {

        let dataUser = {
            fullname: document.getElementsByName("fullname")[0].value,
            phoneNumber: document.getElementsByName("phonenumber")[0].value,
            reason: document.getElementsByName("what")[0].value,
        }

        rezs.obj.complete["user"] = dataUser

        setLoading3(true)
        addRezerveTimeUser(rezs.number, rezs.NativeCode, rezs.obj).then(res => {
            getStatus(rezs.number, rezs.NativeCode, rezs.obj.complete.tiemValue);
            toast.success(" روز " + rezs.obj.complete.week + " " + rezs.obj.complete.date + " " + rezs.obj.complete.time + " رزرو شد ")
        })
    }

    React.useEffect(() => {
        let { category } = router.query

        router.push("?category=" + selectValue)

    }, [selectValue])

    return (

        <>
            <div hidden={!open} onClick={handleClose} className={`bg-[#0003] lg:hidden fixed left-0 top-0 w-full h-full z-[1014] ${className}`}></div>
            <main className={`bg-[#f4f8fb] p-0 lg:p-4  h-[auto] flex items-start  ${tabletime.id ? "table_r" : ""}`}>
                <div id="tabel-j" className='bg-[#fff] shadow-sm rounded-xl m-0 lg:m-2 w-full p-3 mt-20 h-[auto] neumorphism'>
                    <div>
                        <button onClick={handleBack} className='btn btn-ghost bg-[#eee]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    {!tabletime.id ? null : <TabelTime {...{ complete, setComplete }} getStatus={getStatus} setRezs={setRezs} time={time} weeks={weeks} value={value} loading={loading3} setLoading={setLoading3} />}
                </div>
                <div id="box-j" style={{ bottom: open ? 0 : -1500, transition: "0.3s ease" }} className='box-doctor fixed lg:sticky top-[auto]  lg:top-[85px] bottom-0 lg:bottom-[auto] p-2 w-full lg:w-[400px] bg-[#fff] flex-col shadow-sm rounded-[0] rounded-t-[30px] lg:rounded-xl m-0 lg:m-2 z-[1020] flex items-center justify-start h-[80vh] sm:h-[60vh]  lg:h-[85vh] right-0 neumorphism'>
                    <div className='flex justify-end items-center w-full'>
                        <button onClick={handleClose} className='btn btn-ghost block lg:hidden hover:bg-[#0000] text-[#323232]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex items-center  justify-center w-full sm:justify-start lg:flex-col h-full flex-wrap sm:flex-nowrap overflow-auto lg:overflow-hidden '>
                        {
                            loading2 ?
                                <div className='flex justify-center items-center flex-col flex-wrap w-full h-full'>
                                    <div className='w-[150px] h-[150px] skeleton rounded-[14px] mt-2'></div>
                                    <div className='p-2 skeleton w-1/2 m-2 mt-4 rounded-lg'></div>
                                    <div className='p-2 skeleton w-1/3 m-2 mt-2 rounded-lg'></div>
                                    <div className='p-2 skeleton w-[60%] m-2 mt-2 rounded-lg'></div>
                                    <div className='p-3 skeleton w-[20%] m-2 mt-1 rounded-[50px]'></div>
                                    <div className='p-3 skeleton w-[30%] m-2 mt-10 rounded-[50px]'></div>
                                    <div className='p-1 skeleton w-full m-1 mt-1 rounded-lg'></div>
                                    <div className='p-1 skeleton w-full m-1 mt-1 rounded-lg'></div>
                                    <div className='p-1 skeleton w-full m-1 mt-1 rounded-lg'></div>
                                    <div className='p-1 skeleton w-full m-1 mt-1 rounded-lg'></div>
                                    <div className='p-1 skeleton w-full m-1 mt-1 rounded-lg'></div>
                                    <div className='p-1 skeleton w-full m-1 mt-1 rounded-lg'></div>
                                    <div className='p-1 skeleton w-full m-1 mt-1 rounded-lg'></div>
                                    <div className='p-1 skeleton w-full m-1 mt-1 rounded-lg'></div>
                                    <div className='p-5 skeleton w-full m-2 mt-22 rounded-lg mt-auto'></div>
                                </div>
                                :
                                <BoxJobs handleClick={handleClick2} {...value} setTabelTime={setTabelTime} tabletime={tabletime} login={login} />
                        }
                    </div>
                </div>
                <div id="list-j" className='w-full px-0 lg:px-3 h-full'>
                    <div className='bg-[#fff] backdrop-blur-lg shadow-md rounded-xl m-0 lg:m-2 w-full p-3 sticky top-[80px] z-[1012] mb-5 flex justify-center lg:justify-start items-center'>
                        <SelectOption className="w-[150px] lg:w-[250px] text-[12px] lg:text-[16px]" titleName="خدمات:" items={category} {...{ setSelectValue, selectValue, selectName, setSelectName }} />
                        <SelectOption className="w-[150px] lg:w-[250px] text-[12px] lg:text-[16px]" titleName="مرتب سازی:" items={null} />
                        {/* btn cards status */}
                        <button onClick={() => {
                            setBtnCard("col")
                            localStorage.setItem("card_status", "col")
                        }} className={`btn mr-auto btn-ghost ${btnCard == "col" ? "btn-active" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
                                <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
                                <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
                            </svg>
                        </button>
                        <button onClick={() => {
                            setBtnCard("row")
                            localStorage.setItem("card_status", "row")
                        }} className={`btn mr-2 btn-ghost ${btnCard == "row" ? "btn-active" : ""}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grid-fill" viewBox="0 0 16 16">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" />
                            </svg>
                        </button>
                    </div>
                    <div className={`bg-[#fff] shadow-sm rounded-xl m-0 lg:m-2 w-full p-3 mt-20 h-full ${btnCard == "col" ? "" : "col-card"}`}>

                        {
                            !data || router.asPath == "/reserve" ?
                                <div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                    <div className='p-14 skeleton w-full rounded-xl mb-3'></div>
                                </div>
                                : data.length == 0 ?
                                    <div className='flex justify-center items-center text-[24px] h-[80vh] text-[#929292] p-12 border border-2 rounded-3xl border-dashed'>
                                        چیزی پیدا نشده! :(
                                    </div>
                                    :
                                    data?.map(item => (
                                        <CardList active={item._id == value?._id} handleClick2={handleClick2} onClick={() => handleClick(item)} key={item.id} {...item} />
                                    ))
                        }
                    </div>
                </div>
            </main>
            {/* The button to open modal */}
            <div className="modal z-[2022] backdrop-blur-sm " id="confrimRez">
                <div className="modal-box pt-0">
                    <div className="modal-action" onClick={() => document.getElementById("confrimRez").classList.remove("modal-open")}>
                        <div className='flex items-center justify-between w-full'>
                            <a className="btn btn-ghost ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            </a>
                            <div className='flex'>
                                <div className='text-[17px] bton'> دوشنبه ساعت 12:15</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center p-2 alert-s">
                        <svg xmlns="http://www.w3.org/2000/svg" width={23} fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span className='text-[12px] mr-1'>
                            برای تکمیل نوبت مشخصات زیر را  پر کنید
                        </span>
                    </div>
                    <div>
                        <TextInput id="ddd" defaultValueText={user?.fullname} nameInput="fullname" calssStyle="w-full" type="text" msg="" title="نام کامل" placeholder="نام و نام خانوادگی  مراجعه کننده" />
                        <TextInput id="ddd" defaultValueText={user?.phoneNumber} dir="ltr" nameInput="phonenumber" calssStyle="w-full" type="text" msg="" title="تلفن همراه" placeholder="شماره همراه مراجعه کننده" />
                        <TextInput id="ddd" maxText={100} nameInput="what" calssStyle="w-full" type="textarea" msg="" title="علت مراجعه" placeholder="علت مراجعه بنویسید" />
                        <button disabled={loading3} onClick={submitReserve} className='btn w-full btn-success text-[#fff] hover:text-[#242424] mt-5'>
                            {
                                loading3 ?
                                    <>
                                        درحال رزرو کردن...
                                        &nbsp;
                                        <LoadingSvg />
                                    </>
                                    :
                                    <>
                                        تکمیل رزرو
                                        &nbsp;
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                    </>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Reserve;

export async function getServerSideProps(context) {

    const { category } = context.query;

    const dev = process.env.NODE_ENV !== 'production';
    const baseURL = dev ? 'http://localhost:3000/api' : 'https://poliklinik.vercel.app/api';
    // Fetch data from external API
    const res = await fetch(baseURL + "/admin/doctor?category=" + category)
    const response = await res.json()

    // Pass data to the page via props
    return { props: { data: response.data } }
}

Reserve.getLayout = (page) => <SecondLayout>{page}</SecondLayout>


function LoadingSvg() {
    return (
        <svg xlink="http://www.w3.org/1999/xlink" width="70px" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="80" cy="50" r="5" fill="#93dbe9">
                <animate attributeName="cx" values="80;50" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="50;80" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#93dbe9;#689cc5" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
            </circle><circle cx="50" cy="80" r="5" fill="#689cc5">
                <animate attributeName="cx" values="50;20" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="80;50.00000000000001" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#689cc5;#5e6fa3" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
            </circle><circle cx="20" cy="50.00000000000001" r="5" fill="#5e6fa3">
                <animate attributeName="cx" values="20;49.99999999999999" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="50.00000000000001;20" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#5e6fa3;#3b4368" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
            </circle><circle cx="49.99999999999999" cy="20" r="5" fill="#3b4368">
                <animate attributeName="cx" values="49.99999999999999;80" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="20;49.99999999999999" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#3b4368;#93dbe9" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
            </circle>
        </svg>
    )
}