import React, { useEffect, useState } from 'react'

const SideBar = (props) => {
    const hamburger = "https://cdn-icons-png.flaticon.com/512/3388/3388797.png"
    const close = "https://cdn-icons-png.flaticon.com/512/1/1193.png"
    const [years, setYears] = useState([])
    const [months, setMonths] = useState([])
    const monthdic = {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
    }
    useEffect(() => {
        if (props.dateinfo) {
            const temp_y = []
            const temp_m = []
            for (let i = props.dateinfo.this_year; i >= props.dateinfo.start_year; i--) {
                temp_y.push(i)
                let t = []
                for (let j = (i === props.dateinfo.this_year ? props.dateinfo.this_month : 12); j >= (i === props.dateinfo.start_year ? props.dateinfo.start_month : 1); j--) {
                    t.push(j)
                }
                temp_m.push(t)
            }
            setMonths(temp_m)
            setYears(temp_y)
        }
    }, [, props.dateinfo])

    return (
        <React.Fragment >
            <div
                className={`postcover ${props.showsidebar ? "shown" : "hidden"}`}
                onClick={() => { props.setShowSidebar(!props.showsidebar) }}
            >
                <div className="sidebar" style={{ 'display': `${props.showsidebar ? "inline-block" : "none"}` }} onClick={(e) => { e.stopPropagation() }}>
                    <h1>Navigate</h1>
                    {
                        props.dateinfo ?
                            years.map((val, i) => {
                                return (
                                    <details open={i === 0} className="yeardetail">
                                        <summary>{val}</summary>
                                        {
                                            months[i].map((m, j) => {
                                                return (
                                                    <React.Fragment>
                                                        <p
                                                            onClick={() => { props.setMonth(m); props.setYear(val) }}
                                                            className={(props.year === val && props.month === m) ? "chosenmonth" : ''}
                                                        >
                                                            {monthdic[m]} {val}
                                                        </p>
                                                    </React.Fragment>
                                                )
                                            })
                                        }
                                    </details>
                                )
                            }) :
                            null
                    }
                </div>
            </div>
            <button
                style={{ 'position': 'fixed', 'zIndex': 2, 'margin-left': `${props.showsidebar ? 'max(170px, calc(20% - 30px))' : '10px'}` }}
                onClick={() => { props.setShowSidebar(!props.showsidebar) }}
                className="sidebarbutton"
            ><img className="hamburger" src={`${props.showsidebar ? close : hamburger}`} /></button>
        </React.Fragment>
    )
}
export default SideBar;