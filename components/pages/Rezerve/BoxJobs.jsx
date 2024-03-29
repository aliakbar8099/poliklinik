
import { useRouter } from "next/router";
import React from "react";

function BoxJobs({ fullname, img, lengthJop, positionsJop, bio, codeJop, rank, login, handleClick, _id, tabletime }) {
    const router = useRouter()
    const [load, setLoad] = React.useState(false);

    function handleLoad(e) {
        setLoad(false)
        if (e.target.complete) {
            setLoad(true)
        }

    }

    return (
        <>
            <div className="flex sm:flex-col items-center justify-center min-w-[250px]">
                <header className='mt-2'>
                    <div class="avatar">
                        <div class="w-[140px] rounded-xl">
                            <>
                                <img hidden={!load} onLoad={handleLoad} className='hover:scale-110 transition' src={img} />
                                <div hidden={load} className="skeleton w-full h-full"></div>
                            </>
                        </div>
                    </div>
                    <h2 className='text-center font-bold p-2 mt-2'>{fullname}</h2>
                </header>
                <div className="flex flex-col justify-between items-center w-full">
                    <p className='mt-1 text-[12px]'>{lengthJop} سال سابقه</p>
                    <p className='mt-1 text-[12px]'>شماره نظام پزشکی: {codeJop}</p>
                    <div className='p-4 text-center'>
                        {
                            positionsJop?.map((position, i) => (
                                <div key={position.id} className="badge badge-outline mt-1 ml-1 text-[10px]">
                                    {position.text}
                                </div>
                            ))
                        }
                    </div>
                    <div style={{ background: rank < 30 ? "#ff0000" : rank < 60 ? "#ff931d" : "#28a745" }} class="transition bg-[#28a745] flex items-center py-1 px-3 rounded-[50px] text-[#fff] text-[12px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                        </svg>
                        <span className='mr-1'>{rank}%</span>‍
                    </div>
                </div>
            </div>
            <div className="">
                <h3 className='flex justify-center items-center p-2 mt-2'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-d2eff238=""><title data-v-d2eff238="">icon</title> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.62356 2.35132C2.85479 2.21713 3.13998 2.21617 3.3721 2.34882L6.5 4.13619L9.6279 2.34882C9.85847 2.21706 10.1415 2.21706 10.3721 2.34882L13.5 4.13619L16.6279 2.34882C16.86 2.21617 17.1452 2.21713 17.3764 2.35132C17.6077 2.48551 17.75 2.73265 17.75 3V11.25H21C21.4142 11.25 21.75 11.5858 21.75 12V19C21.75 20.5188 20.5188 21.75 19 21.75H9H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549V15V3C2.25 2.73265 2.39232 2.48551 2.62356 2.35132ZM19 20.25C19.6904 20.25 20.25 19.6904 20.25 19V12.75H17.75V19C17.75 19.6904 18.3096 20.25 19 20.25ZM16.5499 20.25H9C7.56458 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15V4.29238L6.1279 5.65118C6.35847 5.78294 6.64153 5.78294 6.8721 5.65118L10 3.86381L13.1279 5.65118C13.3585 5.78294 13.6415 5.78294 13.8721 5.65118L16.25 4.29239V12V19C16.25 19.4501 16.3581 19.875 16.5499 20.25ZM6.25 9C6.25 8.58579 6.58579 8.25 7 8.25H11C11.4142 8.25 11.75 8.58579 11.75 9C11.75 9.41421 11.4142 9.75 11 9.75H7C6.58579 9.75 6.25 9.41421 6.25 9ZM7 12.25C6.58579 12.25 6.25 12.5858 6.25 13C6.25 13.4142 6.58579 13.75 7 13.75H13C13.4142 13.75 13.75 13.4142 13.75 13C13.75 12.5858 13.4142 12.25 13 12.25H7ZM6.25 17C6.25 16.5858 6.58579 16.25 7 16.25H13C13.4142 16.25 13.75 16.5858 13.75 17C13.75 17.4142 13.4142 17.75 13 17.75H7C6.58579 17.75 6.25 17.4142 6.25 17Z" fill="currentColor" data-v-d2eff238=""></path></svg>
                    <span className='mr-2'>بیوگرافی پزشک</span>
                </h3>
                {/* <p className='text-[12px] px-2 text-justify'>
                    {JSON.stringify(bio)}
                </p> */}
                <p id="bios" style={{height:tabletime?.id ? 200 : 170}} className='text-[12px] px-2 text-justify overflow-auto mt-5' dangerouslySetInnerHTML={{ __html: bio }} />
            </div>
            {
                tabletime?.id ?
                    // <button onClick={() => handleClick(_id)} className='btn btn-success w-full sm:w-[150px] lg:w-full mt-auto justify-between'>
                    //     {/* <span>ثبت نهایی نوبت</span>
                    //     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    //         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    //         <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    //     </svg> */}
                    // </button>
                    null
                    :
                    <button onClick={() => handleClick(_id)} className='btn btn-success bg-[#005974] border-[#005974] hover:bg-[#005974ec] w-full sm:w-[150px] lg:w-full mt-auto justify-between text-[#fff]'>
                        <span>دریافت نوبت</span>
                        <svg width="8" height="16" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-bccac604="" data-v-48b88f42=""><title data-v-bccac604="" data-v-48b88f42="">icon</title> <path d="M5.25 10.3118L0.75 5.81177L5.25 1.31177" stroke="white" stroke-opacity="0.66" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-v-bccac604="" data-v-48b88f42=""></path></svg>
                    </button>
            }
        </>
    );
}

export default BoxJobs;