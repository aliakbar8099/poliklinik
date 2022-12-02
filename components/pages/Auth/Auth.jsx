import { useRouter } from "next/router";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { postLogin, postRegister } from "../../../services/auth";
import TextInput from "../../common/TextInput";

function Auth({ pageId, setPageId, login, setLogin, setChange }) {
    const [NativeCode, setNativeCode] = React.useState("");
    const router = useRouter();

    function handlePageChnage(id) {
        setTimeout(() => {
            setPageId(id);
        }, 100);
    }

    function handleInput(e) {
        let elements = document.getElementsByClassName("2fcode");
        let index = parseInt(e.target.getAttribute("indexedInput"));
        if (e.target.value) {
            console.log(elements[index + 1]?.focus());
        } else if (e.target.value == "") {
            elements[index - 1]?.focus();
        }
    }

    function SingnIn() {
        const [value, setValue] = React.useState({
            fullname: null,
            NationalCode: null,
            phoneNumber: null,
            password: null,
            password2: null,
        });

        React.useEffect(() => {
            setValue({ ...value, NationalCode: NativeCode });
        }, [])

        const [msg, setMsg] = React.useState({
            type: "",
            text: "",
        });
        const [loading, setLoading] = React.useState(false);

        function getValue(e) {
            setMsg({
                type: "",
                text: "",
            });
            setValue({ ...value, [e.target.name]: e.target.value });
        }

        function handleSubmit(e) {
            e.preventDefault();
            if (!value.fullname || value.fullname === "") {
                toast.error("نام و نام خانوادگی را وارد کنید!");
                document.querySelector(`input[name=fullname]`).focus();
            } else if (!value.NationalCode || value.NationalCode === "") {
                toast.error("کد ملی وارد کنید!");
                document.querySelector(`input[name=nationalCode]`).focus();
            } else if (!value.phoneNumber || value.phoneNumber === "") {
                toast.error("شماره موبایل را وارد کنید!");
                document.querySelector(`input[name=number]`).focus();
            } else if (
                !/^(\+98|0)?9\d{9}$/.test(
                    value.phoneNumber[0] == 0
                        ? "+98" + value.phoneNumber.substring(1)
                        : "+98" + value.phoneNumber
                )
            ) {
                toast.error("فرمت شماره موبایل درست نیست");
            } else if (!value.password || value.password === "") {
                toast.error("رمز عبور را وارد کنید!");
                document.querySelector(`input[name=password]`).focus();
            } else if (value.password != value.password2) {
                toast.error("رمز عبور برابر نیست!");
                document.querySelector(`input[name=password]`).focus();
            } else if (value.password.length < 6) {
                toast.error("رمز عبور باید حداقل 6 کاراکتر باشد!");
                document.querySelector(`input[name=password]`).focus();
            } else {
                setLoading(true);
                postRegister(value)
                    .then((response) => {
                        toast.error(response.msg);
                        localStorage.setItem("access-token", response.token);
                        router.reload()
                        document.getElementById("modalAuth").checked = false
                        setChange(new Date());
                        setLoading(false);
                    })
                    .catch((error) => {
                        setLoading(false);
                        toast.error(error.response.data.msg);
                    });
            }
        }
        return (
            <form className="w-full" onSubmit={handleSubmit}>
                <h3 className="text-xl font-bold">ثبت نام</h3>
                <h6 className="text-lg font-bold"></h6>
                <div className="flex items-center flex-wrap">
                    <TextInput
                        nameInput="fullname"
                        msg={msg.type == "fullname" ? msg.text : ""}
                        onGetValue={getValue}
                        title="نام کامل"
                        calssStyle="w-1/2"
                        type="text"
                        placeholder="نام و نام خانوادگی"
                    />
                    <TextInput
                        nameInput="NationalCode"
                        msg={msg.type == "NationalCode" ? msg.text : ""}
                        onGetValue={getValue}
                        title="کد ملی"
                        inputStyle="scds"
                        calssStyle="w-1/2 tracking-wide text-[18px]"
                        type="number"
                        nationalCode={true}
                        defaultValue={NativeCode}
                        placeholder="شماره شناسنامه"
                    />
                    <TextInput
                        nameInput="phoneNumber"
                        msg={msg.type == "phoneNumber" ? msg.text : ""}
                        onGetValue={getValue}
                        title="شماره موبایل"
                        calssStyle="w-full tracking-wide text-[18px]"
                        type="number"
                        placeholder="09"
                    />
                    <TextInput
                        nameInput="password"
                        msg={msg.type == "password" ? msg.text : ""}
                        onGetValue={getValue}
                        title="رمز عبور"
                        inputStyle="scds"
                        calssStyle="w-1/2 tracking-wide text-[18px]"
                        type="password"
                        dir="ltr"
                        placeholder="رمز عبور"
                    />
                    <TextInput
                        nameInput="password2"
                        msg={msg.type == "password2" ? msg.text : ""}
                        onGetValue={getValue}
                        title="تکرار رمز عبور"
                        inputStyle="scds"
                        calssStyle="w-1/2 tracking-wide text-[18px]"
                        type="password"
                        dir="ltr"
                        placeholder="تکرار رمز عبور"
                    />
                </div>
                <button
                    disabled={loading}
                    dir="ltr"
                    onClick={handleSubmit}
                    className={`${loading ? "loading" : ""
                        } btn px-9 w-full  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-5`}
                >
                    {loading ? "لطفا صبر کنید ..." : "ساخت حساب"}
                </button>
                <label
                    className="btn btn-ghost m-3"
                    onClick={() => handlePageChnage(1)}
                >
                    قبلا ثبت نام کردم
                </label>
            </form>
        );
    }

    function Login() {
        const [value, setValue] = React.useState({
            NationalCode: null,
            password: null,
        });
        const [msg, setMsg] = React.useState({
            type: "",
            text: "",
        });
        const [loading, setLoading] = React.useState(false);

        function getValue(e) {
            setMsg({
                type: "",
                text: "",
            });
            setValue({ ...value, [e.target.name]: e.target.value });
        }

        function handleSubmit(e) {
            if (!value.NationalCode || !value.password) {
                toast.error("فیلد هارو پر کنید!")
                document.querySelector("input[name=number]").focus();
                return false;
            }
            setLoading(true)
            postLogin(value)
                .then((response) => {
                    localStorage.setItem("access-token", response.token);
                    router.reload()
                    document.getElementById("modalAuth").checked = false
                    setChange(new Date());
                    setLoading(false);
                })
                .catch((error) => {
                    setLoading(false);
                    if (error.response.status === 404) {
                        handlePageChnage(0);
                        setNativeCode(value.NationalCode)
                    }
                    toast.error(error.response.data.msg);
                });

        }

        return (
            <div className="w-full">
                <h3 className="text-xl font-bold">ورود به نرم افزار</h3>
                <h6 className="text-lg font-bold"></h6>
                <TextInput
                    nameInput="NationalCode"
                    msg={msg.type == "NationalCode" ? msg.text : ""}
                    onGetValue={getValue}
                    title="کد ملی"
                    calssStyle="w-full tracking-wide text-[18px]"
                    type="number"
                    inputStyle="scds"
                    placeholder="کد ملی وارد کنید"
                />
                <TextInput
                    nameInput="password"
                    msg={msg.type == "password" ? msg.text : ""}
                    onGetValue={getValue}
                    inputStyle="scds"
                    title="رمز عبور"
                    dir="ltr"
                    calssStyle="w-full tracking-wide text-[18px]"
                    type="password"
                    placeholder="رمز عبور را وارد کنید"
                />
                <button
                    disabled={loading}
                    dir="ltr"
                    onClick={handleSubmit}
                    className={`${loading ? "loading" : ""
                        } btn px-9 w-full  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-5`}
                >
                    {loading ? "درحال ارسال کد ..." : "ارسال کد تایید"}
                </button>
                <label
                    msg=""
                    className="btn btn-ghost m-3"
                    onClick={() => handlePageChnage(0)}
                >
                    ساخت حساب
                </label>
            </div>
        );
    }

    function TowFCode() {
        return (
            <div className="w-full">
                <h3 className="text-xl font-bold">کد تایید ({number})</h3>
                <h6 className="text-lg font-bold"></h6>
                <div className="flex items-center w-[66%] lg:w-[44%] m-auto" dir="ltr">
                    <TextInput
                        msg=""
                        indexedInput={0}
                        onInputText={handleInput}
                        inputStyle="2fcode"
                        inputId="2fcode1"
                        calssStyle="w-full tracking-wide text-[18px]"
                        dir="ltr"
                        type="text"
                        maxLength="1"
                        size="1"
                        min="0"
                        max="9"
                        pattern="[0-9]{1}"
                        placeholder="-"
                    />
                    <TextInput
                        msg=""
                        indexedInput={1}
                        onInputText={handleInput}
                        inputStyle="2fcode"
                        inputId="2fcode2"
                        calssStyle="w-full tracking-wide text-[18px]"
                        dir="ltr"
                        type="text"
                        maxLength="1"
                        size="1"
                        min="0"
                        max="9"
                        pattern="[0-9]{1}"
                        placeholder="-"
                    />
                    <TextInput
                        msg=""
                        indexedInput={2}
                        onInputText={handleInput}
                        inputStyle="2fcode"
                        inputId="2fcode3"
                        calssStyle="w-full tracking-wide text-[18px]"
                        dir="ltr"
                        type="text"
                        maxLength="1"
                        size="1"
                        min="0"
                        max="9"
                        pattern="[0-9]{1}"
                        placeholder="-"
                    />
                    <TextInput
                        msg=""
                        indexedInput={3}
                        onInputText={handleInput}
                        inputStyle="2fcode"
                        inputId="2fcode4"
                        calssStyle="w-full tracking-wide text-[18px]"
                        dir="ltr"
                        type="text"
                        maxLength="1"
                        size="1"
                        min="0"
                        max="9"
                        pattern="[0-9]{1}"
                        placeholder="-"
                    />
                </div>
                <div className="w-full flex justify-center items-center text-indigo-500">
                    <p
                        onClick={() => handlePageChnage(1)}
                        className="btn btn-ghost text-center"
                    >
                        ویرایش شماره موبایل
                    </p>
                </div>
                <button className="btn px-9 w-full  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10">
                    تایید
                </button>
            </div>
        );
    }

    return (
        <>
            {pageId === 0 ? (
                <SingnIn  />
            ) : pageId === 1 ? (
                <Login />
            ) : pageId === 2 ? (
                <TowFCode />
            ) : null}
        </>
    );
}

export default Auth;
