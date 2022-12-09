import SecondLayout from '/layout/second.layout';
import TextInput from '/components/common/TextInput';

function Profile() {
    return ( 
        <div>
            <div className="flex justify-center w-full items-start flex-wrap w-1/2 m-auto mt-5 shadow-lg p-4 border rounded-[20px]">
                <div className="w-full flex justify-center items-center">
                    <div class="avatar">
                        <div class="w-[92px] lg:w-[110px] rounded-[50%]">
                            <img className='hover:scale-110 transition' src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </div>
                <TextInput nameInput="fullname"  calssStyle="w-full md:w-1/2" title="نام و نام خانوادگی" msg="" />
                <TextInput nameInput="fullname"  calssStyle="w-full md:w-1/2" title="کد ملی" msg="" />
                <TextInput nameInput="fullname"  calssStyle="w-full md:w-1/2" title="شماره تلفن" msg="" />
                <TextInput nameInput="fullname"  calssStyle="w-full md:w-1/2" title="تاریخ تولد" msg="" />
                <TextInput nameInput="fullname"  calssStyle="w-full md:w-1/2" title="ایمیل" msg="" />
                <TextInput nameInput="fullname"  calssStyle="w-full md:w-1/2" title="شهر" msg="" />
                <TextInput nameInput="fullname"  calssStyle="w-full" title="آدرس" msg="" />
            </div>
        </div>
     );
}

export default Profile;

Profile.getLayout = (page) => <SecondLayout>{page}</SecondLayout>