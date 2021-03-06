import React, { useState } from 'react'
import { DateWidget } from '../DateWidget/DateWidget';
import { PowerWidget } from '../PowerWidget/PowerWidget';

export const Panel = () => {
    var d = new Date();
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const [showCalendar,setShowCalendar] = useState(false);
    const [showPower,setShowPower] = useState(false);
    const [dateStyle, setDateStyle] = useState({cursor:'pointer' })
    const [powerStyle, setPowerStyle] = useState({cursor:'pointer' })

    return (
        <div className="fixed z-10 w-full">
            <div className='bg-black text-white'>
                <div className="inline-block text-center font-bold" style={{ width:"calc(100% - 8rem)" }} >
                    <div className="inline-block border-black border-2" 
                    onClick={
                            ()=>{
                                    setShowPower(false); 
                                    setShowCalendar(!showCalendar); 
                                    setPowerStyle({ cursor:'pointer' });
                                    (!showCalendar) ? setDateStyle({ borderBottom:"2px solid #e95420", cursor:'pointer' }) : setDateStyle({ cursor:'pointer' })
                                }
                            } 
                    style={dateStyle}>
                        {
                            d.getDate() + ' ' + months[d.getMonth()] + '  ' + d.toLocaleTimeString([],{hour:'2-digit', minute:'2-digit'})
                        }
                    </div>
                </div>
                <div className="w-32 inline-block text-right px-2" >
                    <div className="inline-block space-x-4 " 
                    onClick={
                        ()=>{
                                setShowPower(!showPower); 
                                setShowCalendar(false);
                                setDateStyle({ cursor:'pointer' });
                                (!showPower) ? setPowerStyle({ borderBottom:"2px solid #e95420", cursor:'pointer' }) : setPowerStyle({ cursor:'pointer' })
                            }
                        } 
                    style={powerStyle}>
                        <ion-icon name="wifi"></ion-icon>
                        <ion-icon name="volume-high"></ion-icon>
                        <ion-icon name="power"></ion-icon>
                        <ion-icon name="caret-down-outline"></ion-icon>
                    </div>
                </div> 
            </div>
            <DateWidget show={showCalendar}/>
            <PowerWidget show={showPower}/>
        </div>
    )
}
