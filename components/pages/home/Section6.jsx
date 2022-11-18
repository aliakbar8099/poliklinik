/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
function Section6() {
    return ( 
        <>
            <div className="bg-gradient-to-r from-[#1D5760] to-[#4ECCC4] container-pl flex flex-col lg:flex-row justify-between rounded-t-[50px] pl-4 lg:pl-6 pt-10 pr-4 lg:pr-32">
                <div className="w-[100%] lg:w-1/2 flex justify-center items-center flex-col">
                    <p className="text-[26px] lg:text-[35px] text-center font-bold text-white mb-16">ایجاد تجربه ای بهتر<br /> با عضویت در <span className="text-[#00EED1]">پلی کلینیک زندگی</span></p>
                    <div className="bg-white flex justify-between items-center p-2 rounded-[40px] mt-20px w-full pr-5">
                        <input type="number" className="w-full text-[12px] sm:text-[10px]" placeholder="شماره تلفن خود را وارد کنید." />
                        <button className="btn btn-ghost text-[#fff] font-normal bg-[#338C8D] rounded-[40px] hover:bg-[#338C8D] hover:opacity-75 text-[10px] sm:text-[16px]">همین الان عضو شوید</button>
                    </div>
                </div>
                <div className="p-5 lg:p-0">
                    <img src="/img/s6av.png" />
                </div>
            </div>
        </>
     );
}

export default Section6;