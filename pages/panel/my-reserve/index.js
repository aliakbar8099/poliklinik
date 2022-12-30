import React from 'react';
import { getListMyReserve } from '/services/get-api';
import SelectOption from '/components/common/SelectOption';
import { getCategory } from '/services/admin';
import SecondLayout from '/layout/second.layout';
import Link from 'next/link';

function MyReserve() {
    const [data, setData] = React.useState([]);
    const [loading , setLoading] = React.useState(false);
    const [nCode , setNCode] = React.useState(null)
    const [category, setCategory] = React.useState(null);
    const [selectName, setSelectName] = React.useState("");
    const [selectValue, setSelectValue] = React.useState("");

    React.useEffect(() => {
        let { NationalCode } = JSON.parse(localStorage.getItem("user"));
        setLoading(true)
        setNCode(NationalCode)
        getListMyReserve(NationalCode).then(res => {
            getCategory().then(res2 => {
                setCategory(res2.data)
                setLoading(false)
                setData(res.data.reverse());
            })
        })
    }, [])

    React.useMemo(() => {
        setLoading(true)
        setData([])
        if(nCode){
            getListMyReserve(nCode).then(res => {
                let filter = !selectValue ? res.data : res.data?.filter(item => item.doctor.category == selectValue);
                setLoading(false)
                setData(filter.reverse());
            })
        }
    }, [selectValue])

    function handleDelete(params) {

    }

    return (
        <>
            <main className='p-10'>
                <div className='w-[80%] m-auto shadow-md'>
                    <div className="overflow-x-auto overflow-y-auto w-full rtl-grid text-right">
                        <table className="table w-full rtl-grid hover text-right bg-[#fff]">
                            <thead>
                                <tr>
                                    <th>پزشک رزور شده</th>
                                    <th>زمان رزور</th>
                                    <th>دسته بندی</th>
                                    <th>علت مراجعه</th>
                                    <th>
                                        <SelectOption className="w-full" titleName="خدمات:" items={category} {...{ setSelectValue, selectValue, selectName, setSelectName }} />
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading ?
                                        <>
                                            {
                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 12].map(i => (
                                                    <tr key={i} className='w-full'>
                                                        <td>
                                                            <div className='skeleton p-5 w-full rounded-md'></div>
                                                        </td>
                                                        <td>
                                                            <div className='skeleton p-5 w-full rounded-md'></div>
                                                        </td>
                                                        <td>
                                                            <div className='skeleton p-5 w-full rounded-md'></div>
                                                        </td>
                                                        <td>
                                                            <div className='skeleton p-5 w-full rounded-md'></div>
                                                        </td>
                                                        <td>
                                                            <div className='skeleton p-5 w-full rounded-md'></div>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </>
                                        : data?.length == 0 ?
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <div className='py-10 pr-4 text-[20px] w-full text-right'>
                                                        رزروی انجام نشده!
                                                        &nbsp;
                                                        <Link href={"/reserve"} className='btn'>ثبت رزرو</Link>
                                                    </div>
                                                </td>
                                                <td></td>
                                            </tr>
                                            : data?.map(item => (
                                                <tr key={item.tiemValue}>
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div className="avatar ml-2">
                                                                <div className="mask mask-squircle w-12 h-12">
                                                                    <img src={item.doctor.img} alt="Avatar Tailwind CSS Component" />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <div className="font-bold">{item.doctor.fullname}</div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        {item.week} ساعت {item.time}
                                                        <br />
                                                        <span className="badge badge-ghost badge-md">تاریخ : {item.date}</span>
                                                    </td>
                                                    <td>{category?.find(i => i._id == item.doctor.category)?.title}</td>
                                                    <th className='w-[300px]'>
                                                        <button className="btn btn-ghost btn-xs">{item.user.reason}</button>
                                                    </th>
                                                    <td>
                                                        <label htmlFor='cofrim' className='btn btn-ghost hover:text-[#ff0000] hover:bg-[#ff000030]'>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                                                            </svg>
                                                        </label>
                                                    </td>
                                                </tr>
                                            ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>پزشک رزور شده</th>
                                    <th>زمان رزور</th>
                                    <th>دسته بندی</th>
                                    <th>علت مراجعه</th>
                                    <th></th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>
            </main>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="cofrim" className="modal-toggle" />
            <label htmlFor="cofrim" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <p className='text-center text-[18px]'>آیا میخواهید این آیتم را حذف کنید؟</p>
                    {/* <div className='flex justify-center items-center w-full mt-4'>
                        {Svgs[idSvgD?.svg]?.svg}
                    </div>
                    <h3 className="text-lg font-bold text-center mt-6">{idSvgD?.title}</h3> */}
                    <div className='flex items-center justify-center mt-4'>
                        <button onClick={handleDelete} className='btn btn-outline btn-error'>تایید و حذف</button>
                        <label htmlFor='cofrim' className='btn btn-outline btn-info mr-3'>بیخیال</label>
                    </div>
                </label>

            </label>
        </>
    );
}

export default MyReserve;

MyReserve.getLayout = (page) => <SecondLayout>{page}</SecondLayout>