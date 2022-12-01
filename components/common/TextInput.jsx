import React from "react";

function TextInput(props) {
    const [num, setNum] = React.useState(0);


    return (
        <>
            <div className={`${props.calssStyle} p-2 mt-1`}>
                <h3 className="py-3">{props.title}</h3>
                {
                    props.type == "textarea" ?
                        <>
                            <textarea
                                dir={props.type == "number" ? "ltr" : "rtl"} {...props}
                                className={`inputcss-pl text-[10px] lg:text-[15px] ${props.inputStyle}`}
                                id={props.inputId}
                                onInput={(e) => setNum(e.target.value.length)}
                                name={props.nameInput}
                                onChange={props.onGetValue}
                            ></textarea>
                            <small style={{ color: num > 250 ? "#ff0000" : "" }}>حداکثر 250 کاراکتر - {num}</small>
                        </>
                        :
                        <input
                            dir={props.type == "number" ? "ltr" : "rtl"} {...props}
                            className={`inputcss-pl text-[10px] lg:text-[15px] ${props.inputStyle}`}
                            id={props.inputId}
                            onInput={props.onInputText}
                            name={props.nameInput}
                            onChange={props.onGetValue}
                        />

                }
                <div hidden={props.msg == ""} className="text-[12px] pt-5 text-error flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle" viewBox="0 0 16 16">
                        <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                        <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                    </svg>
                    <span className="mr-2">
                        {props.msg}
                    </span>
                </div>
            </div>
        </>
    );
}

export default TextInput;