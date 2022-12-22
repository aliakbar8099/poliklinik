import React from 'react';
import { getListMyReserve } from '../../../services/get-api';
import { getCategory } from '/services/admin';
import SecondLayout from '/layout/second.layout';
import Link from 'next/link';

function MyReserve() {
    const [data, setData] = React.useState(null);
    const [category, setCategory] = React.useState(null);

    React.useEffect(() => {
        let { NationalCode } = JSON.parse(localStorage.getItem("user"));
        getListMyReserve(NationalCode).then(res => {
            getCategory().then(res2 => {
                setCategory(res2.data)
                setData(res.data.reverse());
            })
        })
    }, [])
    React.useEffect(() => { }, [category])

    return (
        <>
            <main className='p-10'>
                <div className='w-[80%] m-auto shadow-md'>
                    <div className="overflow-x-auto w-full rtl-grid text-right">
                        <table className="table w-full rtl-grid  text-right">
                            <thead>
                                <tr>
                                    <th>اظلاعات شخصی مراجعه کننده</th>
                                    <th>پزشک رزور شده</th>
                                    <th>زمان رزور</th>
                                    <th>دسته بندی</th>
                                    <th>علت مراجعه</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !data ?
                                        <>
                                            {
                                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 12].map(i => (
                                                    <tr key={i} className='w-full'>
                                                        <td>
                                                            <div className='skeleton p-5 w-ful rounded-mdl'></div>
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
                                        : data.length == 0 ?
                                            <tr>
                                                <td></td>
                                                <td></td>
                                                <td>
                                                    <div className='py-10 pr-4 text-[20px] w-full text-right text-[#aaa]'>
                                                        رزروی انجام نشده!
                                                        &nbsp;
                                                        <Link href={"/reserve"} className='btn'>ثبت رزرو</Link>
                                                    </div>
                                                </td>
                                                <td></td>
                                            </tr>
                                            : data?.map(item => (
                                                <tr key={item.tiemValue} className="hover cursor-pointer">
                                                    <td>
                                                        <div className="flex items-center space-x-3">
                                                            <div>
                                                                <div className="font-bold">{item.user.fullname}</div>
                                                                <div className="text-sm opacity-50">{item.user.phoneNumber}</div>
                                                            </div>
                                                        </div>
                                                    </td>
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
                                                </tr>
                                            ))
                                }
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>اظلاعات شخصی مراجعه کننده</th>
                                    <th>پزشک رزور شده</th>
                                    <th>زمان رزور</th>
                                    <th>دسته بندی</th>
                                    <th>علت مراجعه</th>
                                </tr>
                            </tfoot>

                        </table>
                    </div>
                </div>
            </main>
        </>
    );
}

export default MyReserve;

MyReserve.getLayout = (page) => <SecondLayout>{page}</SecondLayout>