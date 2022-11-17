import Head from 'next/head'
import Image from 'next/image'
import Section2 from '/components/pages/home/Section2'
import Section1 from '/components/pages/home/Section1'
import MainLayout from '/layout/main.layout'
import styles from '/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Section1 />
      <Section2 />
    </>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>