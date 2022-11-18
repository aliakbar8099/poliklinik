import Link from "next/link";
import styles from '/styles/Home.module.scss'

function Navbar() {
    return (
        <>
            <div className="flex w-full px-2 lg:px-[50px] m-auto items-center py-3 fixed lg:sticky top-0 left-0 z-[2010] bg-white">
                <a>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.53748 23.6036H16.2325L21.9371 38.7715L36.1438 0.998047L44.6456 23.6036H50V27.6435H41.8483L36.1437 12.4755L21.937 50.249L13.4353 27.6435H7.53748C7.88232 27.0488 8.08081 26.3592 8.08081 25.6235C8.08081 24.8878 7.88232 24.1982 7.53748 23.6036Z" fill="#00B6BD" />
                        <path d="M4.04004 21.584V29.6639C1.81176 29.6639 -0.00036478 27.852 -0.00036478 25.6239C-0.00036478 23.3959 1.81176 21.584 4.04004 21.584Z" fill="#00CCB3" />
                        <path d="M7.53772 23.604C7.88257 24.1986 8.08105 24.8883 8.08105 25.6239C8.08105 26.3596 7.88257 27.0492 7.53772 27.6439C6.83813 28.8503 5.53328 29.6639 4.04065 29.6639V21.584C5.53318 21.584 6.83802 22.3975 7.53772 23.604Z" fill="#00EED1" />
                    </svg>
                </a>
                <ul className={`${styles.menu} hidden lg:flex mr-14`}>
                    <li className="mr-10 text-[#00b6bd]"><Link href="/">خانه</Link></li>
                    <li className="mr-10"><Link href="/">کادر درمانی</Link></li>
                    <li className="mr-10"><Link href="/">بخش های ما</Link></li>
                    <li className="mr-10"><Link href="/">برنامه ما</Link></li>
                    <li className="mr-10"><Link href="/">مجله سلامت</Link></li>
                </ul>
                <ul className={`${styles.auth} hidden lg:flex items-center mr-auto`}>
                    <li><Link href="/">ورود</Link></li>
                    <li className="border border-1 border-gray-900 px-4 py-1 mr-4 rounded-[50px]"><Link href="/">ثبت نام</Link></li>
                </ul>
                <div className="dropdown mr-auto block lg:hidden">
                    <label tabIndex={1} className="btn btn-ghost btn-circle text-[#00B6BD]" dir="ltr">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-person-fill w-[28px] h-[28px]" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 left-0">
                        <li><a>ورود</a></li>
                        <li><a>ثبت نام</a></li>
                    </ul>
                </div>
                <div className="dropdown mr-6 block lg:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle" dir="ltr">
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 left-0">
                    <li><Link href="/">خانه</Link></li>
                    <li><Link href="/">کادر درمانی</Link></li>
                    <li><Link href="/">بخش های ما</Link></li>
                    <li><Link href="/">برنامه ما</Link></li>
                    <li><Link href="/">مجله سلامت</Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navbar;