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
                گزارشات
            </main>
        </>
    );
}

export default MyReserve;

MyReserve.getLayout = (page) => <SecondLayout>{page}</SecondLayout>