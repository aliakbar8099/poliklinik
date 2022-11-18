import Head from 'next/head'
import Image from 'next/image'
import MainLayout from '/layout/main.layout'
import Section1 from '/components/pages/home/Section1'
import Section2 from '/components/pages/home/Section2'
import Section3 from '/components/pages/home/Section3'
import Section4 from '/components/pages/home/Section4'
import Section5 from '/components/pages/home/Section5'
import Section6 from '../components/pages/home/section6'
import styles from '/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>