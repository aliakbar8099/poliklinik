/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
function Section4() {
    return (
        <>
            <div className="container-pl flex items-start w-full justify-around pb-5 pt-[150px]">
                <div className="card w-[450px] min-w-[450px]">
                    <div className="card-body">
                        <h2 className="font-bold text-[35px]">بیمه های طرف قرارداد</h2>
                        <p className="mt-4">ما در <span className="text-[#00B6BD]">پلی کلینیک زندگی</span> تلاش می کنیم تا شما با خیال آسوده درمان شوید.<br /> کلینیک ما با بیش از ده بیمه معتبر کشور قرارداد دارد تا شما با کمترین هزینه درمان شوید.</p>
                        <div className="card-actions justify-end ml-auto">
                            <button className='btn px-6  text-[16px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-20'
                            >توضیحات بیشتر</button>
                        </div>
                    </div>
                </div>
                <div className="w-[588px] h-[441px] bg-[#DEEEF2] rounded-[25px] flex items-center justify-around">
                    <div className="h-full flex flex-col justify-around items-center">
                        <a><img src="/img/bime/b1.png" /></a>
                        <a><img src="/img/bime/b2.png" /></a>
                    </div>
                    <div className="h-full flex justify-center items-center">
                        <a><img src="/img/bime/b4.png" /></a>
                    </div>
                    <div className="h-full flex flex-col justify-around items-center">
                        <a><img src="/img/bime/b3.png" /></a>
                        <a><img src="/img/bime/b5.png" /></a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section4;