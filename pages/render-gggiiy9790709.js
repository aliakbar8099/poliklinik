/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";
import React from "react";
import SecondLayout from "../layout/second.layout";

function renderGggiiy9790709() {
    let router = useRouter();

    React.useEffect(()=> {
        router.push("/reserve")
    },[])

    return ( 
        <>
            
        </>
     );
}

export default renderGggiiy9790709;

renderGggiiy9790709.getLayout = (page) => <SecondLayout>{page}</SecondLayout>