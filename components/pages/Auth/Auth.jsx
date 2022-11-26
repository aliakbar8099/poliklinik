import React from "react";
import TextInput from "../../common/TextInput";

function Auth({ pageId, setPageId }) {
    const [number, setNumber] = React.useState("")

    function handlePageChnage(id) {
        setTimeout(() => {
            setPageId(id)
        }, 100);
    }

    function handleInput(e) {
        let elements = document.getElementsByClassName("2fcode");
        let index = parseInt(e.target.getAttribute("indexedInput"));
        if (e.target.value) {
            console.log(elements[index + 1]?.focus());
        } else if (e.target.value == "") {
            elements[index - 1]?.focus()
        }

    }

    function SingnIn() {
        return (
            <div className="w-full">
                <h3 className="text-xl font-bold">ثبت نام</h3>
                <h6 className="text-lg font-bold"></h6>
                <TextInput msg="" title="نام کامل" calssStyle="w-full" type="text" placeholder="نام و نام خانوادگی" />
                <TextInput msg="" title="شماره موبایل" calssStyle="w-full tracking-wide text-[18px]" type="number" placeholder="09" />
                <button className='btn px-9 w-full  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10'
                >ارسال کد تایید</button>
                <label className="btn btn-ghost m-3" onClick={() => handlePageChnage(1)}>قبلا ثبت نام کردم</label>
            </div>
        )
    }
    

    function Login() {
        const [value, setValue] = React.useState({
            number: null
        })
        const [msg, setMsg] = React.useState({
            type: "",
            text: ""
        })
        const [loading, setLoading] = React.useState(false)

        function getValue(e) {
            setMsg({
                type: "",
                text: ""
            })
            setValue({ ...value, [e.target.name]: e.target.value })
        }


        function handleSubmit(e) {
            if (!value.number || value.number === "") {
                setMsg({
                    type: "number",
                    text: "شماره موبایل را وارد کنید!"
                })
                document.querySelector("input[name=number]").focus();
            }
            else if (!(/^(\+98|0)?9\d{9}$/.test(value.number[0] == 0 ? "+98" + value.number.substring(1,) : "+98" + value.number))) {
                setMsg({
                    type: "number",
                    text: "شماره موبایل را درست وارد کنید"
                })
                document.querySelector("input[name=number]").focus();
            }
            else {
                setLoading(true)
                setTimeout(() => {
                    setLoading(false)
                    setPageId(2)
                }, 3000);
            }
        }

        return (
            <div className="w-full">
                <h3 className="text-xl font-bold">ورود به نرم افزار</h3>
                <h6 className="text-lg font-bold"></h6>
                <TextInput nameInput="number" msg={msg.type == "number" ? msg.text : ""} onGetValue={getValue} title="شماره موبایل" calssStyle="w-full tracking-wide text-[18px]" type="number" placeholder="09" />
                <button disabled={loading} dir="ltr" onClick={handleSubmit}
                    className={`${loading ? "loading" : ""} btn px-9 w-full  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-5`}
                >{loading ? "درحال ارسال کد ..." : "ارسال کد تایید"}</button>
                <label msg="" className="btn btn-ghost m-3" onClick={() => handlePageChnage(0)}>ساخت حساب</label>
            </div>
        )
    }

    function TowFCode() {
        return (
            <div className="w-full">
                <h3 className="text-xl font-bold">کد تایید ({number})</h3>
                <h6 className="text-lg font-bold"></h6>
                <div className="flex items-center w-[66%] lg:w-[44%] m-auto" dir="ltr">
                    <TextInput msg="" indexedInput={0} onInputText={handleInput} inputStyle="2fcode" inputId="2fcode1" calssStyle="w-full tracking-wide text-[18px]" dir="ltr" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" placeholder="-" />
                    <TextInput msg="" indexedInput={1} onInputText={handleInput} inputStyle="2fcode" inputId="2fcode2" calssStyle="w-full tracking-wide text-[18px]" dir="ltr" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" placeholder="-" />
                    <TextInput msg="" indexedInput={2} onInputText={handleInput} inputStyle="2fcode" inputId="2fcode3" calssStyle="w-full tracking-wide text-[18px]" dir="ltr" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" placeholder="-" />
                    <TextInput msg="" indexedInput={3} onInputText={handleInput} inputStyle="2fcode" inputId="2fcode4" calssStyle="w-full tracking-wide text-[18px]" dir="ltr" type="text" maxLength="1" size="1" min="0" max="9" pattern="[0-9]{1}" placeholder="-" />
                </div>
                <div className="w-full flex justify-center items-center text-indigo-500">
                    <p onClick={() => handlePageChnage(1)} className="btn btn-ghost text-center">ویرایش شماره موبایل</p>
                </div>
                <button className='btn px-9 w-full  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10'
                >تایید</button>
            </div>
        )
    }

    return (
        <>
            {
                pageId === 0 ?
                    <SingnIn /> :
                    pageId === 1 ?
                        <Login /> :
                        pageId === 2 ?
                            <TowFCode /> : null

            }
        </>
    )

}

export default Auth;