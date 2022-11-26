import React from 'react'
import CardStaff from '/components/common/CardStaff'
import MainLayout from '/layout/main.layout'
import styles from "/styles/staff.module.scss"

const datas = [
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
  {
    imgUrl: "./img/staff/a5.png",
    doctor_name: "دکتر مهسا کرمی",
    position: "دندان پزشک",
    week_date: "سه شنبه ها",
    time_date: "ساعت 10 تا 18",
  },
]

export default function Staff() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [end , setEnd] = React.useState(4)

  function handleMoreThan() {
    setLoading(true);
    setTimeout(() => {
      setEnd(end + 4)
      setLoading(false);
    }, 3000);
  }

  return (
    <main className={styles.main}>
      <section className='flex justify-center items-start'>
        <aside className='z-[1010] bg-[#fff]' style={{ right: open ? 10 : -1200 }}>
          <h3>براساس نیاز خود،<br /> گزینه مورد نظر را انتخاب کنید!</h3>
          <figure >
            <img alt='پزشک متخصص' src="./img/staff/a1.png" />
            <figcaption>پزشک متخصص</figcaption>
          </figure>
          <figure>
            <img alt='پزشک عمومی' src="./img/staff/a2.png" />
            <figcaption>پزشک عمومی</figcaption>
          </figure>
          <figure>
            <img alt='تزریقات' src="./img/staff/a4.jpg" />
            <figcaption>تزریقات</figcaption>
          </figure>
        </aside>
        <article className='w-full'>
          <label className="btn btn-circle  lg:hidden swap bg-[#005974] hover:bg-[#005974] transition-all swap-rotate fixed top-[90px] z-50" style={{ right: open ? 280 : 10 }}>
            <input type="checkbox" onChange={(e) => setOpen(e.target.checked)} />
            <svg className="swap-off fill-[#fff]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
            <svg className="swap-on fill-[#fff]" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
          </label>
          <h1 className='text-center text-[14px] md:text-[25px] mb-4 mt-28 lg:mt-0'><span className='text-[#00B6BD] font-bold'>پلی کلینیک زندگی</span> با کادری مجرب،<br />
            آماده پاسخگویی به شما بیماران عزیز می باشد.</h1>
          <div className='flex items-center justify-center w-full flex-wrap'>
            {
              datas.slice(0, end).map((data, i) => (
                <CardStaff key={i} {...data} />
              ))
            }
          </div>
          <div className='flex justify-center items-center w-full'>
            {
              loading ?
                <div className="lds-ellipsis mt-10"><div></div><div></div><div></div><div></div></div>
                :
                <div hidden={datas.length < end} className="tooltip  mt-20" data-tip="مشاهده بیشتر">
                  <button onClick={handleMoreThan} className='btn btn-ghost rounded-[100%] w-[60px] h-[60px] bg-[#fff] border boredr-1 hover:bg-[#fff] shadow-lg' style={{ boxShadow: "0 0 30px rgba(0,89,116,0.2)" }}>
                    <svg width="25" height="15" viewBox="0 0 25 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.276 14.2752C14.4024 14.1492 14.5083 14.0107 14.6011 13.8663L24.291 4.17633C25.2359 3.2306 25.2368 1.69745 24.291 0.751276C23.3453 -0.19355 21.8126 -0.194447 20.866 0.751276L12.5218 9.09642L4.13311 0.709124C3.18739 -0.236151 1.65468 -0.236599 0.70851 0.709124C0.236321 1.18266 -0.000894311 1.80193 2.53348e-06 2.4212C-0.000894311 3.04092 0.236321 3.66064 0.709407 4.13238L10.4415 13.8658C10.5343 14.0107 10.6411 14.1488 10.7684 14.2752C11.2518 14.7586 11.8877 14.9914 12.5218 14.9802C13.1549 14.9918 13.7926 14.7586 14.276 14.2752Z" fill="#005974" fill-opacity="0.6" />
                    </svg>
                  </button>
                </div>
            }
          </div>
        </article>
      </section>
    </main>
  )
}

Staff.getLayout = (page) => <MainLayout>{page}</MainLayout>