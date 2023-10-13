import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import CardView  from './Cardview';
import { getAllVideos } from '../services/allAPI';


function View({uploadVideoServerResponse}) {

const [deleteVideo,setDeleteVideo] = useState(false)
  const [allVideos,setAllVideos] = useState([])
  const getAllUploadedVideos = async ()=>{
    //make api call getAllVideos
    const {data} = await getAllVideos()
    setAllVideos(data)
  }
  useEffect(()=>{
    setDeleteVideo(false)
    getAllUploadedVideos()
  },[uploadVideoServerResponse,deleteVideo])
  //console.log(allVideos);
  return (
  <> 
   <Row>
   { 
   allVideos.length>0?
   allVideos.map(video=>(
    <Col sm={12} md={6} lg={4} xl={3}>
      <CardView setDeleteVideo={setDeleteVideo} displayData={video}/>
   
    </Col>
   ))
    :
    <p className='fw-bolder fs-5 text-danger'>Nothing to display!!!</p>
    }
    </Row>
  </>
  )
}

export default View