import moment from "moment-jalaali";
import React from "react";
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

    let weekVlaue = []


    let rez = range(100)

    rez[2] = "complete"
    rez[3] = "complete"

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
            if (item["tiemValue"] > new Date().getTime()) {
                weekVlaue.push({ ...item })
            }
            else {
                item["date"] = getDate(parseInt(item.number) || 8, range(5, 1).at(-1) + 1)
                item["tiemValue"] = getDate((parseInt(item.number) || 8, range(5, 1).at(-1) + 1), true)
                weekVlaue.push({ ...item })
            }
        })
    })


    const [selectTime, setSelctTime] = React.useState(null)

    React.useEffect(() => {
        setSelctTime(weekVlaue[0])
    }, [time])


    function submitRezerveTime(n, nc, i, tv) {
        addRezerveTimeUser(n, nc, { complete: { tiemValue: tv, index: i } }).then(res => {

        })
    }

    return (
        <>
            <div>
                <div className="border border-[3px] border-[#ccc] p-2 mt-10 rounded-[20px] flex justify-start items-start">
                    <div className={`flex flex-col items-center min-w-[180px] w-[180px] p-1 h-[260px] overflow-auto overflow-x-hidden border border-2 border-[#ccc] rounded-3xl`}>
                        {
                            weekVlaue?.map((i, n) => (
                                <button onClick={() => {
                                    setSelctTime(i)
                                }} key={i.number} className={`bton w-[90%] p-5 m-2 border  boredr-1 border-[#0003] rounded-[20px] show_active ${selectTime?.tiemValue == i.tiemValue ? "active" : ""}`}>
                                    <span>{i.week}</span>
                                    <span className="mr-3">{i.date}</span>
                                </button>
                            ))
                        }
                    </div>
                    <div className="w-full flex justify-start items-start flex-wrap p-3 overflow-auto">
                        {
                            range(selectTime?.orderVisit).map((item, i) => (
                                <>
                                    <label onClick={() => submitRezerveTime(selectTime?.number, time?.NationalCode, i, selectTime?.tiemValue)} htmlFor="confrim" key={item} className={`bton p-5 m-1 border cursor-pointer  boredr-1 border-[#0003] rounded-[20px] show_active ${rez[i] == "complete" ? "active" : ""}`}>
                                        <span>ساعت
                                            {Math.floor((parseInt(selectTime?.inputDate.split(":")[1]) + (item * selectTime?.lengthTimeVisit)) / 60) + parseInt(selectTime?.inputDate.split(":")[0])}:
                                            {(parseInt(selectTime?.inputDate.split(":")[1]) + (item * selectTime?.lengthTimeVisit)) % 60 == 0 ? "00" :
                                                ((parseInt(selectTime?.inputDate.split(":")[1]) + (item * selectTime?.lengthTimeVisit))) - (Math.floor((parseInt(selectTime?.inputDate.split(":")[1]) + (item * selectTime?.lengthTimeVisit)) / 60) * 60)}
                                        </span>
                                    </label>
                                </>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default TabelTime;