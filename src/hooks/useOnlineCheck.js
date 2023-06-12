import { useEffect, useState } from "react"

const useOnlineCheck = ()=>{
    const [isOnline,setIsOnline] = useState(true);
    useEffect(()=>{
        const handleOnline = ()=>{
           setIsOnline(true);
        }
        const handleOffline = ()=>{ setIsOnline(false);}
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        console.log("Online", isOnline);
        return ()=>{
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }
        
    },[])
    return isOnline;
}

export default useOnlineCheck;