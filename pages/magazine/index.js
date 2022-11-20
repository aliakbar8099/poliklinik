import MainLayout from '/layout/main.layout'

export default function Magazine() {
  return (
    <main className='overflow-hidden'>

    </main>
  )
}

Magazine.getLayout = (page) => <MainLayout>{page}</MainLayout>