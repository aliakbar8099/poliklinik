import SecondLayout from '/layout/second.layout';
import TextInput from '/components/common/TextInput';
import React from 'react';
import DatePicker from "@amir04lm26/react-modern-calendar-date-picker";
import DatePickers from '../../../components/common/datepicker';

function Profile() {
    const [value, setValue] = React.useState(null);
    const [selectedDay, setSelectedDay] = React.useState(null);

    React.useEffect(() => {
        let user = JSON.parse(localStorage.getItem("user"))
        setValue(user)
    }, [])
    return (
        <div className='flex justify-start lg:justify-center items-center p-5 h-[88vh] flex-col lg:flex-row'>
            <div className="flex justify-center w-full items-start flex-wrap lg:w-1/2 m-auto mt-[70px] lg:mt-5 shadow-lg p-4 border rounded-[20px] mx-2">
                <div className="w-full flex justify-center items-center">
                    <div class="avatar">
                        <div class="w-[92px] lg:w-[110px] rounded-[50%]">
                            <img className='hover:scale-110 transition' src={value?.img} />
                        </div>
                    </div>
                </div>
                <TextInput defaultValueText={value?.fullname} nameInput="fullname" calssStyle="w-full md:w-1/2" title="نام و نام خانوادگی" msg="" />
                <TextInput defaultValueText={value?.NationalCode} nameInput="fullname" calssStyle="w-full md:w-1/2" title="کد ملی" msg="" />
                <TextInput defaultValueText={value?.phoneNumber} nameInput="fullname" calssStyle="w-full md:w-1/2" title="شماره تلفن" msg="" />
                {/* <TextInput defaultValueText={value?.birthDay} nameInput="fullname" calssStyle="w-full md:w-1/2" title="تاریخ تولد" msg="" /> */}
                {/* <DatePicker
                    value={selectedDay}
                    onChange={setSelectedDay}
                    shouldHighlightWeekends
                    locale="fa" // add this
                /> */}
                <DatePickers {...{selectedDay, setSelectedDay}} defaultValueText={value?.birthDay} nameInput="fullname" calssStyle="w-full md:w-1/2" title="تاریخ تولد" msg=""  />
                <TextInput defaultValueText={value?.email} nameInput="fullname" calssStyle="w-full md:w-1/2" title="ایمیل" msg="" />
                <TextInput defaultValueText={value?.city} nameInput="fullname" calssStyle="w-full md:w-1/2" title="شهر" msg="" />
                <TextInput defaultValueText={value?.adderess} nameInput="fullname" calssStyle="w-full" title="آدرس" msg="" />
                <div className='w-full'>
                    <button className='btn mt-3 float-left ml-2 px-10'>ثبت اطلاعات</button>
                </div>
            </div>
            <div className="flex justify-center items-start flex-wrap w-full lg:w-1/4 m-auto mt-5 shadow-lg p-4 border rounded-[20px] mx-2 h-full">
                <h3 className='m-3 text-[18px] border-r-4 border-[#708fff] px-10'>تغییر رمز عبور</h3>
                <div className='w-full'>
                    <TextInput nameInput="fullname" calssStyle="w-full" title="رمز عبور فعلی" msg="" />
                    <TextInput nameInput="fullname" calssStyle="w-full" title="رمز عبور جدید" msg="" />
                    <TextInput nameInput="fullname" calssStyle="w-full" title="تکرار رمز عبور" msg="" />
                    <button className='btn mt-3 float-left ml-2 px-8'>ذخیره</button>
                </div>
            </div>
        </div>
    );
}

export default Profile;

Profile.getLayout = (page) => <SecondLayout>{page}</SecondLayout>