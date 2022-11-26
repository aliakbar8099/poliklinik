function CardStaff({position , img}) {
    return (
        <>
            <div className="card w-[255px] mt-10 border bg-base-100 shadow-lg p-5 pb-0 flex justify-center items-center flex-col mx-4 cursor-pointer transition-all hover:scale-110">
                <figure className="rounded-[50%] w-[92px] h-[92px]">
                    <img src="./img/staff/a5.png" alt="Shoes" className="rounded-xl w-[100%] h-[100%] object-cover" />
                </figure>
                <div className="card-body items-center text-center pt-2 px-8">
                    <h2 className="card-title text-[#005974] text-[15px]">دکتر مهسا کریمی</h2>
                    <small className="text-[#0007]">متخصص dfdfdf</small>
                    <h3 className="font-bold mt-4">دوشنبه</h3>
                    <h3 className="font-bold">ساعت 10 تا 18</h3>
                    <div className="card-actions mt-4">
                        <button class="btn px-10 btn-ghost hover:bg-[#005974] text-[#005974] hover:text-[#fff] border border-[#005974]">نوبت بگیر</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CardStaff;