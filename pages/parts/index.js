import SliderParts from '../../components/pages/events/Slider'
import MainLayout from '/layout/main.layout'
import styles from "/styles/events.module.scss"

let slide = [
  {name:"سونوگرافی",img:"/img/parts/s1.jpg"},
  {name:"چشم پزشکی",img:"/img/parts/s2.jpg"},
  {name:"MRI",img:"/img/parts/s3.jpg"},
  {name:"فیزیوتراپی",img:"/img/parts/s4.jpg"},
  {name:"دندان پزشکی",img:"/img/parts/s5.jpg"},
]

export default function Parts() {
  return (
    <main className='overflow-hidden'>
      <section>
        <div className="flex mt-24 lg:mt-12 mb-14 lg:mb-20 justify-center items-center w-full ">
          <p className="w-[90%] lg:w-[35%] text-[14px] lg:text-[22px] text-center font-normal">ما در <span className='text-[#00B6BD]'>پلی کلینیک زندگی</span> تمام تلاش خود را می کنیم تا با ارائه خدمات متنوع و با فراهم نمودن امکانات رفاهی و درمانی، بهترین تجربه را به شما عزیزان عرضه کنیم. </p>
        </div>
        <div className='h-[240px] lg:h-[300px] mb-4 overflow-hidden'>
          <SliderParts part={slide} styles={styles} />
        </div>
        <div className="flex justify-center items-center p-4 pb-10 my-12">
          <p className='w-[90%] lg:w-[80%] text-[14px] lg:text-[22px] text-center font-normal'>برای کسب اطلاعات بیشتر درباره هر بخش از این کلینیک،کافیست روی بخش مورد نظر خود کلیک کنید.</p>
        </div>
      </section>
    </main>
  )
}

Parts.getLayout = (page) => <MainLayout>{page}</MainLayout>