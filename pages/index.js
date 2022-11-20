import MainLayout from '/layout/main.layout'
import Section1 from '/components/pages/home/Section1'
import Section2 from '/components/pages/home/Section2'
import Section3 from '/components/pages/home/Section3'
import Section4 from '/components/pages/home/Section4'
import Section5 from '/components/pages/home/Section5'
import Sect6 from '/components/pages/home/Sect6'

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Sect6 />
    </main>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>