import moment from "moment-jalaali";
import React from "react";
import { toast } from "react-toastify";
import { getTimeReserveComplet } from "../../../services/get-api";
import { addRezerveTimeUser } from "../../../services/update";
import { getTimeReserve } from "/services/get-api";
import { useRouter } from "next/router";
import SelectOption from "/components/common/SelectOption";

function range(end, start = 0, step = 1) {
    let result = [];
    for (let i = start; i <= end; i += step) {
        result.push(i);
    }
    return result;
}

function MinItem(g) {
    return g.find(
        (i) =>
            i.number ==
            Math.min.apply(
                null,
                g.map((i) => i.number)
            )
    );
}

function TabelTime({
    weeks,
    value,
    loading,
    setLoading,
    setRezs,
    getStatus,
    complete,
    setComplete,
}) {
    const router = useRouter();

    let rez = [];

    let weekVlaue = [];

    weekVlaue = [];

    const [selectTime, setSelctTime] = React.useState(null);
    const [time, setTime] = React.useState(null);
    const [selectName, setSelectName] = React.useState("");
    const [selectValue, setSelectValue] = React.useState("");

    // const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        if (!localStorage.getItem("access-token")) {
            router.push("/reserve");
        }
        if (router.query.id) {
            getTimeReserve(value?.NationalCode).then((res) => {
                setTime(res.data);
            });
        }
    }, [router.query]);

    range(5, 1).map((i) => {
        let getDay = new Date().getDay();
        time?.weekDay.map((item) => {
            let number = parseInt(item.number);
            if (getDay > number) {
                number += 7;
            }
            item["date"] = getDate(number || 7, i);
            item["tiemValue"] = getDate(number || 7, i, true);
            weekVlaue.push({ ...item });
        });
    });

    function getDate(d, w = 1, value = false) {
        let timeC = new Date();
        let timeV = new Date(
            timeC.getFullYear(),
            timeC.getMonth(),
            timeC.getDate()
        ).setHours(24 * Math.abs(d - new Date().getDay()));

        if (value)
            return new Date(new Date(timeV).setHours(24 * 7 * (w - 1))).getTime();
        return moment(new Date(timeV).setHours(24 * 7 * (w - 1))).format(
            "jYYYY/jM/jD"
        );
    }

    React.useEffect(() => {
        setSelctTime(weekVlaue[0]);
        getStatus(
            weekVlaue[0]?.number,
            time?.NationalCode,
            weekVlaue[0]?.tiemValue
        );
        return () => {
            weekVlaue = [];
            setSelctTime(null);
        };
    }, [time]);

    function submitRezerveTime(n, nc, i, tv, e) {
        document.getElementById("confrimRez").classList.add("modal-open");
        document.querySelector("#confrimRez .bton").textContent =
            " روز " +
            selectTime.week +
            " " +
            selectTime.date +
            " " +
            e.target.textContent;
        let userNCode = JSON.parse(localStorage.getItem("user"));
        let dataUser = {
            fullname: document.getElementsByName("fullname")[0].value,
            phoneNumber: document.getElementsByName("phonenumber")[0].value,
            reason: document.getElementsByName("what")[0].value,
        };
        setRezs({
            number: n,
            NativeCode: nc,
            obj: {
                complete: {
                    user: dataUser,
                    doctor: {
                        fullname: value?.fullname,
                        phoneNumber: value?.phoneNumber,
                        img: value?.img,
                        category: value?.category
                    },
                    tiemValue: tv,
                    index: i,
                    time: e.target.textContent.split(" ")[2],
                    date: selectTime.date,
                    week: selectTime.week,
                    userNCode: userNCode?.NationalCode,
                },
            },
        });
    }

    range(selectTime?.orderVisit).map((i) => {
        rez.push(i);
    });

    complete?.map((i) => {
        rez[i.index] = "complete";
    });

    weekVlaue.sort(({ tiemValue: a }, { tiemValue: b }) =>
        a > b ? 1 : a < b ? -1 : 0
    );
    weekVlaue = weekVlaue.filter((i) => i.tiemValue > new Date().getTime());

    const hours = (i) =>
        parseInt(selectTime?.inputDate.split(":")[1]) +
        i * selectTime?.lengthTimeVisit;

    return (
        <>
            <div className="pb-32">
                <>
                    {!selectTime ? (
                        <div
                            style={{ background: "#eee6" }}
                            className=" p-2 mt-10 rounded-[20px] flex justify-start items-start h-[300px]"
                        >
                            <div className="flex flex-col items-center min-w-[210px] m-auto w-[210px] p-1 h-[260px] overflow-auto overflow-x-hidden border border-2 border-[#0000] rounded-3xl skeleton"></div>
                            <div className="w-full flex justify-start items-start flex-wrap p-3 overflow-auto">
                                {range(31).map((i) => (
                                    <button
                                        key={i}
                                        className="rounded-[20px] p-5 m-1 skeleton"
                                        style={{ width: 100, height: 55 }}
                                    ></button>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div
                            id="gthjs"
                            className="border relative border-[3px] border-[#eee] p-2 mt-10 rounded-[20px] flex justify-start items-start flex-col lg:flex-row h-[300px] overflow-auto nh_ns"
                        >
                            <div
                                className={`flex flex-col items-center min-w-[210px] w-[210px] p-1 m-auto h-[260px] overflow-auto overflow-x-hidden border border-2 border-[#ccc] rounded-3xl sticky top-1 bg-[#fff] z-10 tb-d`}
                                style={{ position: "sticky", top: 10 }}
                            >
                                {weekVlaue?.map((i, n) => (
                                    <button
                                        onClick={() => {
                                            setSelctTime(i);
                                            getStatus(i.number, time?.NationalCode, i.tiemValue);
                                        }}
                                        key={i.number}
                                        className={`bton btn-tb w-[90%] p-5 m-2 border  boredr-1 border-[#0003] rounded-[20px] show_active ${selectTime?.tiemValue == i.tiemValue ? "active" : ""
                                            }`}
                                    >
                                        <span>{i.week}</span>
                                        <span className="mr-3">{i.date}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="w-full flex justify-start items-start flex-wrap p-3 jb-ds">
                                {loading ? (
                                    <>
                                        <Loading />
                                    </>
                                ) : (
                                    range(selectTime?.orderVisit).map((item, i) => (
                                        <>
                                            <button
                                                style={{
                                                    animation: `show_move-a ease ${0.2 * (i / 8)}s`,
                                                }}
                                                id={"we" + i}
                                                disabled={rez[i] == "complete"}
                                                onClick={(e) =>
                                                    submitRezerveTime(
                                                        selectTime?.number,
                                                        time?.NationalCode,
                                                        i,
                                                        selectTime?.tiemValue,
                                                        e
                                                    )
                                                }
                                                htmlFor="confrimRez"
                                                key={item}
                                                className={`bton T_btn p-5 m-1 border cursor-pointer time  boredr-1 border-[#0003] rounded-[20px] show_active show_move-a
                                                ${rez[i] == "complete"
                                                        ? "disabled"
                                                        : "show"
                                                    }`}
                                            >
                                                <span>
                                                    {" "}
                                                    ساعت &nbsp;
                                                    {Math.floor(
                                                        (parseInt(selectTime?.inputDate.split(":")[1]) +
                                                            item * selectTime?.lengthTimeVisit) /
                                                        60
                                                    ) + parseInt(selectTime?.inputDate.split(":")[0])}
                                                    :
                                                    {hours(item) % 60 < 10
                                                        ? "0" + (hours(item) % 60)
                                                        : hours(item) % 60}
                                                </span>
                                            </button>
                                        </>
                                    ))
                                )}
                            </div>
                        </div>
                    )}
                </>
                {/* <div>
                <SelectOption {...{ selectValue, setSelectValue, selectName, setSelectName }} className="w-[90%] mt-10 m-auto" titleName="نوع بیمه" items={[
                    {_id:1 , title:"بیمه 1"},
                    {_id:1 , title:"بیمه 2"},
                    {_id:1 , title:"بیمه 3"},
                    {_id:1 , title:"بیمه 4"}
                ]} />
                </div> */}
            </div>
        </>
    );
}

export default TabelTime;
function Loading() {
    return (
        <div className="flex justify-center items-center w-full mt-10">
            <svg
                xlink="http://www.w3.org/1999/xlink"
                width="130px"
                height="130px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle cx="80" cy="50" r="5" fill="#93dbe9">
                    <animate
                        attributeName="cx"
                        values="80;50"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="cy"
                        values="50;80"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="fill"
                        values="#93dbe9;#689cc5"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
                <circle cx="50" cy="80" r="5" fill="#689cc5">
                    <animate
                        attributeName="cx"
                        values="50;20"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="cy"
                        values="80;50.00000000000001"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="fill"
                        values="#689cc5;#5e6fa3"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
                <circle cx="20" cy="50.00000000000001" r="5" fill="#5e6fa3">
                    <animate
                        attributeName="cx"
                        values="20;49.99999999999999"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="cy"
                        values="50.00000000000001;20"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="fill"
                        values="#5e6fa3;#3b4368"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
                <circle cx="49.99999999999999" cy="20" r="5" fill="#3b4368">
                    <animate
                        attributeName="cx"
                        values="49.99999999999999;80"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="cy"
                        values="20;49.99999999999999"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                    <animate
                        attributeName="fill"
                        values="#3b4368;#93dbe9"
                        keyTimes="0;1"
                        dur="0.3847953216374269s"
                        repeatCount="indefinite"
                    ></animate>
                </circle>
            </svg>
        </div>
    );
}
