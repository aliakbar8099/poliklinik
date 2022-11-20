import MainLayout from '/layout/main.layout'

export default function Parts() {
  return (
    <main className='overflow-hidden'>

    </main>
  )
}

Parts.getLayout = (page) => <MainLayout>{page}</MainLayout>