import styles from '/styles/Home.module.scss'

function Section2() {
    return (
        <>
            <section className="container-pl">
                <div className="flex mt-10 items-center relative">
                    <svg width="85" height="70" viewBox="0 0 85 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M56.0229 15.1416C72.027 15.1416 84.9999 25.2357 84.9999 37.6873C84.9999 46.5781 78.3849 54.2659 68.7755 57.9366C68.1051 62.2019 69.4292 66.7143 72.7517 70.0005C66.3746 70.0005 60.9864 65.8295 59.2139 60.0967C58.1658 60.1859 57.1015 60.2333 56.0229 60.2333C40.0198 60.2333 27.0459 50.139 27.0459 37.6874C27.0457 25.2357 40.0199 15.1416 56.0229 15.1416Z" fill="#005974" />
                        <path d="M28.977 0C12.9729 0 0 10.0942 0 22.5457C0 31.4365 6.61502 39.1243 16.2244 42.795C16.8948 47.0603 15.5707 51.5727 12.2482 54.8588C18.6253 54.8588 24.0135 50.6879 25.786 44.9551C26.8341 45.0443 27.8984 45.0917 28.977 45.0917C44.9801 45.0917 57.954 34.9974 57.954 22.5458C57.9542 10.0942 44.98 0 28.977 0Z" fill="#FFD24D" />
                    </svg>
                    <h2 className="text-[26px] lg:text-[35px] font-bold absolute left-[50%] translate-x-[-50%]">خدمات <span className="text-[#00B6BD]">ما</span></h2>
                </div>
                <p className="text-center text-[14px] lg:text-[20px] w-[80%] lg:w-[20%] m-auto mt-1 "><span>مجموعه <span className="text-[#00B6BD]">ما</span> با ارائه خدمات متنوع آماده پاسخگویی ب شماست.</span></p>
                <div className={`${styles.Section2_Items} flex my-10 flex-wrap lg:flex-nowrap justify-center`}>
                    <div className="w-[100%] md:w-[30%] lg:w-[25%] h-[200px] mb-10 bg-[#DEEEF2] mx-5 rounded-[30px] flex flex-col justify-center items-center">
                        <svg width="58" height="61" viewBox="0 0 58 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.2213 13.0798C39.657 12.8851 40.139 12.7783 40.6468 12.7783C42.5888 12.7783 44.1644 14.3537 44.1644 16.2969C44.1644 16.4238 44.1572 16.5479 44.1442 16.6705C44.0101 17.9443 43.1963 19.0148 42.0724 19.5125C41.6367 19.7058 41.1547 19.814 40.6469 19.814C40.064 19.814 39.5158 19.6726 39.0324 19.4216C37.9013 18.8388 37.1279 17.6587 37.1279 16.2968C37.1279 16.1699 37.1352 16.0458 37.1481 15.9232C37.2822 14.6495 38.0974 13.5776 39.2213 13.0798Z" fill="#F95428" />
                            <path d="M56.2246 17.9592L50.3986 25.9499L46.9965 30.6168L42.0723 19.5128C43.1962 19.0151 44.01 17.9447 44.1441 16.6709L56.2246 17.9592Z" fill="#F95428" />
                            <path d="M51.7197 29.5225C54.6846 30.1254 56.9181 32.7482 56.9181 35.8931C56.9181 39.0366 54.6861 41.6579 51.7212 42.2638C52.2883 40.2369 52.5912 38.1004 52.5912 35.8931C52.5911 33.6859 52.2882 31.5479 51.7197 29.5225Z" fill="#F9E0D2" />
                            <path d="M6.27891 29.5225C5.71188 31.5493 5.40896 33.6859 5.40896 35.8931C5.40896 38.1004 5.712 40.2369 6.27891 42.2638C3.31403 41.6579 1.08203 39.0367 1.08203 35.8931C1.08191 32.7482 3.31391 30.127 6.27891 29.5225Z" fill="#E5CDC1" />
                            <path d="M37.1276 16.2971C37.1276 17.659 37.9009 18.839 39.0321 19.4219C37.5908 21.1964 27.2618 32.7431 7.36719 26.4706C10.7116 18.8059 18.0092 13.262 26.6861 12.418L25.0687 14.6368L37.1477 15.9236C37.1348 16.0461 37.1276 16.1702 37.1276 16.2971Z" fill="#F7B239" />
                            <path d="M35.0602 13.091C27.4133 15.1178 21.2902 20.8869 18.771 28.3179C15.3992 28.3323 11.5989 27.8043 7.36719 26.4699C11.0045 18.133 19.3222 12.3047 29.0004 12.3047C31.0954 12.3047 33.1269 12.5788 35.0602 13.091Z" fill="#E09B2D" />
                            <path d="M51.7214 42.2636C48.9412 52.1976 39.8213 59.4813 29.0003 59.4813C18.178 59.4813 9.0594 52.1975 6.27913 42.2636C5.7121 40.2367 5.40918 38.1002 5.40918 35.8929C5.40918 33.6856 5.71222 31.5491 6.27913 29.5222C6.57343 28.4735 6.93848 27.4535 7.36704 26.4696C27.2617 32.7421 37.5906 21.1953 39.032 19.4209C39.5154 19.6719 40.0636 19.8133 40.6465 19.8133C41.1544 19.8133 41.6363 19.7051 42.072 19.5118L46.9962 30.6157L50.3983 25.9489C50.9307 27.0929 51.3736 28.286 51.7199 29.5222C52.2884 31.5477 52.5914 33.6856 52.5914 35.8929C52.5914 38.1002 52.2885 40.2367 51.7214 42.2636Z" fill="#F9E0D2" />
                            <path d="M34.2959 1.97656L39.2216 13.079C38.0977 13.5767 37.2825 14.6486 37.1483 15.9225L25.0693 14.6356L26.6867 12.4168L34.2959 1.97656Z" fill="#F95428" />
                            <path d="M35.06 58.6953C33.1266 59.2074 31.0952 59.4815 29.0003 59.4815C18.1794 59.4815 9.0594 52.1976 6.27913 42.2637C5.7121 40.2368 5.40918 38.1003 5.40918 35.893C5.40918 33.6858 5.71222 31.5492 6.27913 29.5224C6.57343 28.4736 6.93708 27.4537 7.36704 26.4697C11.5987 27.8041 15.3991 28.3322 18.7709 28.3177C18.6367 28.7144 18.5126 29.1169 18.3986 29.5223C17.8316 31.5491 17.5286 33.6857 17.5286 35.8929C17.5286 38.1002 17.8317 40.2367 18.3986 42.2636C20.6408 50.2746 27.005 56.5616 35.06 58.6953Z" fill="#E5CDC1" />
                            <path d="M44.4351 49.6615C44.1933 49.6615 43.9502 49.5809 43.7488 49.4155C43.2871 49.0362 43.2201 48.3544 43.5995 47.8926C45.264 45.8665 46.5112 43.4831 47.206 41.0004C47.5978 39.6 47.8268 38.1452 47.8865 36.6767C47.9103 36.0946 48.3896 35.6387 48.9671 35.6387C48.982 35.6387 48.9968 35.6389 49.012 35.6395C49.6092 35.6637 50.0733 36.1675 50.0491 36.7646C49.9824 38.4002 49.7271 40.0214 49.2902 41.5833C48.515 44.353 47.1254 47.0096 45.2719 49.2658C45.058 49.5266 44.7476 49.6615 44.4351 49.6615Z" fill="white" />
                            <path d="M48.836 34.5228C49.4336 34.5228 49.9181 34.0383 49.9181 33.4406C49.9181 32.8429 49.4336 32.3584 48.836 32.3584C48.2384 32.3584 47.7539 32.8429 47.7539 33.4406C47.7539 34.0383 48.2384 34.5228 48.836 34.5228Z" fill="white" />
                            <path d="M58 35.8927C58 32.528 55.7603 29.5722 52.5868 28.6251C52.3207 27.7631 52.0057 26.914 51.6429 26.0792L57.099 18.5956C57.3267 18.2833 57.3706 17.8732 57.2138 17.5197C57.0572 17.1664 56.7239 16.9235 56.3392 16.8825L45.2058 15.6952C44.91 13.4422 42.9787 11.6969 40.6461 11.6969C40.3655 11.6969 40.0912 11.7236 39.8243 11.772L35.2844 1.53798C35.1278 1.18463 34.7945 0.94176 34.4099 0.900738C34.0243 0.859367 33.6484 1.02695 33.4208 1.3394L26.0911 11.396C17.4125 12.4161 9.88746 17.9869 6.375 26.0367C6.00495 26.8845 5.68641 27.748 5.416 28.6239C2.24109 29.5708 0 32.5277 0 35.8927C0 39.2592 2.2433 42.2175 5.42055 43.1628C8.53124 53.2288 17.9247 60.5632 29 60.5632C40.0753 60.5632 49.4688 53.2288 52.5795 43.1626C55.7568 42.2178 58 39.2602 58 35.8927ZM44.9766 17.8467L54.2458 18.8352L47.2258 28.4642L43.4466 19.942C44.1389 19.4088 44.6758 18.6839 44.9766 17.8467ZM43.0821 16.2965C43.0821 17.6396 41.9893 18.7322 40.6459 18.7322C39.3026 18.7322 38.2099 17.6395 38.2099 16.2965C38.2099 14.9535 39.3027 13.8608 40.6459 13.8608C41.9892 13.8608 43.0821 14.9534 43.0821 16.2965ZM34.066 4.12832L37.8463 12.6501C37.1535 13.1831 36.6162 13.9084 36.3154 14.7456L27.047 13.7583L34.066 4.12832ZM24.2759 13.8865L24.1942 13.9986C23.9665 14.311 23.9228 14.7212 24.0795 15.0745C24.2363 15.4279 24.5696 15.6707 24.9541 15.7117L36.0863 16.8977C36.224 17.9469 36.716 18.8857 37.4387 19.5896C36.31 20.7778 34.1124 22.7779 30.8221 24.4343C27.8665 25.9219 24.6354 26.8279 21.2184 27.127C17.3321 27.4671 13.1879 27.0166 8.88253 25.7929C11.957 19.6761 17.6407 15.3053 24.2759 13.8865ZM2.16416 35.8927C2.16416 33.9689 3.18867 32.2316 4.75957 31.2673C4.47274 32.7802 4.3267 34.3246 4.3267 35.8927C4.3267 37.4744 4.47821 39.021 4.764 40.5208C3.19077 39.557 2.16416 37.8183 2.16416 35.8927ZM29 58.3992C16.5886 58.3992 6.49098 48.3029 6.49098 35.8927C6.49098 33.0894 6.99752 30.3686 7.99498 27.7899C11.6664 28.8605 15.2397 29.4011 18.6619 29.4011C19.5882 29.4011 20.5038 29.3617 21.4069 29.2825C25.0983 28.9593 28.5935 27.9785 31.7948 26.3671C35.7111 24.3959 38.2076 21.9801 39.3517 20.7098C39.7624 20.8304 40.1965 20.8963 40.6458 20.8963C40.9268 20.8963 41.2015 20.8697 41.4688 20.8212L46.0069 31.0544C46.1635 31.4079 46.4969 31.6507 46.8814 31.6917C46.92 31.6959 46.9582 31.6978 46.9964 31.6978C47.3398 31.6978 47.6659 31.5344 47.8708 31.2531L50.1392 28.1419C51.0488 30.6144 51.5091 33.2136 51.5091 35.8928C51.509 48.3029 41.4114 58.3992 29 58.3992ZM53.2359 40.521C53.5217 39.0212 53.6732 37.4744 53.6732 35.8927C53.6732 34.3237 53.5284 32.7798 53.2421 31.2684C54.8119 32.2327 55.8357 33.9691 55.8357 35.8927C55.8357 37.8189 54.8094 39.5576 53.2359 40.521Z" fill="#333333" />
                            <path d="M23.344 40.3408C23.9418 40.3408 24.4261 39.8563 24.4261 39.2588C24.4261 36.6719 22.3212 34.5674 19.734 34.5674C17.1467 34.5674 15.042 36.6719 15.042 39.2588C15.042 39.8563 15.5264 40.3408 16.1241 40.3408C16.7218 40.3408 17.2062 39.8563 17.2062 39.2588C17.2062 37.8651 18.3401 36.7313 19.734 36.7313C21.1278 36.7313 22.2619 37.8651 22.2619 39.2588C22.2619 39.8563 22.7463 40.3408 23.344 40.3408Z" fill="#333333" />
                            <path d="M38.2644 34.5674C35.6771 34.5674 33.5723 36.6719 33.5723 39.2588C33.5723 39.8563 34.0567 40.3408 34.6543 40.3408C35.252 40.3408 35.7364 39.8563 35.7364 39.2588C35.7364 37.8651 36.8704 36.7313 38.2644 36.7313C39.6583 36.7313 40.7923 37.8651 40.7923 39.2588C40.7923 39.8563 41.2767 40.3408 41.8744 40.3408C42.472 40.3408 42.9564 39.8563 42.9564 39.2588C42.9563 36.6719 40.8515 34.5674 38.2644 34.5674Z" fill="#333333" />
                            <path d="M34.0918 46.5406C31.3414 49.2907 26.8663 49.2907 24.1159 46.5406C23.6931 46.118 23.0081 46.118 22.5855 46.5406C22.1629 46.9631 22.1629 47.6482 22.5855 48.0706C24.3279 49.8128 26.6427 50.7723 29.1039 50.7723C31.565 50.7723 33.88 49.8129 35.6223 48.0706C36.0449 47.648 36.0449 46.963 35.6223 46.5406C35.1996 46.118 34.5145 46.118 34.0918 46.5406Z" fill="#333333" />
                            <path d="M27.5557 42.9876H30.4436C31.0414 42.9876 31.5256 42.5031 31.5256 41.9054C31.5256 41.3078 31.0412 40.8232 30.4436 40.8232H27.5557C26.9579 40.8232 26.4736 41.3078 26.4736 41.9054C26.4736 42.5031 26.9581 42.9876 27.5557 42.9876Z" fill="#333333" />
                        </svg>
                        <h3 className="mt-9 text-[#000] text-[18px]">اطفال</h3>
                    </div>
                    <div className="w-[100%] md:w-[30%] lg:w-[25%] h-[200px] mb-10 bg-[#DEEEF2] mx-5 rounded-[30px] flex flex-col justify-center items-center">
                        <svg width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M54.8385 53.0019H4.16076C2.62872 53.0019 1.38672 51.76 1.38672 50.2282V15.1986C1.38672 13.6668 2.62883 12.4248 4.16076 12.4248H54.8385C56.3706 12.4248 57.6127 13.6668 57.6127 15.1986V50.2283C57.6126 51.76 56.3706 53.0019 54.8385 53.0019Z" fill="white" />
                            <path d="M18.3516 4.12946V12.4246H22.6726V6.60096H36.3274V12.4246H40.6486V4.12946C40.6486 3.10814 39.8206 2.28027 38.7992 2.28027H20.201C19.1795 2.28027 18.3516 3.10814 18.3516 4.12946Z" fill="#FFDA79" />
                            <path d="M29.4993 45.9926C36.8339 45.9926 42.7798 40.0474 42.7798 32.7136C42.7798 25.3798 36.8339 19.4346 29.4993 19.4346C22.1646 19.4346 16.2188 25.3798 16.2188 32.7136C16.2188 40.0474 22.1646 45.9926 29.4993 45.9926Z" fill="#F95428" />
                            <path d="M18.1624 25.7959H1.38672V39.6306H18.1622C15.571 35.3935 15.5692 30.0358 18.1624 25.7959Z" fill="#F7B239" />
                            <path d="M40.8369 25.7959C42.0691 27.8105 42.7799 30.1788 42.7799 32.7133C42.7799 35.2478 42.069 37.6159 40.8369 39.6307H57.6124V25.796H40.8369V25.7959Z" fill="#F7B239" />
                            <path d="M54.8389 11.0381H42.0355V4.12966C42.0355 2.34534 40.5836 0.893555 38.7991 0.893555H20.2008C18.4163 0.893555 16.9643 2.34534 16.9643 4.12966V11.0379H4.16111C1.8668 11.0379 0 12.9042 0 15.1985C0 16.8282 0 48.2866 0 50.2282C0 52.5225 1.8668 54.3888 4.16111 54.3888H54.8389C57.1332 54.3888 59 52.5225 59 50.2282C59 48.5985 59 17.1401 59 15.1985C59 12.9044 57.1334 11.0381 54.8389 11.0381ZM19.7384 4.12966C19.7384 3.87479 19.9457 3.66739 20.2007 3.66739H38.799C39.054 3.66739 39.2613 3.8749 39.2613 4.12966V11.0379H37.7143V6.60115C37.7143 5.83528 37.0934 5.21424 36.3272 5.21424H22.6725C21.9063 5.21424 21.2854 5.83516 21.2854 6.60115V11.0379H19.7384V4.12966ZM24.0597 11.0381V7.98796H34.9404V11.0379H24.0597V11.0381ZM4.16111 13.8118C5.92362 13.8118 52.7056 13.8118 54.8388 13.8118C55.6037 13.8118 56.2258 14.4339 56.2258 15.1987V24.4093H41.5807C35.7286 15.9243 23.262 15.9378 17.4193 24.4093H2.77404V15.1987C2.77404 14.4339 3.39619 13.8118 4.16111 13.8118ZM56.2258 38.244H43.0867C44.5185 34.7272 44.5202 30.7033 43.0867 27.1831H56.226V38.244H56.2258ZM29.5001 44.6056C22.9411 44.6056 17.6067 39.2698 17.6067 32.7135C17.6067 26.1559 22.9426 20.8214 29.5001 20.8214C36.0599 20.8214 41.3936 26.1577 41.3936 32.7135C41.3933 39.2709 36.0579 44.6056 29.5001 44.6056ZM15.9133 38.244H2.77404V27.1831H15.9133C14.5322 30.5749 14.4299 34.6006 15.9133 38.244ZM54.8389 51.6151H4.16111C3.39619 51.6151 2.77404 50.993 2.77404 50.2282V41.0176H17.4192C23.2712 49.5026 35.7379 49.4892 41.5806 41.0176H56.2257V50.2282C56.2258 50.993 55.6038 51.6151 54.8389 51.6151Z" fill="#58595B" />
                            <path d="M32.5 40.2838V36.5819C32.5 36.1019 32.8893 35.7126 33.3695 35.7126H37.0717C37.5518 35.7126 37.9412 35.3234 37.9412 34.8433V30.5833C37.9412 30.1033 37.5519 29.714 37.0717 29.714H33.3695C32.8894 29.714 32.5 29.3247 32.5 28.8446V25.1428C32.5 24.6628 32.1108 24.2734 31.6306 24.2734H27.3702C26.8901 24.2734 26.5007 24.6627 26.5007 25.1428V28.8446C26.5007 29.3246 26.1114 29.714 25.6313 29.714H21.929C21.4489 29.714 21.0596 30.1032 21.0596 30.5833V34.8433C21.0596 35.3233 21.4488 35.7126 21.929 35.7126H25.6313C26.1113 35.7126 26.5007 36.1018 26.5007 36.5819V40.2838C26.5007 40.7638 26.89 41.1531 27.3702 41.1531H31.6306C32.1107 41.153 32.5 40.764 32.5 40.2838Z" fill="white" />
                        </svg>
                        <h3 className="mt-9 text-[#000] text-[18px]">داخلی</h3>
                    </div>
                    <div className="w-[100%] md:w-[30%] lg:w-[25%] h-[200px] mb-10 bg-[#DEEEF2] mx-5 rounded-[30px] flex flex-col justify-center items-center">
                        <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.56522 29.8903C7.56522 18.0722 17.1806 8.45791 29 8.45791V0.893555C12.9838 0.893555 0 13.8759 0 29.8903C0 45.9046 12.9838 58.887 29 58.887V51.3226C17.1806 51.3226 7.56522 41.7083 7.56522 29.8903Z" fill="#FFF6D6" />
                            <path d="M29 0.893555V8.45791C40.8194 8.45791 50.4348 18.0722 50.4348 29.8903C50.4348 41.7083 40.8194 51.3226 29 51.3226V58.887C45.0162 58.887 58 45.9046 58 29.8903C58 13.8759 45.0162 0.893555 29 0.893555Z" fill="#FFEDAD" />
                            <path d="M46.6522 29.8904C46.6522 39.6227 38.7334 47.5405 29 47.5405V51.3227C40.8194 51.3227 50.4348 41.7084 50.4348 29.8904C50.4348 18.0723 40.8194 8.45801 29 8.45801V12.2402C38.7334 12.2402 46.6522 20.158 46.6522 29.8904Z" fill="#801B06" />
                            <path d="M7.56543 29.8904C7.56543 41.7084 17.1808 51.3227 29.0002 51.3227V47.5405C19.2668 47.5405 11.348 39.6227 11.348 29.8904C11.348 20.158 19.2668 12.2402 29.0002 12.2402V8.45801C17.1808 8.45801 7.56543 18.0723 7.56543 29.8904Z" fill="#D5310E" />
                            <path d="M19.5433 29.8904C19.5433 24.6767 23.7855 20.435 28.9998 20.435V12.2402C19.2664 12.2402 11.3477 20.1581 11.3477 29.8904C11.3477 39.6227 19.2664 47.5406 28.9998 47.5406V39.3458C23.7855 39.3458 19.5433 35.1041 19.5433 29.8904Z" fill="#F46A1A" />
                            <path d="M46.6523 29.8904C46.6523 20.1581 38.7335 12.2402 29.0001 12.2402V20.435C29.6806 20.435 30.344 20.5088 30.9841 20.646C31.8858 19.9235 33.0285 19.4899 34.2711 19.4899C37.1748 19.4899 39.5372 21.852 39.5372 24.7555C39.5372 26.0477 39.0684 27.2319 38.2931 28.1491C38.3988 28.7139 38.4565 29.2953 38.4565 29.8904C38.4565 35.1041 34.2143 39.3458 29 39.3458V47.5406C38.7335 47.5406 46.6523 39.6227 46.6523 29.8904Z" fill="#D5310E" />
                            <path d="M19.5439 29.89C19.5439 35.1037 23.7861 39.3455 29.0005 39.3455C34.2148 39.3455 38.457 35.1037 38.457 29.89C38.457 29.2951 38.3992 28.7135 38.2936 28.1487C37.3269 29.2924 35.8829 30.0205 34.2715 30.0205C31.3677 30.0205 29.0054 27.6584 29.0054 24.755C29.0054 23.0941 29.7793 21.6113 30.9844 20.6455C30.3443 20.5084 29.681 20.4346 29.0005 20.4346C23.7861 20.4346 19.5439 24.6763 19.5439 29.89Z" fill="#801B06" />
                            <path d="M29.0049 24.7557C29.0049 27.6591 31.3672 30.0212 34.271 30.0212C35.8824 30.0212 37.3262 29.293 38.2931 28.1494C39.0684 27.2322 39.5372 26.0479 39.5372 24.7558C39.5372 21.8523 37.1748 19.4902 34.271 19.4902C33.0284 19.4902 31.8857 19.9238 30.9841 20.6463C29.7788 21.612 29.0049 23.0948 29.0049 24.7557Z" fill="white" />
                        </svg>
                        <h3 className="mt-9 text-[#000] text-[18px]">چشم پزشکی</h3>
                    </div>
                    <div className="w-[100%] md:w-[30%] lg:w-[25%] h-[200px] mb-10 bg-[#DEEEF2] mx-5 rounded-[30px] flex flex-col justify-center items-center">
                        <svg width="56" height="58" viewBox="0 0 56 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.327 0.893555C11.579 0.893555 7.12695 8.64222 7.12695 18.2007C7.12695 27.7591 11.579 57.9052 18.327 57.9052C22.2634 57.9052 22.7106 32.8708 27.9997 32.8481C34.307 32.8708 33.7359 57.9052 37.6724 57.9052C44.4203 57.9052 48.8724 27.7591 48.8724 18.2007C48.8724 8.64222 44.4203 0.893555 37.6724 0.893555C34.4482 0.893555 31.2239 3.94775 27.9997 3.94775C24.7754 3.94775 21.5512 0.893555 18.327 0.893555Z" fill="#FCC24C" />
                            <path d="M39.7092 12.0918H16.291V26.3447H39.7092V12.0918Z" fill="#ECECEC" />
                            <path d="M17.3096 19.2188H38.6914" stroke="#979797" stroke-width="2.03636" stroke-linecap="square" />
                            <path d="M16.2909 17.1826H0V21.2549H16.2909V17.1826Z" fill="#D8D8D8" />
                            <path d="M55.9999 17.1826H39.709V21.2549H55.9999V17.1826Z" fill="#D8D8D8" />
                            <path d="M24.4364 15.1465H21.3818V23.291H24.4364V15.1465Z" fill="#D8D8D8" />
                            <path d="M33.6004 15.1465H30.5459V23.291H33.6004V15.1465Z" fill="#D8D8D8" />
                        </svg>
                        <h3 className="mt-9 text-[#000] text-[18px]">دندان پزشکی</h3>
                    </div>
                    <div className="w-[100%] md:w-[30%] lg:w-[25%] h-[200px] mb-10 bg-[#DEEEF2] mx-5 rounded-[30px] flex flex-col justify-center items-center">
                        <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29 58.8869C45.0163 58.8869 58 45.9047 58 29.8903C58 13.8758 45.0163 0.893555 29 0.893555C12.9837 0.893555 0 13.8758 0 29.8903C0 45.9047 12.9837 58.8869 29 58.8869Z" fill="#E05B49" />
                            <path opacity="0.1" d="M39.8272 16.7522L39.713 16.638L39.6973 16.6404C39.2454 16.2634 38.698 16.003 38.0932 15.8932L37.1701 14.9701L37.1652 14.9743C36.5883 14.4101 35.8028 14.0627 34.9576 14.0627C34.6435 14.0627 34.3353 14.1111 34.0392 14.2017C33.574 13.6278 32.8611 13.2775 32.0998 13.2775C30.7345 13.2775 29.6288 14.3708 29.6288 15.7059V15.9838L27.7154 14.0706C27.6713 14.0234 27.6272 13.9781 27.5795 13.9346L27.522 13.8772L27.5172 13.8839C27.0834 13.5111 26.5227 13.2773 25.901 13.2773C25.1397 13.2773 24.4269 13.6277 23.9616 14.2016C23.6656 14.111 23.3575 14.0626 23.0432 14.0626C21.8229 14.0626 20.7172 14.7754 20.2036 15.8387C18.5059 15.9958 17.1526 17.367 17.074 19.0646C15.4549 19.3485 14.2224 20.7379 14.2224 22.4113C14.2224 22.816 14.2949 23.2147 14.4339 23.5893C13.1591 24.4713 12.3857 25.915 12.3857 27.4736C12.3857 28.3254 12.6092 29.1409 13.0442 29.8658C12.6153 30.5183 12.3857 31.2854 12.3857 32.0647C12.3857 33.4602 13.1107 34.7348 14.2829 35.4718C13.9687 36.094 13.7995 36.7767 13.7995 37.4775C13.7995 39.4951 15.1467 41.2229 17.068 41.7786C17.0856 42.6618 17.4474 43.4617 18.0244 44.0585L18.025 44.059C18.0643 44.0995 18.1035 44.14 18.1446 44.1786L32.6216 58.654C45.3937 57.0622 55.5842 47.1726 57.6232 34.5456L40.0562 16.9812C39.9837 16.9008 39.907 16.8259 39.8272 16.7522Z" fill="black" />
                            <path d="M45.6144 27.475C45.6144 25.9158 44.8418 24.4732 43.5633 23.59C43.7046 23.2136 43.779 22.8137 43.779 22.4096C43.779 20.7387 42.547 19.3456 40.9291 19.0611C40.8458 17.3671 39.4967 15.9952 37.7935 15.8406C37.286 14.7762 36.1773 14.0646 34.9588 14.0646C34.6452 14.0646 34.334 14.1111 34.0368 14.201C33.5733 13.6271 32.8623 13.2773 32.0992 13.2773C30.7356 13.2773 29.627 14.3678 29.627 15.7071V24.3983C29.627 25.4561 30.1067 26.454 30.8993 27.1336C30.0988 27.8531 29.627 28.8782 29.627 29.974V35.3227C29.627 35.9709 29.7901 36.5991 30.1024 37.1621C29.7906 37.7034 29.627 38.3111 29.627 38.943V43.101C29.627 44.9762 31.179 46.5027 33.087 46.5027C34.3353 46.5027 35.459 45.8515 36.0704 44.8258C36.5084 45.0173 36.9833 45.1163 37.472 45.1163C39.3583 45.1163 40.8971 43.6248 40.9321 41.7793C42.8539 41.2242 44.1982 39.4934 44.1982 37.4757C44.1982 36.7737 44.0338 36.0929 43.7185 35.4743C44.8881 34.7367 45.6138 33.4603 45.6138 32.0623C45.6138 31.2836 45.383 30.5188 44.9564 29.8676C45.3885 29.1423 45.6144 28.3231 45.6144 27.475Z" fill="#F6C358" />
                            <path d="M43.1432 34.3911C42.298 32.9504 40.6057 32.6568 39.7212 32.6102C39.5472 31.8907 39.1406 31.2396 38.5454 30.7575C38.2826 30.5449 37.8953 30.5817 37.6808 30.8396C37.4652 31.0969 37.502 31.4781 37.7642 31.6896C38.2886 32.1142 38.5895 32.7401 38.5895 33.4064C38.5895 34.6315 37.5757 35.6283 36.3299 35.6283C35.0841 35.6283 34.0709 34.6321 34.0709 33.4064C34.0709 32.8741 34.2654 32.3601 34.6177 31.9571C34.6255 31.948 34.6274 31.9366 34.6353 31.9269C34.8051 31.9021 34.9742 31.8647 35.141 31.8036C36.4327 31.3301 37.0918 29.9116 36.6109 28.6417C36.4913 28.3288 36.1384 28.1729 35.8201 28.2865C35.5023 28.4031 35.3403 28.7517 35.4588 29.064C35.7035 29.7092 35.3688 30.431 34.7115 30.6715C34.0536 30.9125 33.3208 30.5827 33.0754 29.937C32.957 29.624 32.6023 29.4658 32.2851 29.5823C31.9674 29.6983 31.8054 30.0468 31.9245 30.3592C32.1722 31.0129 32.6772 31.4961 33.2826 31.7523C32.9998 32.2561 32.8422 32.8228 32.8422 33.4064C32.8422 35.2978 34.4069 36.8365 36.3306 36.8365C38.1087 36.8365 39.5774 35.5208 39.7901 33.8281C40.5472 33.8903 41.8763 34.1773 42.2781 35.4216C42.2963 35.4778 42.3247 35.5268 42.3561 35.5733C42.3591 35.5775 42.3591 35.5836 42.3621 35.5878C42.7608 36.1429 42.9717 36.796 42.9717 37.4762C42.9717 38.8494 42.1156 40.0346 40.8643 40.5196C40.6673 39.338 39.877 38.569 39.836 38.531C39.5901 38.3008 39.2016 38.3117 38.9673 38.5533C38.734 38.7949 38.7443 39.178 38.9903 39.4074C38.9988 39.4147 39.7901 40.1862 39.6778 41.2445C39.6747 41.2712 39.6845 41.2947 39.685 41.3201C39.6856 41.346 39.6772 41.3703 39.6814 41.3968C39.6977 41.5013 39.7062 41.6076 39.7062 41.7157C39.7062 42.9251 38.7051 43.9092 37.4745 43.9092C37.1754 43.9092 36.8872 43.8452 36.6171 43.734C36.8903 43.0169 36.9385 41.9385 36.0964 40.7872C36.503 40.1221 36.4946 39.254 36.0039 38.5858C35.8046 38.3158 35.4203 38.2541 35.1461 38.4499C34.8711 38.645 34.8095 39.0231 35.0083 39.2932C35.2675 39.6453 35.1865 40.1395 34.8276 40.3945C34.47 40.6494 33.9667 40.5703 33.7069 40.2174C33.507 39.9468 33.1233 39.8863 32.8491 40.0815C32.5736 40.2772 32.5125 40.6548 32.7107 40.9248C33.1077 41.4649 33.7306 41.7512 34.3601 41.7512C34.6332 41.7512 34.9057 41.692 35.1643 41.5821C35.9322 42.7081 35.386 43.4989 35.3093 43.5986C35.2749 43.6415 35.2586 43.6905 35.2374 43.7381C35.2301 43.755 35.2151 43.7666 35.2089 43.7835C34.9081 44.6865 34.0562 45.2937 33.0889 45.2937C31.8588 45.2937 30.8577 44.3096 30.8577 43.1002V38.9424C30.8577 38.6457 30.9175 38.3601 31.0214 38.0893C31.5688 38.4446 32.4484 38.8499 33.6591 38.8499C33.7166 38.8499 33.7751 38.8494 33.8337 38.8469C34.1732 38.836 34.4391 38.5575 34.4276 38.224C34.4168 37.8972 34.1443 37.6392 33.8144 37.6392C33.8072 37.6392 33.8005 37.6392 33.7939 37.6398C33.7481 37.641 33.7028 37.6416 33.658 37.6416C32.2497 37.6416 31.4594 36.9354 31.3144 36.7929C31.0166 36.3567 30.8564 35.8499 30.8564 35.3213V29.9745C30.8564 29.0018 31.3984 28.1096 32.2702 27.648C32.2847 27.6402 32.2956 27.6287 32.3095 27.6196C32.3173 27.6147 32.3264 27.6142 32.3343 27.6087C32.4684 27.5163 33.6834 26.7388 34.9661 27.813C35.0821 27.9096 35.2234 27.9567 35.3648 27.9567C35.5382 27.9567 35.711 27.8848 35.833 27.7441C36.0529 27.4904 36.0221 27.1085 35.7636 26.8923C34.348 25.7076 32.8237 25.9916 31.9724 26.4175C31.2867 25.9765 30.8564 25.2147 30.8564 24.398V15.7068C30.8564 15.0332 31.4141 14.4854 32.0998 14.4854C32.53 14.4854 32.9178 14.7155 33.1433 15.0702C33.0345 15.5619 32.7759 16.244 32.3989 16.4632C32.1065 16.633 32.0104 17.0039 32.1832 17.2909C32.2979 17.4812 32.5022 17.5869 32.7124 17.5869C32.8188 17.5869 32.9269 17.5597 33.0248 17.5023C33.8416 17.0262 34.1933 15.96 34.3274 15.3927C34.5298 15.3221 34.7412 15.2731 34.9587 15.2731C35.7719 15.2731 36.5006 15.7963 36.7567 16.5508C36.764 16.8848 36.7428 18.2223 35.9851 19.056C35.6946 19.3767 35.326 19.5833 34.8741 19.6872C34.7363 19.0571 34.2844 18.508 33.6216 18.2803C33.3045 18.1703 32.9516 18.3365 32.8392 18.6518C32.7274 18.9666 32.8966 19.3109 33.2175 19.4208C33.5878 19.5477 33.7842 19.9469 33.6555 20.3106C33.5263 20.6755 33.1208 20.8694 32.7505 20.7414C32.4284 20.6321 32.0799 20.7981 31.9681 21.1129C31.8563 21.4277 32.0255 21.7726 32.3463 21.8819C32.5571 21.9538 32.771 21.9882 32.9825 21.9882C33.7075 21.9882 34.3878 21.5835 34.7183 20.9262C35.6119 20.8175 36.3544 20.4677 36.9084 19.8546C37.692 18.9871 37.9119 17.8267 37.9687 17.0932C38.9607 17.3162 39.7045 18.1866 39.7045 19.2276C39.7045 19.3303 39.696 19.4323 39.6822 19.5315C39.6762 19.5755 39.6913 19.6179 39.6961 19.6614C39.6539 20.042 39.4853 20.6956 39.1995 20.8774C38.9144 21.0587 38.8328 21.4326 39.017 21.7129C39.1348 21.8917 39.3318 21.9889 39.5336 21.9889C39.6478 21.9889 39.7632 21.9576 39.8665 21.8923C40.4453 21.525 40.7117 20.8086 40.8338 20.2817C41.8156 20.5119 42.5497 21.3758 42.5497 22.4099C42.5497 22.5942 42.5243 22.7766 42.4777 22.9542C41.4205 22.4794 39.7034 22.2335 37.9229 23.3855C37.4033 23.0526 36.7956 22.8853 36.1679 22.9246C35.3999 22.9748 34.6974 23.3155 34.1899 23.8857C33.9669 24.1364 33.9923 24.5182 34.2479 24.7381C34.5022 24.9568 34.8901 24.9325 35.1148 24.6806C35.4054 24.3544 35.8077 24.1587 36.2482 24.1303C36.6868 24.1031 37.1146 24.2432 37.4468 24.5295C38.1325 25.1198 38.2021 26.1485 37.6009 26.8233C37.3779 27.074 37.4033 27.4558 37.6589 27.6757C37.7754 27.7759 37.9193 27.8249 38.0631 27.8249C38.234 27.8249 38.4038 27.7554 38.5258 27.6182C39.3771 26.6614 39.4429 25.3021 38.7989 24.2715C40.7649 23.1383 42.3297 24.248 42.4028 24.3018C42.4167 24.3121 42.4336 24.3144 42.4481 24.3229C42.4613 24.3314 42.4698 24.3447 42.4837 24.3525C43.6559 24.9711 44.3845 26.1678 44.3845 27.4745C44.3845 27.9481 44.2799 28.406 44.0976 28.835C43.6366 28.458 43.1478 28.3143 42.772 28.2659C42.5461 27.3078 41.8301 26.5134 40.8502 26.2048C40.5307 26.1045 40.1814 26.2785 40.0781 26.5962C39.9742 26.9134 40.1524 27.2541 40.4763 27.3556C41.1487 27.5676 41.6097 28.1765 41.6242 28.8712C41.6369 29.4553 41.3257 30.0039 40.8145 30.3029C40.5227 30.4733 40.4267 30.8442 40.6001 31.1306C40.7149 31.3203 40.9191 31.426 41.1288 31.426C41.2357 31.426 41.3439 31.3988 41.4424 31.3408C42.1402 30.933 42.6181 30.2576 42.7848 29.4959C43.0603 29.5678 43.4071 29.7478 43.6887 30.2009C43.6978 30.2159 43.711 30.2268 43.7213 30.2408C43.7273 30.2492 43.7298 30.2589 43.7364 30.2667C44.16 30.7796 44.3847 31.3999 44.3847 32.0614C44.386 33.0059 43.9093 33.8656 43.1432 34.3911Z" fill="#FCD462" />
                            <path d="M13.0423 29.8671C12.6163 30.5183 12.3849 31.283 12.3849 32.0618C12.3849 33.4596 13.1104 34.7367 14.2802 35.4737C13.9654 36.0923 13.8004 36.7732 13.8004 37.4751C13.8004 39.4927 15.1447 41.2235 17.0666 41.7787C17.1016 43.6249 18.6404 45.1157 20.5266 45.1157C21.016 45.1157 21.4903 45.0166 21.9283 44.8252C22.5396 45.8509 23.6641 46.5021 24.9122 46.5021C26.8195 46.5021 28.3723 44.9762 28.3723 43.1004V38.9425C28.3723 38.3106 28.2091 37.7023 27.8968 37.1616C28.2086 36.5985 28.3723 35.9703 28.3723 35.3221V29.9746C28.3723 28.8787 27.9004 27.8536 27.0999 27.1341C27.8925 26.4545 28.3723 25.4565 28.3723 24.3988V15.7071C28.3723 14.3672 27.263 13.2773 25.9 13.2773C25.137 13.2773 24.4259 13.6271 23.9625 14.201C23.6652 14.1117 23.354 14.0646 23.0405 14.0646C21.8219 14.0646 20.7132 14.7762 20.2057 15.8406C18.5025 15.9952 17.1535 17.3671 17.0701 19.0611C15.4521 19.3456 14.2203 20.7387 14.2203 22.4096C14.2203 22.8137 14.294 23.2137 14.4359 23.59C13.1576 24.4731 12.3848 25.9157 12.3848 27.475C12.3849 28.323 12.6103 29.1422 13.0423 29.8671Z" fill="#F6C358" />
                            <path d="M13.6146 32.0624C13.6146 31.4009 13.8388 30.7805 14.2629 30.2677C14.2696 30.2599 14.272 30.2501 14.278 30.2417C14.2883 30.2278 14.3015 30.2169 14.3106 30.2019C14.5921 29.7488 14.939 29.5688 15.2145 29.4969C15.3812 30.2586 15.8592 30.934 16.557 31.3418C16.6554 31.3998 16.7636 31.427 16.87 31.427C17.0796 31.427 17.2838 31.3213 17.3986 31.1316C17.5721 30.8447 17.476 30.4743 17.1842 30.3039C16.6731 30.0049 16.3619 29.4563 16.3746 28.8722C16.3891 28.1781 16.8507 27.5686 17.5225 27.3566C17.8457 27.2551 18.024 26.9149 17.9206 26.5972C17.8173 26.2801 17.4681 26.1061 17.1485 26.2058C16.1685 26.5144 15.4526 27.3089 15.2267 28.2669C14.8515 28.3153 14.3627 28.459 13.9012 28.836C13.7187 28.407 13.6143 27.9492 13.6143 27.4755C13.6143 26.1688 14.3429 24.9721 15.515 24.3535C15.5289 24.3462 15.538 24.3323 15.5507 24.3239C15.5652 24.3148 15.5821 24.313 15.596 24.3027C15.6691 24.2489 17.2339 23.1387 19.1998 24.2725C18.5558 25.3024 18.6211 26.6623 19.4729 27.6192C19.5949 27.7564 19.7647 27.8258 19.9357 27.8258C20.0794 27.8258 20.2239 27.7769 20.3399 27.6767C20.5954 27.4568 20.6214 27.075 20.3979 26.8243C19.7974 26.1496 19.8663 25.1208 20.5519 24.5305C20.8842 24.2436 21.3119 24.1041 21.7512 24.1312C22.1917 24.1597 22.5946 24.3554 22.8846 24.6816C23.1099 24.9335 23.4973 24.9576 23.7516 24.739C24.0071 24.5192 24.0331 24.1374 23.8096 23.8867C23.3026 23.3171 22.6001 22.9757 21.8316 22.9256C21.2039 22.8863 20.596 23.0537 20.0765 23.3865C18.2961 22.2344 16.5784 22.4804 15.5217 22.9552C15.4751 22.7781 15.4498 22.5951 15.4498 22.4109C15.4498 21.3767 16.1844 20.5122 17.1656 20.2827C17.2871 20.8095 17.5541 21.526 18.1329 21.8933C18.2362 21.9585 18.3517 21.9899 18.4659 21.9899C18.6676 21.9899 18.8652 21.8926 18.9824 21.7139C19.1667 21.4335 19.0852 21.0596 18.7999 20.8784C18.5141 20.6972 18.3462 20.0429 18.3033 19.6624C18.3082 19.6189 18.3232 19.5766 18.3172 19.5324C18.3033 19.4333 18.2949 19.3313 18.2949 19.2285C18.2949 18.187 19.0386 17.3171 20.0307 17.0942C20.0875 17.8282 20.3068 18.9881 21.091 19.8556C21.6457 20.4687 22.3876 20.8192 23.2811 20.9272C23.6122 21.5845 24.2925 21.9892 25.0175 21.9892C25.229 21.9892 25.4429 21.9548 25.6537 21.8829C25.9739 21.7729 26.1436 21.4285 26.0319 21.1139C25.9201 20.7991 25.5715 20.6331 25.2495 20.7424C24.8792 20.8705 24.4737 20.6766 24.3445 20.3116C24.2158 19.9479 24.4121 19.5486 24.7825 19.4218C25.1028 19.3112 25.2725 18.9675 25.1608 18.6528C25.0484 18.3375 24.6955 18.1713 24.3784 18.2813C23.7155 18.5084 23.2631 19.0582 23.1259 19.6882C22.674 19.5843 22.3054 19.3777 22.0149 19.0569C21.2572 18.2233 21.236 16.8858 21.2433 16.5518C21.4994 15.7973 22.2281 15.2741 23.0419 15.2741C23.2594 15.2741 23.4702 15.323 23.6732 15.3937C23.8073 15.961 24.1589 17.0272 24.9758 17.5032C25.0742 17.5607 25.1824 17.5878 25.2881 17.5878C25.4984 17.5878 25.7026 17.4822 25.8174 17.2919C25.9901 17.0043 25.8941 16.634 25.6017 16.4642C25.2247 16.2449 24.9661 15.5635 24.8573 15.0711C25.0826 14.7165 25.4705 14.4863 25.9007 14.4863C26.5864 14.4863 27.1441 15.0342 27.1441 15.7078V24.399C27.1441 25.2158 26.714 25.9775 26.0282 26.4185C25.1769 25.9926 23.6526 25.7086 22.237 26.8933C21.9784 27.1095 21.9476 27.4913 22.1676 27.7451C22.2896 27.8852 22.4624 27.9577 22.6357 27.9577C22.7766 27.9577 22.9185 27.9106 23.0339 27.8139C24.3172 26.7398 25.5321 27.5173 25.6657 27.6097C25.6735 27.6151 25.6826 27.6157 25.6905 27.6206C25.7044 27.6296 25.7153 27.6411 25.7298 27.649C26.6016 28.1112 27.1435 29.0028 27.1435 29.9754V35.3241C27.1435 35.852 26.9835 36.3589 26.6856 36.7957C26.5406 36.9383 25.7503 37.6444 24.342 37.6444C24.2972 37.6444 24.2526 37.6438 24.2066 37.6426C24.1999 37.642 24.1934 37.642 24.1861 37.642C23.8562 37.642 23.5838 37.8999 23.5729 38.2268C23.5615 38.5603 23.8272 38.8394 24.1669 38.8497C24.2254 38.852 24.2841 38.8527 24.3414 38.8527C25.5522 38.8527 26.4318 38.4473 26.9792 38.0921C27.0831 38.3627 27.1429 38.6485 27.1429 38.9452V43.1031C27.1429 44.3125 26.1418 45.2966 24.9117 45.2966C23.9444 45.2966 23.0919 44.6894 22.7916 43.7864C22.7856 43.7688 22.7704 43.7574 22.7632 43.7411C22.7427 43.6934 22.7257 43.6444 22.6913 43.6015C22.6146 43.5018 22.069 42.7111 22.8363 41.585C23.0949 41.6955 23.3673 41.7541 23.6404 41.7541C24.2706 41.7541 24.8929 41.4672 25.2898 40.9277C25.4886 40.6577 25.427 40.2801 25.1515 40.0844C24.8772 39.8892 24.493 39.9491 24.2936 40.2203C24.0339 40.5732 23.5306 40.6522 23.1729 40.3974C22.8141 40.1424 22.7331 39.6483 22.9922 39.2961C23.1911 39.026 23.1287 38.6478 22.8539 38.4528C22.5797 38.2571 22.1947 38.3181 21.9961 38.5887C21.5054 39.2562 21.497 40.1243 21.9036 40.7901C21.0614 41.9414 21.1097 43.0198 21.3829 43.7369C21.1128 43.848 20.8246 43.9121 20.5255 43.9121C19.2949 43.9121 18.2938 42.928 18.2938 41.7186C18.2938 41.6099 18.3023 41.5035 18.3186 41.3997C18.3228 41.3731 18.3144 41.3489 18.315 41.323C18.3155 41.2971 18.3253 41.2735 18.3222 41.2474C18.2099 40.1891 19.0013 39.4176 19.0097 39.4104C19.2557 39.1808 19.2659 38.7978 19.0327 38.5562C18.7983 38.3146 18.4098 38.3037 18.164 38.5339C18.1229 38.5725 17.3326 39.3409 17.1357 40.5225C15.8845 40.0381 15.0283 38.8528 15.0283 37.4791C15.0283 36.7989 15.2392 36.1458 15.6379 35.5907C15.641 35.5865 15.641 35.5811 15.6439 35.5762C15.6753 35.5297 15.7037 35.4807 15.7219 35.4245C16.123 34.1801 17.4522 33.8932 18.2099 33.831C18.4219 35.5237 19.8913 36.8394 21.6693 36.8394C23.5924 36.8394 25.1578 35.3007 25.1578 33.4093C25.1578 32.8263 24.9996 32.259 24.7174 31.7552C25.3228 31.4991 25.8272 31.0158 26.0755 30.3621C26.1946 30.0492 26.0326 29.7012 25.7148 29.5852C25.3977 29.4687 25.043 29.6269 24.9246 29.9399C24.6799 30.585 23.9464 30.9149 23.2885 30.6744C22.6311 30.4339 22.2965 29.7121 22.5412 29.0669C22.6595 28.754 22.4982 28.406 22.1799 28.2894C21.8615 28.1758 21.5087 28.3317 21.3891 28.6446C20.9075 29.9145 21.5673 31.3328 22.8585 31.8065C23.0252 31.8676 23.195 31.905 23.3647 31.9298C23.372 31.9394 23.3738 31.9509 23.3823 31.96C23.7345 32.3629 23.9291 32.877 23.9291 33.4093C23.9291 34.6344 22.9153 35.6311 21.6695 35.6311C20.4236 35.6311 19.4098 34.635 19.4098 33.4093C19.4098 32.7429 19.7107 32.1171 20.2351 31.6925C20.4973 31.4804 20.5347 31.0999 20.3185 30.8425C20.1033 30.5846 19.7167 30.5483 19.4539 30.7604C18.8588 31.2425 18.4522 31.8931 18.2782 32.6131C17.3937 32.6597 15.7014 32.9533 14.8562 34.394C14.0907 33.8663 13.6146 33.0066 13.6146 32.0624Z" fill="#FCD462" />
                        </svg>
                        <h3 className="mt-9 text-[#000] text-[18px]">روانشناسی</h3>
                    </div>
                </div>
                <div className='text-center mb-2'>
                    <button className='btn px-9  text-[17px] font-normal btn-ghost bg-[#005974] hover:bg-[#005873] hover:opacity-90 text-[#fff] mt-10'
                    >مشاهده همه</button>
                </div>
            </section>
        </>
    );
}

export default Section2;