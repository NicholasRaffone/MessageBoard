import React, { useState, useRef, useEffect } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import Post from './post'

const Main = (props) => {
    const container = useRef(null);
    const clickHandler = (e) => {
        var clickX = e.clientX + container.current.getElement().scrollLeft;
        var clickY = e.clientY + container.current.getElement().scrollTop;
        props.setCoords([clickX, clickY])
        props.setmakePost(true)
    }

    useEffect(() => {
        if (container.current) {
            //maybe we don't need depending on how it looks later
            container.current.getElement().scrollTo(800, 512);
        }
    }, []);
    return (
        <ScrollContainer className="scroll-container" ref={container} hideScrollbars={false}>
            <div className="main" onClick={(e) => { if (props.valid) { clickHandler(e); } }}>
                {
                    props.posts ?
                        props.posts.map((val, e) => {
                            return (<Post
                                id={val.id}
                                title={val.title}
                                xpos={val.xpos}
                                ypos={val.ypos}
                                color={val.color}
                                is_admin={val.is_admin}
                                setID={props.setID}
                            />)
                        }) :
                        null
                }
            </div>
        </ScrollContainer >
    )
}

export default Main;