import React from 'react'
import './index.css'

const printDay = (date) => {
    const days =['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const myday = date.getDay();
    const mydate = date.getDate();

    return days[myday] + " " + mydate;
}

const LucketOpenDay = (props) => (
    <div className='LucketOpenDay' >
      { (props.userInfo)?printDay(props.userInfo.openDay):''}
    </div>
)

export default LucketOpenDay