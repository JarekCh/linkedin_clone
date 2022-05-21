import React from 'react'
import "./Post.css"

function Post( { name, description, message, photoUrl } ) {
  return (
    <div className='post'>
       <Avatar /> 
       
    </div>
  )
}

export default Post