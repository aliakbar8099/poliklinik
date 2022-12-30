import SecondLayout from '/layout/second.layout';
import TextInput from '/components/common/TextInput';
import React from 'react';
import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import DatePickers from '../../../components/common/datepicker';
import { getUser } from '../../../services/get-api';
import { updatePassword, updateUser } from '../../../services/update';
import { toast } from 'react-toastify';
import { postUpload } from '../../../services/post-api';

const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});
function Profile({ setChange }) {
    const [value, setValue] = React.useState(null);
    const [password , setPassword] = React.useState({
        oldPassword:null,
        newPassword:null,
    })
    // const [change, setChange] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [loadingU, setLoadingU] = React.useState(false);
    const [selectedDay, setSelectedDay] = React.useState(null);

    function getValue(e) {
        setValue({ ...value, [e.target.name]: e.target.value })
    }
    
    function getPassword(e) {
        setPassword({ ...password, [e.target.name]: e.target.value })
    }

    React.useEffect(() => {
        if (localStorage.getItem("access-token")) {
            getUser().then(res => {
                setValue(res.data);
                localStorage.setItem("user", JSON.stringify(res.data))
                setSelectedDay(res.data.birthDay)
            })
                .catch((err) => {
                    if (err.response.status === 401) {
                        location.reload();
                    }
                })
        }
    }, [])

    function handleSubmit() {
        setLoading(true)
        updateUser(value).then(res => {
            setLoading(false)
            toast.success(res.msg)
            getUser().then(res2 => {
                setValue(res2.data);
                localStorage.setItem("user", JSON.stringify(res2.data))
                setSelectedDay(res2.data.birthDay)
                setChange(new Date())
            })
        }).catch(err => {
            toast.error("خطا در ارسال اطلاعات")
        })
    }

    async function getFile(e) {
        const file = e.target.files[0];
        const type = e.target.files[0].type.split("/")[1]
        let fileBase4 = await toBase64(file)
        setLoadingU(true)
        postUpload({ file: fileBase4, type }).then(res => {
            setValue({
                ...value,
                img: res.url
            })
            toast.success("با موفقیت آپلود شد")
            setLoadingU(false)
        }).catch((err) => console.log(err))
    }

    function handleChangePassword() {
        let confrimPassword = document.getElementsByName("confrimPassword")[0].value;

        if(!password.oldPassword){
            toast.error("رمز عبور فعلی وارد کنید")
            document.getElementsByName("oldPassword")[0].focus();
            return false
        }
        if(!password.newPassword){
            toast.error("رمز عبور جدید وارد کنید")
            document.getElementsByName("newPassword")[0].focus();
            return false
        }
        if(password.newPassword.length < 6){
            toast.error("رمز عبور جدید باید حداقل 6 رقم باشد")
            document.getElementsByName("newPassword")[0].focus();
            return false
        }
        if(password.newPassword != confrimPassword){
            toast.error("رمز عبور جدید برابر نیست ")
            document.getElementsByName("confrimPassword")[0].focus();
            return false
        }

        updatePassword(password).then(res=> {
            toast.success(res.msg)
        })
    }

    return (
        <div className='flex justify-start lg:justify-center items-center p-5 h-[88vh] flex-col lg:flex-row'>
            <div id="form" className="bg-[#fff] flex justify-center w-full items-start flex-wrap lg:w-1/2 m-auto mt-[70px] lg:mt-5 shadow-lg p-4 border rounded-[20px] mx-2">
                <div className="w-full flex justify-center items-center">
                    <label htmlFor='img' className="avatar">
                        <div className="group w-[92px] lg:w-[110px] rounded-[50%] relative overflow-hidden ring-2">
                            <img className='hover:scale-110 transition' src={value?.img} />
                            <div className='absolute left-0 top-0 w-full h-full bg-[#fff3] backdrop-blur-sm flex justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#323232" class="bi bi-plus-circle-dotted" viewBox="0 0 16 16">
                                    <path d="M8 0c-.176 0-.35.006-.523.017l.064.998a7.117 7.117 0 0 1 .918 0l.064-.998A8.113 8.113 0 0 0 8 0zM6.44.152c-.346.069-.684.16-1.012.27l.321.948c.287-.098.582-.177.884-.237L6.44.153zm4.132.271a7.946 7.946 0 0 0-1.011-.27l-.194.98c.302.06.597.14.884.237l.321-.947zm1.873.925a8 8 0 0 0-.906-.524l-.443.896c.275.136.54.29.793.459l.556-.831zM4.46.824c-.314.155-.616.33-.905.524l.556.83a7.07 7.07 0 0 1 .793-.458L4.46.824zM2.725 1.985c-.262.23-.51.478-.74.74l.752.66c.202-.23.418-.446.648-.648l-.66-.752zm11.29.74a8.058 8.058 0 0 0-.74-.74l-.66.752c.23.202.447.418.648.648l.752-.66zm1.161 1.735a7.98 7.98 0 0 0-.524-.905l-.83.556c.169.253.322.518.458.793l.896-.443zM1.348 3.555c-.194.289-.37.591-.524.906l.896.443c.136-.275.29-.54.459-.793l-.831-.556zM.423 5.428a7.945 7.945 0 0 0-.27 1.011l.98.194c.06-.302.14-.597.237-.884l-.947-.321zM15.848 6.44a7.943 7.943 0 0 0-.27-1.012l-.948.321c.098.287.177.582.237.884l.98-.194zM.017 7.477a8.113 8.113 0 0 0 0 1.046l.998-.064a7.117 7.117 0 0 1 0-.918l-.998-.064zM16 8a8.1 8.1 0 0 0-.017-.523l-.998.064a7.11 7.11 0 0 1 0 .918l.998.064A8.1 8.1 0 0 0 16 8zM.152 9.56c.069.346.16.684.27 1.012l.948-.321a6.944 6.944 0 0 1-.237-.884l-.98.194zm15.425 1.012c.112-.328.202-.666.27-1.011l-.98-.194c-.06.302-.14.597-.237.884l.947.321zM.824 11.54a8 8 0 0 0 .524.905l.83-.556a6.999 6.999 0 0 1-.458-.793l-.896.443zm13.828.905c.194-.289.37-.591.524-.906l-.896-.443c-.136.275-.29.54-.459.793l.831.556zm-12.667.83c.23.262.478.51.74.74l.66-.752a7.047 7.047 0 0 1-.648-.648l-.752.66zm11.29.74c.262-.23.51-.478.74-.74l-.752-.66c-.201.23-.418.447-.648.648l.66.752zm-1.735 1.161c.314-.155.616-.33.905-.524l-.556-.83a7.07 7.07 0 0 1-.793.458l.443.896zm-7.985-.524c.289.194.591.37.906.524l.443-.896a6.998 6.998 0 0 1-.793-.459l-.556.831zm1.873.925c.328.112.666.202 1.011.27l.194-.98a6.953 6.953 0 0 1-.884-.237l-.321.947zm4.132.271a7.944 7.944 0 0 0 1.012-.27l-.321-.948a6.954 6.954 0 0 1-.884.237l.194.98zm-2.083.135a8.1 8.1 0 0 0 1.046 0l-.064-.998a7.11 7.11 0 0 1-.918 0l-.064.998zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                                </svg>
                            </div>
                        </div>
                    </label>
                    <input type="file" name='img' hidden id="img" onChange={getFile} />
                </div>
                <TextInput onGetValue={getValue} defaultValueText={value?.fullname} nameInput="fullname" calssStyle="w-full md:w-1/2" title="نام و نام خانوادگی" msg="" />
                <TextInput readOnly={true} onGetValue={getValue} defaultValueText={value?.NationalCode} nameInput="NationalCode" calssStyle="w-full md:w-1/2" title="کد ملی" msg="" />
                <TextInput onGetValue={getValue} defaultValueText={value?.phoneNumber} nameInput="phoneNumber" calssStyle="w-full md:w-1/2" title="شماره تلفن" msg="" />
                <DatePickers {...{ selectedDay, setSelectedDay, getValue }} defaultValueText={value?.birthDay} nameInput="birthDay" calssStyle="w-full md:w-1/2" title="تاریخ تولد" msg="" />
                <TextInput onGetValue={getValue} defaultValueText={value?.email} nameInput="email" calssStyle="w-full md:w-1/2" title="ایمیل" msg="" />
                <TextInput onGetValue={getValue} defaultValueText={value?.city} nameInput="city" calssStyle="w-full md:w-1/2" title="شهر" msg="" />
                <TextInput onGetValue={getValue} defaultValueText={value?.adderess} nameInput="adderess" calssStyle="w-full" title="آدرس" msg="" />
                <div className='w-full'>
                    <button disabled={loading} dir='ltr' onClick={handleSubmit} className={`btn mt-3 float-left ml-2 px-10 ${loading ? "loading" : ""}`}>ثبت اطلاعات</button>
                </div>
            </div>
            <div className="bg-[#fff] flex justify-center items-start flex-wrap w-full lg:w-1/4 m-auto mt-5 shadow-lg p-4 border rounded-[20px] mx-2 h-full">
                <h3 className='m-3 text-[18px] border-r-4 border-[#708fff] px-10'>تغییر رمز عبور</h3>
                <div className='w-full'>
                    <TextInput type="password" onGetValue={getPassword} nameInput="oldPassword" calssStyle="w-full" title="رمز عبور فعلی" msg="" />
                    <TextInput type="password" onGetValue={getPassword} nameInput="newPassword" calssStyle="w-full" title="رمز عبور جدید" msg="" />
                    <TextInput type="password" nameInput="confrimPassword" calssStyle="w-full" title="تکرار رمز عبور جدید" msg="" />
                    <button onClick={handleChangePassword} className='btn mt-3 float-left ml-2 px-8'>ذخیره</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;

Profile.getLayout = (page) => <SecondLayout>{page}</SecondLayout>