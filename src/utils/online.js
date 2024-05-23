import { useEffect, useState } from "react"

const useOnline = () => {
    const [isOnline,setIsOnline]=useState(true);

    const handleOnline = () =>{
        setIsOnline(true)
    }
    const handOffline = () =>{
        setIsOnline(false)
    }

    useEffect(()=>{
        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handOffline)

        return ()=>{
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handOffline)
        }
    },[])



    return isOnline;

}

export default useOnline;