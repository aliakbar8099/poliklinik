import React from 'react';
import { toast } from 'react-toastify';
import { postUpload } from "../../../../services/post-api"
import TextInput from '../../../../components/common/TextInput';
import SecondLayout from '/layout/second.layout';
import { getMainProps } from '../../../../services/get-api';
import { postMainProps } from '../../../../services/admin';
import { useRouter } from 'next/router';

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
})

function Logout() {
    localStorage.removeItem("access-token");
    setChange(new Date());
    router.reload();
    document.getElementById("logout-m").checked = false
}
function HomePanel() {
    const router = useRouter();

    const [texts, setTexts] = React.useState([]);
    const [imgs, setImgs] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [loadingS, setLoadingS] = React.useState(false);

    React.useEffect(() => {
        getMainProps().then(res => {
            setImgs(res.data.imgs)
            setTexts(res.data.texts)
        })
    }, [])

    function addText(e) {
        let text = document.getElementsByName("text")[0].value
        let time = document.getElementsByName("dTime")[0].value

        if (!text) {
            toast.error("متن را وارد کنید");
            document.getElementsByName("text")[0].focus()
        } else if (!time) {
            toast.error("زمان را وارد کنید");
            document.getElementsByName("dTime")[0].focus();
        } else if ((texts.length + 1) > 6) {
            toast.error("حداکثر می توان 6 متن اضافه کرد")
        } else {
            setTexts([
                ...texts,
                { id: texts.length + 1, text, time }
            ])
            document.getElementsByName("dTime")[0].value = ""
            document.getElementsByName("text")[0].value = ""
        }

    }

    function deleteText(id) {
        let newTexts = texts.filter(i => i.id != id);
        setTexts(newTexts)
    }

    function deleteImg(id) {
        let newImgs = imgs.filter(i => i.id != id);
        setImgs(newImgs)
    }

    async function UploadImg() {
        if (!document.getElementsByName("file")[0].files[0]) {
            toast.error("فایلی انتخاب نشده!")
            return false
        }
        const file = document.getElementsByName("file")[0].files[0];
        const type = document.getElementsByName("file")[0].files[0].type.split("/")[1]
        let fileBase4 = await toBase64(file)

        if (file.size >= (1024 * 1000)) {
            toast.error("حجم فایل باید کمتر از 1 مگابایت باشد")
            return false
        }


        setLoading(true)

        const config = {
            onUploadProgress: (progressEvent) => {
                var percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                document.getElementById("uFileBanner").style.setProperty('--progress-upload', (percentCompleted) + '%');
                document.getElementById("uFileBanner").textContent = percentCompleted + "%"
            }
        }

        postUpload({ file: fileBase4, type }, config).then(res => {
            setTimeout(() => {
                setLoading(false)
                document.getElementById("uFileBanner").style.setProperty('--progress-upload', (0) + '%');
                document.getElementById("uFileBanner").textContent = "آپلود عکس"
                toast.success("آپلود شد")
                setImgs([
                    ...imgs,
                    { id: imgs.length + 1, img: res.url }
                ])
                document.getElementsByName("file")[0].value = null
            }, 1000);
        }).catch(err => {
            if (err.response.status === 413) {
                setLoading(false)
                toast.error("حجم فایل باید کمتر از 1 مگابایت باشد")
            }
        })
    }

    console.log(texts);

    function handleSubmit() {
        setLoadingS(true)
        postMainProps({ imgs, texts }).then(res => {
            toast.success(res.msg)
            router.push('/')
            setLoadingS(false)
        })
            .catch(err => {
                toast.error("خطا در ارسال اطلاعات")
                setLoadingS(false)
                if (err.response.status === 401) {
                    Logout();
                }
            })
    }

    return (
        <div className='flex items-start justify-center w-[98%] lg:w-[90%]  flex-col lg:flex-row m-auto bg-[#fff] shadow-md p-4 mt-[80px] lg:mt-6 rounded-xl'>
            <button onClick={handleSubmit} className='btn btn-success fixed left-4 bottom-4 px-10 z-10'>
                {
                    loadingS ?
                        <>
                            لطفا صبر کنید...
                            &nbsp;
                            <LoadingSvg />
                        </>
                        :
                        <>
                            ثبت و بروز رسانی
                            &nbsp;
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                            </svg>
                        </>
                }
            </button>
            <div className='flex items-start flex-col lg:w-1/2 mx-auto'>
                <h3 className='font-bold text-[18px]'>متن صفحه اصلی</h3>
                <div className='w-[90%] flex items-center flex-col justify-center'>
                    <div className='flex justify-center items-center w-[95%]'>
                        <TextInput placeholder="" nameInput="text" calssStyle="w-2/3" title="متن تایپ صفحه" msg="" />
                        <TextInput type="number" placeholder="مثال : 2" nameInput="dTime" inputStyle="text-center" calssStyle="w-1/3" title="زمان نمایش" msg="" />
                        <span className='mt-12'>ثانیه</span>
                    </div>
                    <button onClick={addText} className='btn w-full m-auto'>اضافه کردن متن</button>
                </div>
                <ul className='w-[95%] mt-10 flex justify-center items-center flex-col-reverse'>
                    {
                        texts?.map(item => (
                            <ListItem key={item.id} {...item} deleteText={deleteText} />
                        ))
                    }
                </ul>
            </div>
            <div className='flex items-start flex-col lg:w-1/2 mx-auto'>
                <h3 className='font-bold text-[18px]'>بنر اسلایدر</h3>
                <TextInput nameInput="file" type="file" calssStyle="w-full" title="باز کردن فایل" msg="" />
                <button onClick={UploadImg} id="uFileBanner" className='btn w-full m-auto uBtns'>آپلود عکس</button>

                <div className='flex justify-center items-center flex-col-reverse w-full mt-5'>
                    {
                        imgs?.map(item => (
                            <CardImg key={item.id} {...item} deleteImg={deleteImg} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default HomePanel;

function ListItem({ id, text, time, deleteText }) {
    return (
        <li className='flex items-center justify-between w-full btn btn-outline btn-primary mb-5'>
            <span className='font-[400]'>{text} &nbsp; ({time} ثاینه)</span>
            <div onClick={() => deleteText(id)} className="tooltip tooltip-error btn flex justify-center items-center btn-ghost" data-tip="حذف کردن">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 hover:text-red-300" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
            </div>
        </li>
    )
}

function CardImg({ id, img, deleteImg }) {
    const [load, setLoad] = React.useState(false);

    function handleLoad(e) {
        setLoad(false)
        if (e.target.complete) {
            setLoad(true)
        }
    }

    return (
        <div onClick={() => deleteImg(id)} className='bg-[#eee] w-full h-[250px] rounded-3xl overflow-hidden mb-4 relative'>
            <div className="tooltip tooltip-error absolute left-6 btn-outline bottom-3 btn btn-error flex justify-center items-center" data-tip="حذف کردن">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3 hover:text-red-300" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
            </div>
            <>
                <>
                    <img hidden={!load} onLoad={handleLoad} className="w-full h-full object-cover" src={img} />
                    <div hidden={load} className="skeleton w-full h-full"></div>
                </>
            </>
        </div>
    )
}

HomePanel.getLayout = (page) => <SecondLayout>{page}</SecondLayout>

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