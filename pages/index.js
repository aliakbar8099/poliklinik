import MainLayout from '/layout/main.layout'
import Section1 from '/components/pages/home/Section1'
import Section2 from '/components/pages/home/Section2'
import Section3 from '/components/pages/home/Section3'
import Section4 from '/components/pages/home/Section4'
import Section5 from '/components/pages/home/Section5'
import Sect6 from '/components/pages/home/Sect6'

export async function getServerSideProps() {

  const dev = process.env.NODE_ENV !== 'production';
  const baseURL = dev ? 'http://localhost:3000/api' : 'https://poliklinik.vercel.app/api';
  // Fetch data from external API
  const res = await fetch(baseURL + "/admin/category")
  const response = await res.json()

  // Pass data to the page via props
  return { props: { category: response.data.reverse().slice(0,5) } }
}

export default function Home({category}) {
  return (
    <main className='overflow-hidden'>
      <Section1 />
      <Section2 category={category} />
      <Section3 />
      <Section4 />
      <Section5 />
      <Sect6 />
    </main>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>