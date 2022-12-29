import React from "react";

/* eslint-disable @next/next/no-img-element */
function Comment() {
    const [select, setSelect] = React.useState(null);
    return (
        <>
            <section class="bg-white py-8 lg:py-16 ">
                <div class="max-w-2xl mr-10 px-4">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 ">تعداد نظرات (20)</h2>
                    </div>
                    <form class="mb-6">
                        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                            <label for="comment" class="sr-only">Your comment</label>
                            <textarea id="comment" rows="6"
                                class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                                placeholder="شروع به نوشتن..." required></textarea>
                        </div>
                        <div className="flex justify-center items-center w-full">
                            <p>آیا این پزشک را به دیگران پیشنهاد میدهید؟</p>
                            <label onClick={() => setSelect(1)} className={`btn btn-outline btn-info mr-3 cursor-pointer ${select == 1 ? "btn-active" : ""}`}>بله</label>
                            <label onClick={() => setSelect(0)} className={`btn btn-outline btn-info mx-3 cursor-pointer ${select == 0 ? "btn-active" : ""}`}>خیر</label>
                            <small className="text-[11px] text-red-700">پاسخ به این سوال الزامی است!</small>
                        </div>
                        <button type="submit"
                            class="btn btn-info w-[50%] m-auto mt-10">
                            ثبت نظر
                        </button>
                    </form>
                    <article class="p-6 mb-6 text-base bg-white rounded-lg ">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 text-sm text-gray-900 "><img
                                    class="mr-2 w-12 h-12 rounded-full mx-2"
                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                    alt="Michael Gough" />Michael Gough</p>
                                <p class="text-gray-600  mx-2 "><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>

                        </footer>
                        <p class="text-gray-500 ">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                            instruments for the UX designers. The knowledge of the design tools are as important as the
                            creation of the design strategy.</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                                class="flex items-center text-sm text-gray-500 hover:underline ">
                                <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    {/* replay */}
                    <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-[#eee]  border  rounded-lg">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 text-sm text-gray-900 "><img
                                    class="mr-2 w-12 h-12 rounded-full mx-2"
                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                    alt="Michael Gough" />Michael Gough</p>
                                <p class="text-gray-600  mx-2 "><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>

                        </footer>
                        <p class="text-gray-500 ">Much appreciated! Glad you liked it ☺️</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                                class="flex items-center text-sm text-gray-500 hover:underline ">
                                <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    <article class="p-6 mb-6 text-base bg-white rounded-lg ">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 text-sm text-gray-900 "><img
                                    class="mr-2 w-12 h-12 rounded-full mx-2"
                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                    alt="Michael Gough" />Michael Gough</p>
                                <p class="text-gray-600  mx-2 "><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>

                        </footer>
                        <p class="text-gray-500 ">Very straight-to-point article. Really worth time reading. Thank you! But tools are just the
                            instruments for the UX designers. The knowledge of the design tools are as important as the
                            creation of the design strategy.</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                                class="flex items-center text-sm text-gray-500 hover:underline ">
                                <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                Reply
                            </button>
                        </div>
                    </article>
                    {/* replay */}
                    <article class="p-6 mb-6 ml-6 lg:ml-12 text-base bg-[#eee]  border  rounded-lg">
                        <footer class="flex justify-between items-center mb-2">
                            <div class="flex items-center">
                                <p class="inline-flex items-center mr-3 text-sm text-gray-900 "><img
                                    class="mr-2 w-12 h-12 rounded-full mx-2"
                                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                    alt="Michael Gough" />Michael Gough</p>
                                <p class="text-gray-600  mx-2 "><time pubdate datetime="2022-02-08"
                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                            </div>

                        </footer>
                        <p class="text-gray-500 ">Much appreciated! Glad you liked it ☺️</p>
                        <div class="flex items-center mt-4 space-x-4">
                            <button type="button"
                                class="flex items-center text-sm text-gray-500 hover:underline ">
                                <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                Reply
                            </button>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Comment;