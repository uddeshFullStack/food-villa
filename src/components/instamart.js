import { useState } from "react";

const Section=({title ,description, isVisible, setIsVisible})=>{
    
return (
    <div className="border border-r-2 border-black p-2 m-2">
        <h3 className="text-xl font-bold p-2 m-2">{title}</h3>
        {isVisible ? (
            <>
                <button onClick={()=>setIsVisible(false)} className="px-4 underline">Hide</button>
                <p className="p-2 m-2">{description}</p>
            </>
            ):
        (
            <button onClick={()=>setIsVisible(true)} className="px-4 underline">Show</button>
        )}
    </div>
)
}
const Instamart=()=>{
    const [visibleSection,setVisibleSection]=useState("about")
    return(
    <>  
        <h1 className="font-bold text-3xl p-2 m-2">InstaMart</h1>
        <Section 
            title={"About Instamart"}
            isVisible={visibleSection==="about"}
            setIsVisible={()=> setVisibleSection("about")}
            description={"But I must explain anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"} />
        <Section 
            title={"Team Instamart"}
            isVisible={visibleSection==="team"}
            setIsVisible={()=> setVisibleSection("team")}
            description={"But I this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"} />
        <Section 
            title={"Careers"}
            isVisible={visibleSection==="career"}
            setIsVisible={()=> setVisibleSection("career")}
            description={"But I must explain to you how all of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"} />
        <Section 
            title={"Others"}
            isVisible={visibleSection==="other"}
            setIsVisible={()=> setVisibleSection("other")}
            description={"system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"} />
    </>
    )
}
export default Instamart;