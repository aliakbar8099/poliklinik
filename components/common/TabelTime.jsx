import moment from "moment-jalaali";
import React from "react";
import { toast } from "react-toastify";
import { getTimeReserveComplet } from "../../services/get-api";
import { addRezerveTimeUser } from "../../services/update"

let options = { year: 'numeric', month: 'long', day: 'numeric' };

function range(end, start = 0, step = 1) {
    let result = []
    for (let i = start; i <= end; i += step) {
        result.push(i)
    }
    return result
}


function TabelTime({ time, weeks }) {
    let rez = []


    let weekVlaue = []

    function getDate(d, w = 1, value = false) {
        if (value)
            return new Date(time?.createtime + ((3600 * 24 * 7 * 1000) * (w - 1)) + (3600 * 24 * 1000 * Math.abs(d - (new Date().getDay() + 2)))).getTime()
        return moment(new Date(time?.createtime + ((3600 * 24 * 7 * 1000) * (w - 1)) + (3600 * 24 * 1000 * Math.abs(d - (new Date().getDay() + 2))))).format('jYYYY/jM/jD')
    }

    weekVlaue = []

    range(5, 1).map(i => {
        time?.weekDay.map(item => {
            item["date"] = getDate(parseInt(item.number) || 8, i)
            item["tiemValue"] = getDate(parseInt(item.number) || 8, i, true)

            weekVlaue.push({ ...item })

        })
    })


    const [selectTime, setSelctTime] = React.useState(null)

    const [complete, setComplete] = React.useState([]);

    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setSelctTime(weekVlaue[0])
        getStatus(weekVlaue[0]?.number, time?.NationalCode, weekVlaue[0]?.tiemValue);
    }, [time])

    function getStatus(n, nc, tv) {
        setLoading(true)
        getTimeReserveComplet(n, nc, tv).then(res => {
            setComplete(res.data)
            setLoading(false)
        })
    }

    function submitRezerveTime(n, nc, i, tv, e) {
        setLoading(true)
        const id = toast.loading(e.target.textContent + "در حال رزور ")
        addRezerveTimeUser(n, nc, { complete: { tiemValue: tv, index: i } }).then(res => {
            getStatus(n, time?.NationalCode, tv);
            toast.update(id, {
                render: " روز " + selectTime.week + " " + selectTime.date + " " + e.target.textContent + " رزرو شد ",
                type: "success", isLoading: false, autoClose: 8000
            });
        })
    }


    range(selectTime?.orderVisit).map(i => {
        rez.push(i)
    })

    complete?.map(i => {
        rez[i.index] = "complete"
    })

    return (
        <>
            <div>
                <>
                    {
                        !selectTime ?
                            <div className="border border-[3px] border-[#ccc] p-2 mt-10 rounded-[20px] flex justify-start items-start h-[300px]">
                                <div className="flex flex-col items-center min-w-[180px] m-auto w-[180px] p-1 h-[260px] overflow-auto overflow-x-hidden border border-2 border-[#0000] rounded-3xl skeleton"></div>
                                <div className="w-full flex justify-start items-start flex-wrap p-3 overflow-auto">
                                    {
                                        range(31).map(i => (
                                            <button key={i} className="rounded-[20px] p-5 m-1 skeleton" style={{ width: 100, height: 55 }}></button>
                                        ))
                                    }
                                </div>
                            </div>
                            :
                            <div className="border border-[3px] border-[#ccc] p-2 mt-10 rounded-[20px] flex justify-start items-start flex-col lg:flex-row h-[300px] overflow-auto">
                                <div className={`flex flex-col items-center min-w-[180px] w-[180px] p-1 m-auto h-[260px] overflow-auto overflow-x-hidden border border-2 border-[#ccc] rounded-3xl sticky top-1`} style={{position:"sticky" , top:10}}>
                                    {
                                        weekVlaue?.map((i, n) => (
                                            <button onClick={() => {
                                                setSelctTime(i)
                                                getStatus(i.number, time?.NationalCode, i.tiemValue);
                                            }} key={i.number} className={`bton w-[90%] p-5 m-2 border  boredr-1 border-[#0003] rounded-[20px] show_active ${selectTime?.tiemValue == i.tiemValue ? "active" : ""}`}>
                                                <span>{i.week}</span>
                                                <span className="mr-3">{i.date}</span>
                                            </button>
                                        ))
                                    }
                                </div>
                                <div className="w-full flex justify-start items-start flex-wrap p-3">
                                    {
                                        loading ?
                                            <>
                                                <Loading />
                                            </>
                                            :
                                            range(selectTime?.orderVisit).map((item, i) => (
                                                <>
                                                    <button disabled={rez[i] == "complete"} onClick={(e) => submitRezerveTime(selectTime?.number, time?.NationalCode, i, selectTime?.tiemValue, e)} htmlFor="confrim" key={item} className={`bton p-5 m-1 border cursor-pointer  boredr-1 border-[#0003] rounded-[20px] show_active 
                                                ${rez[i] == "complete" ? "disabled" : "show"}`}>
                                                        <span>ساعت
                                                            {Math.floor((parseInt(selectTime?.inputDate.split(":")[1]) + (item * selectTime?.lengthTimeVisit)) / 60) + parseInt(selectTime?.inputDate.split(":")[0])}:
                                                            {(parseInt(selectTime?.inputDate.split(":")[1]) + (item * selectTime?.lengthTimeVisit)) % 60 == 0 ? "00" :
                                                                ((parseInt(selectTime?.inputDate.split(":")[1]) + (item * selectTime?.lengthTimeVisit))) - (Math.floor((parseInt(selectTime?.inputDate.split(":")[1]) + (item * selectTime?.lengthTimeVisit)) / 60) * 60)}
                                                        </span>
                                                    </button>
                                                </>

                                            ))
                                    }
                                </div>
                            </div>
                    }
                </>
            </div>
        </>
    );
}

export default TabelTime;
function Loading() {
    return (
        <div className="flex justify-center items-center w-full mt-10">
            <svg xlink="http://www.w3.org/1999/xlink" width="130px" height="130px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="80" cy="50" r="5" fill="#93dbe9">
                    <animate attributeName="cx" values="80;50" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                    <animate attributeName="cy" values="50;80" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                    <animate attributeName="fill" values="#93dbe9;#689cc5" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                </circle><circle cx="50" cy="80" r="5" fill="#689cc5">
                    <animate attributeName="cx" values="50;20" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                    <animate attributeName="cy" values="80;50.00000000000001" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                    <animate attributeName="fill" values="#689cc5;#5e6fa3" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                </circle><circle cx="20" cy="50.00000000000001" r="5" fill="#5e6fa3">
                    <animate attributeName="cx" values="20;49.99999999999999" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                    <animate attributeName="cy" values="50.00000000000001;20" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                    <animate attributeName="fill" values="#5e6fa3;#3b4368" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                </circle><circle cx="49.99999999999999" cy="20" r="5" fill="#3b4368">
                    <animate attributeName="cx" values="49.99999999999999;80" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                    <animate attributeName="cy" values="20;49.99999999999999" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                    <animate attributeName="fill" values="#3b4368;#93dbe9" keyTimes="0;1" dur="0.3847953216374269s" repeatCount="indefinite"></animate>
                </circle>
            </svg>
        </div>
    )
}