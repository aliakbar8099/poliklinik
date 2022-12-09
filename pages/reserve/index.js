import { useRouter } from 'next/router';
import React from 'react';
import CardList from '../../components/common/Cardlist';
import TabelTime from '../../components/common/TabelTime';
import BoxJobs from '../../components/pages/Rezerve/BoxJobs';
import { getAllDoctor, getSingleDoctor, getTimeReserve } from '../../services/get-api';
import SelectOption from '/components/common/SelectOption';
import SecondLayout from '/layout/second.layout';
import { getCategory } from '/services/admin';
import Router from "next/router";

let weeks = ["جمعه", "شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه"]

function Reserve({ login, setLogin, className }) {
    const router = useRouter()

    const [value, setValue] = React.useState(null);
    const [change, setChange] = React.useState(null);
    const [data, setData] = React.useState([])
    const [category, setCategory] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [loading2, setLoading2] = React.useState(false);
    const [tabletime, setTabelTime] = React.useState(false);
    const [time, setTime] = React.useState(null)
    const [selectName, setSelectName] = React.useState("");
    const [selectValue, setSelectValue] = React.useState("");

    React.useEffect(() => {
        setLoading(true)
        setLoading2(true)
        getAllDoctor().then(ress => {
            setData(ress.data)
            console.log(ress.data);
            getSingleDoctor(tabletime.id || ress.data[0]._id).then(res => {
                getCategory().then(res2 => {
                    setCategory(res2.data)
                    setValue(res.data)
                    setLoading(false)
                    setLoading2(false)
                })
            })
        })
        return () => {
            document.body.style.overflow = "auto"
        }
    }, [])

    React.useEffect(() => {
        setTabelTime(router.query);
    }, [router.query, value , change])


    function handleClose() {
        setOpen(false)
    }

    function handleClick(item) {
        setLoading2(true)
        getSingleDoctor(item._id).then(res => {
            setValue(res.data)
            setLoading2(false)
            setOpen(true)
        })
    }

    function handleBack() {
        router.back()
        document.body.style.overflow = "auto"
    }

    function handleClick2(Id) {
        if (login) {
            router.push("?id=" + Id)
            document.body.style.overflow = "hidden"
            setOpen(false)
            setChange(new Date())
        }
        else {
            document.getElementById("modalAuth").checked = true
        }
    }



    return (

        <>
            <div hidden={!open} onClick={handleClose} className={`bg-[#0003] lg:hidden fixed left-0 top-0 w-full h-full z-[1014] ${className}`}></div>
            <main className={`bg-[#f4f8fb] p-0 lg:p-4  h-[auto] flex items-start h-full ${tabletime.id ? "table_r" : ""}`}>
                    <div id="tabel-j" className='bg-[#fff] shadow-sm rounded-xl m-0 lg:m-2 w-full p-3 mt-20 h-[85vh]'>
                        <div>
                            <button onClick={handleBack} className='btn btn-ghost bg-[#eee]'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                </svg>
                            </button>
                        </div>
                       {!tabletime.id ? null : <TabelTime time={time} weeks={weeks} value={value} />} 
                    </div>
                <div id="box-j" style={{ bottom: open ? 0 : -1500, transition: "0.3s ease" }} className='box-doctor fixed lg:sticky top-[auto]  lg:top-[85px] bottom-0 lg:bottom-[auto] p-2 w-full lg:w-[400px] bg-[#fff] flex-col shadow-sm rounded-[0] rounded-t-[30px] lg:rounded-xl m-0 lg:m-2 z-[1020] flex items-center justify-start h-[80vh] sm:h-[60vh]  lg:h-[85vh] right-0'>
                    <div className='flex justify-end items-center w-full'>
                        <button onClick={handleClose} className='btn btn-ghost block lg:hidden hover:bg-[#0000] text-[#323232]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                    <div className='flex items-center  justify-center w-full sm:justify-start lg:flex-col h-full flex-wrap sm:flex-nowrap overflow-auto lg:overflow-hidden'>
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
                        <SelectOption className="w-[150px] lg:w-[250px] text-[12px] lg:text-[16px]" titleName="خدمات:" items={category} />
                        <SelectOption className="w-[150px] lg:w-[250px] text-[12px] lg:text-[16px]" titleName="مرتب سازی:" items={null} />
                    </div>
                    <div className='bg-[#fff] shadow-sm rounded-xl m-0 lg:m-2 w-full p-3 mt-20 h-full'>

                        {
                            loading ?
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
                                :
                                data?.map(item => (
                                    <CardList active={item._id == value?._id} handleClick2={handleClick2} onClick={() => handleClick(item)} key={item.id} {...item} />
                                ))
                        }
                    </div>
                </div>
            </main>
        </>
    );
}

export default Reserve;

// export async function getServerSideProps(context) {

//     const dev = process.env.NODE_ENV !== 'production';
//     const baseURL = dev ? 'http://localhost:3000/api' : 'https://poliklinik.vercel.app/api';
//     // Fetch data from external API
//     const res = await fetch(baseURL + "/admin/doctor")
//     const response = await res.json()

//     // Pass data to the page via props
//     return { props: { data: response } }
// }

Reserve.getLayout = (page) => <SecondLayout>{page}</SecondLayout>