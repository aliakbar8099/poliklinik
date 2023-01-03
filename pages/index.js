import MainLayout from "/layout/main.layout";
import Section1 from "/components/pages/home/Section1";
import Section2 from "/components/pages/home/Section2";
import Section3 from "/components/pages/home/Section3";
import Section4 from "/components/pages/home/Section4";
import Section5 from "/components/pages/home/Section5";
import Sect6 from "/components/pages/home/Sect6";

export async function getServerSideProps() {
  const dev = process.env.NODE_ENV !== "production";
  const baseURL = dev
    ? "http://localhost:3000/api"
    : "https://poliklinik.vercel.app/api";
  // Fetch data from external API
  const res = await fetch(baseURL + "/admin/category");
  const res2 = await fetch(baseURL + "/admin/main-page");
  const response = await res.json();
  const response2 = await res2.json();

  // Pass data to the page via props
  return { props: { category: response.data, mainProps: response2.data } };
}

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

let me = [
  {
    _id: "63ac95bc5263894d5e6dff6f",
    texts: [
      {
        id: 1,
        text: "نوبت دهی آنلاین",
        time: 2,
      },
      {
        id: 2,
        text: "دریافت نوبت از بهترین پزشکان",
        time: "3",
      },
    ],
    imgs: [
      {
        id: 2,
        img: "/upload/VGqPIoec5Xme.jpeg",
      },
      {
        id: 3,
        img: "/upload/AAbgHXt0nN1S.jpeg",
      },
      {
        id: 4,
        img: "/upload/aaD7BqXgtt5n.jpeg",
      },
      {
        id: 4,
        img: "/upload/mOK7GRwY5sKh.jpeg",
      },
    ],
  },
];

export default function Home({ category, mainProps }) {
  return (
    <main className="overflow-hidden">
      <Section1 mainProps={me[0]} />
      <Section2 category={vs} />
      <Section3 />
      <Section4 />
      <Section5 />
      <Sect6 />
    </main>
  );
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;
