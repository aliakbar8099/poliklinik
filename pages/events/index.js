import MainLayout from '/layout/main.layout'

let data = [
  { img: "/img/parts/s2.jpg", title: "11 دی روز جهانی پزشک مبارک.", description: "" },
  { img: "/img/parts/s1.jpg", title: "13 دی روز جهانی پرستار مبارک.", description: "" },
  { img: "/img/parts/s3.jpg", title: "هفته سلامت!", description: "" },
]

export default function Progroms() {
  return (
    <main className='w-[80%] max-w-[1440px] m-auto'>
      <h1 className='font-[600] text-[14px] lg:text-[25px] mt-[100px] lg:mt-8 mb-4 text-[#00B6BD] pb-2'>رویدار های اخیر</h1>
      <section className='flex flex-col mb-10'>
        {
          data?.map((item ,n) => (
            <a key={n} className='flex justify-between items-start h-[120px] sm:h-[150px] md:h-[250px] xl:h-[300px] border-t-[1.2px] border-[#00597481] p-2 lg:p-4 lg:pt-8'>
              <div className='flex flex-col w-2/3'>
                <h3 className='text-[11px] md:text-[14px] lg:text-[20px] font-bold m-1 lg:my-5'>{item.title}</h3>
                <p className='text-[9px] md:text-[14px] lg:text-[20px] p-1 lg:p-3 lg:pr-6 w-full lg:w-[70%] '><span>
                  11 دی روز جهانی پزشک بر همه پزشکان عزیز مبارک باد.
                  مجموعه ما قصد دارد تا در این روز با برپایی جشنی کوچک از تمام پزشکان محترم این مجموعه تشکر و قدردانی ویژه ای ب عمل بیاورد.
                </span></p>
              </div>
              <div className='min-w-[60px] w-[25%] min-w-1/3 h-full overflow-hidden rounded-[20px] mr-2'>
                <img className='w-full h-full object-cover' src={item.img}/>
              </div>
            </a>
          ))
        }
      </section>
    </main>
  )
}

Progroms.getLayout = (page) => <MainLayout>{page}</MainLayout>