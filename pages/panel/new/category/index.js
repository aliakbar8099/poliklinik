import React from 'react';
import TextInput from '../../../../components/common/TextInput';
import SecondLayout from '/layout/second.layout';
import { Svgs } from "../../../../components/common/Icons"
import { getCategory, postCategory, removeCategory } from '../../../../services/admin';
import { toast } from 'react-toastify';

function Category() {
    const [select, setSelect] = React.useState(null);
    const [category, setCategory] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [idSvgD, setIdSVgD] = React.useState(null);
    const [loadingD, setLoadingD] = React.useState(null);

    React.useEffect(() => {
        getCategory().then(res => {
            setCategory(res.data.reverse())
        })
    }, [])

    function handleSubmit(e) {
        let category = document.getElementsByName("category")[0];
        if (!select || !category.value) {
            toast.error("هیچ فیلدی نمی تواند خالی باشد")
            return false
        }
        setLoading(true)
        postCategory({ title: category.value, svg: JSON.stringify(select) }).then(res => {
            toast.success(res.msg)
            document.getElementsByName("category")[0].value = ""
            getCategory().then(res => {
                setCategory(res.data)
                setLoading(false)
            })
        }).catch(err => {
            toast.error(err.response.data.msg);
            setLoading(false)
        })
    }

    function cofrimDelete(idSvg) {
        document.getElementById("cofrim").checked = true;
        setIdSVgD(idSvg);
    }

    function handleDelete() {
        document.getElementById("cofrim").checked = false;
        setLoadingD(idSvgD?.svg)
        removeCategory(idSvgD?._id).then(res => {
            toast.success(res.msg)
            getCategory().then(res => {
                setCategory(res.data)
                setLoadingD(null)
            })
        })
    }


    return (
        <div className='h-[auto] bg-[#f4f8fb] p-4 pb-32'>
            <div className='flex items-center lg:items-start justify-start lg:justify-center h-full flex-col lg:flex-row mt-20 lg:mt-0'>
                <div className='flex justify-start items-start flex-col lg:w-1/2 m-auto bg-[#fff] shadow-md p-4 rounded-xl'>
                    <div className='flex justify-center items-center w-full mt-4'>
                        {Svgs[select]?.svg}
                    </div>
                    <TextInput nameInput="category" calssStyle="w-full" title="نام دسته بندی" msg="" />
                    <div className='flex justify-start flex-wrap items-center w-full m-auto bg-[#fff] shadow-md p-4 rounded-xl mt-5'>
                        {
                            Svgs.map(({ svg }, i) => (
                                <button onClick={() => setSelect(i)} key={i} className={`btn btn-ghost w-[95px] h-[100px] ${select == i ? "btn-active" : ""}`}>
                                    {svg}
                                </button>
                            ))
                        }
                    </div>
                    <button disabled={loading} onClick={handleSubmit} className='btn btn-success w-full mt-4'>
                        {
                            loading ?
                                <>
                                    درحال ثبت دسته بندی ...
                                    &nbsp;
                                    <LoadingSvg />
                                </>
                                :
                                <>
                                    ثبت دسته بندی
                                    &nbsp;
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                    </svg>
                                </>
                        }
                    </button>
                </div>
                <div className='w-full lg:w-1/2 bg-[#fff]  shadow-md rounded-xl p-4 mr-4 flex items-center justify-start flex-wrap mt-10 lg:mt-0'>
                    {
                        category?.map((i, index) => (
                            <Card key={i._id} {...i} index={index} cofrimDelete={cofrimDelete} loadingD={loadingD} />
                        ))
                    }
                </div>
            </div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="cofrim" className="modal-toggle" />
            <label htmlFor="cofrim" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <p className='text-center text-[18px]'>آیا میخواهید این آیتم را حذف کنید؟</p>
                    <div className='flex justify-center items-center w-full mt-4'>
                        {Svgs[idSvgD?.svg]?.svg}
                    </div>
                    <h3 className="text-lg font-bold text-center mt-6">{idSvgD?.title}</h3>
                    <div className='flex items-center justify-center mt-4'>
                        <button onClick={handleDelete} className='btn btn-outline btn-error'>تایید و حذف</button>
                        <label htmlFor='cofrim' className='btn btn-outline btn-info mr-3'>بیخیال</label>
                    </div>
                </label>

            </label>
        </div>
    );
}

export default Category;

Category.getLayout = (page) => <SecondLayout>{page}</SecondLayout>


function Card({ title, svg, cofrimDelete, _id, loadingD }) {
    return (

        <div className="group bg-[#DEEEF2] rounded-[30px] flex flex-col justify-center items-center w-[150px] m-1 p-4 relative overflow-hidden border border-1 border-[#eee] hover:border-[#ff000024]">

            {
                loadingD == svg ?
                    <div className='h-[57px] w-[57px] flex justify-center items-center'>
                        <LoadingSvg />
                    </div> :
                    Svgs[svg]?.svg
            }
            <h3 className="mt-9 text-[#000] text-[13px]">{title}</h3>
            <div onClick={() => cofrimDelete({ svg, title, _id })} className='absolute left-0 top-0 w-full h-full bg-[#fff8] justify-center items-center cursor-pointer backdrop-blur-md hidden group-hover:flex transition'>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ff0000" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg>
            </div>
        </div>
    )
}

function LoadingSvg() {
    return (
        <svg xlink="http://www.w3.org/1999/xlink" width="70px" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <circle cx="80" cy="50" r="5" fill="#93dbe9">
                <animate attributeName="cx" values="80;50" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="50;80" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#93dbe9;#689cc5" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
            </circle><circle cx="50" cy="80" r="5" fill="#689cc5">
                <animate attributeName="cx" values="50;20" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="80;50.00000000000001" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#689cc5;#5e6fa3" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
            </circle><circle cx="20" cy="50.00000000000001" r="5" fill="#5e6fa3">
                <animate attributeName="cx" values="20;49.99999999999999" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="50.00000000000001;20" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#5e6fa3;#3b4368" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
            </circle><circle cx="49.99999999999999" cy="20" r="5" fill="#3b4368">
                <animate attributeName="cx" values="49.99999999999999;80" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="cy" values="20;49.99999999999999" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                <animate attributeName="fill" values="#3b4368;#93dbe9" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
            </circle>
        </svg>
    )
}