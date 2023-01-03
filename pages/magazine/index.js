import React from 'react';
import Link from 'next/link';
import MainLayout from '/layout/main.layout'
import styles from '/styles/Home.module.scss'
import { Svgs } from '/components/common/Icons'

export async function getServerSideProps() {

  const dev = process.env.NODE_ENV !== 'production';
  const baseURL = dev ? 'http://localhost:3000/api' : 'https://poliklinik.vercel.app/api';
  // Fetch data from external API
  const res = await fetch(baseURL + "/admin/category")
  const response = await res.json()

  // Pass data to the page via props
  return { props: { category: response.data } }
}

const lastData = [
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p1.jpg" },
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p2.jpg" },
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p3.jpg" },
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p4.jpg" },
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p5.jpg" },
]
const hVisData = [
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p6.jpg" },
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p7.jpg" },
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p8.jpg" },
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p9.jpg" },
  { title: "همه چیز درباره رژیم غذایی سالم", category: "رژیم و تغذیه", img: "/img/mag/p10.jpg" },
]

let vs = [
  {
    _id: "63ab2038a9e88b4da95e50c6",
    title: "روانشناسی",
    svg: "3",
  },
  {
    _id: "63ab39b1a9e88b4da95e50d5",
    title: "چشم پزشکی",
    svg: "2",
  },
  {
    _id: "63ab3c11a9e88b4da95e50d7",
    title: "داخلی",
    svg: "1",
  },
  {
    _id: "63aea4b4460abf9dda44b252",
    title: "اطفال",
    svg: "16",
  },
  {
    _id: "63aea4d5460abf9dda44b253",
    title: "دندان پزشکی",
    svg: "15",
  },
  {
    _id: "63af24d4460abf9dda44b268",
    title: "کرونا",
    svg: "9",
  },
  {
    _id: "63af24f0460abf9dda44b269",
    title: "قلبی و عروقی",
    svg: "6",
  },
  {
    _id: "63afe4d7343b678db599c683",
    title: "فیزیوتراپی",
    svg: "5",
  },
  {
    _id: "63afebf37d77c2387a128071",
    title: "تست",
    svg: "2",
  },
];


export default function Magazine({ category }) {
  return (
    <main className='w-[80%] max-w-[1440px] m-auto'>
      <h2 className='font-[600] text-[14px] lg:text-[25px] mt-[100px] lg:mt-10 mb-4 text-[#00B6BD] pb-2 w-full text-center'>جدیدترین مطالب</h2>
      <section className='border-t-[1.2px] border-[#00597481] pt-14 flex justify-between items-center overflow-auto'>
        {
          lastData?.map((item, n) => (
            <Article key={n} {...item} />
          ))
        }
      </section>
      <h2 className='font-[600] text-[14px] lg:text-[25px] mt-[100px] lg:mt-10 mb-4 text-[#00B6BD] pb-2 w-full text-center'>مطالب پربازدید</h2>
      <section className='border-t-[1.2px] border-[#00597481] pt-14 flex justify-between items-center overflow-auto'>
        {
          hVisData?.map((item, n) => (
            <Article key={n} {...item} />
          ))
        }
      </section>
      <h2 className='font-[600] text-[14px] lg:text-[25px] mt-[100px] lg:mt-10 mb-4 text-[#00B6BD] pb-2 w-full text-center'>دسته بندی ها</h2>
      <section className='border-t-[1.2px] border-[#00597481] pt-14 w-full'>
        <div className={`${styles.Section2_Items} flex my-10 flex-wrap justify-center`}>
          {
            vs?.map(item => (
              <Link href={"/reserve?category=" + item?._id} key={item?._id} className="h-[150px] lg:h-[200px] mb-10 bg-[#DEEEF2] mx-2 md:mx-5 rounded-[30px] flex flex-col justify-center items-center w-[40%] lg:w-1/6">
                {Svgs[item?.svg].svg}
                <h3 className="mt-9 text-[#000] text-[18px]">{item?.title}</h3>
              </Link>
            ))
          }
        </div>
      </section>
    </main>
  )
}

Magazine.getLayout = (page) => <MainLayout>{page}</MainLayout>


function Article({ title, category, img }) {

  const [load, setLoad] = React.useState(false);

  function handleLoad(e) {
    setLoad(false)
    if (e.target.complete) {
      setLoad(true)
    }
  }


  return (
    <article className='w-[200px] min-w-[200px] m-2 p-4 h-[200px] flex relative justify-end items-center flex-col bg-no-repeat overflow-hidden rounded-lg hover:scale-105 opacity-80 hover:opacity-100 cursor-pointer transition duration-300' style={{ backgroundImage: `url(${img})` }}>
      <div hidden={load} className="skeleton w-full h-full bg-[#eee] z-10 absolute left-0 top-0"></div>
      <img onLoad={handleLoad} alt='تصویر' hidden src={img} />
      <div className='w-full flex justify-center items-center flex-col'>
        <h2 className='mb-2 text-[12px] px-3 bg-[#005974] p-1 text-center rounded-[4px] text-[#fff]'>{category}</h2>
        <h3 className='text-[12px] mb-10  px-1 bg-[#BEEEEA] p-1 text-center rounded-[4px] text-[#000]'>{title}</h3>
      </div>
    </article>
  )
}