import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

  const recentItem = (topic) => (
      <div className="sidebar__recentItem">
          <span className='sidebar__hash'>#</span>
          <p>{topic}</p>
      </div>
  )

  return (
    <div className='sidebar'>
       <div className="sidebar__top">
           <img src='https://cdn.pixabay.com/photo/2016/10/18/21/22/beach-1751455_960_720.jpg' alt='sunset'/>
           <Avatar className='sidebar__avatar'/>
           <h2>John Doe</h2>
           <h4>john.doe@gmail.com</h4>
       </div>
       <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className='sidebar__statNumber'>2,543</p>
          </div> 
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className='sidebar__statNumber'>2,200</p>
          </div>
       </div>

       <div className="sidebar__bottom">
           <p>Recent</p>
           {recentItem('react.js')}
           {recentItem('devOps')}
           {recentItem('design')}
           {recentItem('developer')}
       </div>
    </div>
  )
}

export default Sidebar