function CardList({ name, img, lengthJop, positionsJop, rank, onClick, active }) {
    return (
        <article onClick={onClick} className={`flex hover-b items-center border  boredr-[#005974] p-3 rounded-xl mb-3 ${active ? "active" : ""}`}>
            <div class="avatar">
                <div class="w-[70px] lg:w-[90px] rounded-xl">
                    <img className='hover:scale-110 transition' src={img} />
                </div>
            </div>
            <div className='p-1 mr-3 flex justify-center items-start flex-col'>
                <h3 className='font-bold flex items-center'>
                    <span className="text-[12px] lg:text-[15px]">{name}</span>
                    <div style={{ background: rank < 30 ? "#DC3535" : rank < 60 ? "#ff931d" : "#28a745" }} class="bg-[#28a745] mr-2 flex items-center py-1 px-3 rounded-[50px] text-[#fff] text-[8px] lg:text-[10px] mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                        </svg>
                        <span className='mr-1'>{rank}%</span>‍
                    </div>
                </h3>
                <div>
                    <small className="text-[10px] lg:text-[15px]">{lengthJop} سال سابقه</small>
                </div>
                <div className='text-center'>
                    {
                        positionsJop?.map((position, i) => (
                            <div key={i} className="badge badge-outline mt-1 ml-1 text-[10px]">
                                {position}
                            </div>
                        ))
                    }
                </div>
            </div>
            <button className='btn hidden lg:flex btn-success bg-[#005974] border-[#005974] hover:bg-[#005974ec] w-[auto] lg:w-[150px] text-[14px] mt-auto justify-between text-[#fff] mr-auto my-auto'>
                <span className='text-[9px] lg:text-[12px]'>دریافت نوبت</span>
                <svg className="hidden lg:block" width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bccac604="" data-v-48b88f42=""><title data-v-bccac604="" data-v-48b88f42="">icon</title> <path d="M5.25 10.3118L0.75 5.81177L5.25 1.31177" stroke="white" stroke-opacity="0.66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-bccac604="" data-v-48b88f42=""></path></svg>
            </button>
            <svg className="mr-auto block lg:hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
        </article>
    );
}

export default CardList;