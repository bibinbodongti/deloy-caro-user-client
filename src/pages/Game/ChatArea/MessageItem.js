import React from 'react';
import {Toast } from 'react-bootstrap';
import {convertDateToString} from './../../../service/date'

const MessageItem = ({typePlayer,name,time,content,image,index, isFinal}) => {
  return (
    <>
      <Toast keu={index} className={typePlayer}>
        <Toast.Header style = {{backgroundColor: "brown"}} closeButton={false}>
          <img src={image?image:'#'} className="rounded mr-2" alt="" />
          <strong className="mr-auto" style = {{color: "#DE9B72"}}>{name?name:'Player'}</strong>
          <small  style = {{color: "#DE9B72"}}  >{isFinal?'just now' : convertDateToString(time)}</small>
        </Toast.Header>
        <Toast.Body >{content?content:'...'}</Toast.Body>
      </Toast>
    </>
  )
}
export default MessageItem;