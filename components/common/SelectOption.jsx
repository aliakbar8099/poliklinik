import React from "react";

function SelectOption({ titleName, items , width , className}) {
    const [open, setOpen] = React.useState(false);
    const [selectName, setSelectName] = React.useState("");
    const [selectValue, setSelectValue] = React.useState("");

    function handleSelect(e) {
        setSelectName(e.target.textContent);
        setSelectValue(e.target.getAttribute("value"));
    }

    return (
        <>
            <div style={{width}} className={`dropdown mx-2 dropdown-bottom dropdown-open ${className} ${open ? "z-[2029]" : ""}`}>
                <button onClick={() => setOpen(!open)} className={`btn m-1 w-[100%] flex justify-between items-center bg-[#fff] hover:bg-[#fff] ${open ? "bg-[#f6f6f6]" : ""}`}>
                    <span className='text-[#005974] text-[12px] lg:text-[15px]'>{selectName === "" ? titleName : <span><strong>{titleName}</strong><small className="mr-1 font-normal">{selectName}</small></span>}</span>
                    <svg style={{ transform: open ? "rotate(90deg)" : "rotate(0deg)" }} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.42351 7.42313C7.48927 7.35761 7.5443 7.28555 7.59256 7.21047L12.6313 2.17169C13.1227 1.67991 13.1231 0.882673 12.6313 0.390663C12.1396 -0.100646 11.3426 -0.101113 10.8503 0.390663L6.51131 4.73014L2.14922 0.368745C1.65744 -0.122798 0.860434 -0.123031 0.368425 0.368745C0.122887 0.614982 -0.000465042 0.937003 1.31741e-06 1.25902C-0.000465042 1.58128 0.122887 1.90353 0.368892 2.14884L5.42959 7.21024C5.47786 7.28555 5.53335 7.35737 5.59958 7.42313C5.85095 7.6745 6.18159 7.79552 6.51131 7.78969C6.84056 7.79575 7.17214 7.6745 7.42351 7.42313Z" fill="#005974" fill-opacity="0.8" />
                    </svg>
                </button>
                <ul hidden={!open} className={`dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-[100%]`}>
                    {
                        items?.map((item, i) => (
                            <li key={i} onClick={handleSelect}><a value={item.value} className={`p-1 mt-2 px-2 ${item.value == selectValue ? "bg-[#eee]" : ""}`}>{item.text}</a></li>
                        ))
                    }
                </ul>
            </div>
            <div hidden={!open} onClick={() => setOpen(false)} className="bg-[#0000] fixed left-0 top-0 w-[100%] h-[100vh] z-[2028]"></div>
        </>
    );
}

export default SelectOption;