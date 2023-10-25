import React, { useEffect, useState } from 'react'
import { Col,Row } from 'react-bootstrap'
import CardView  from './Cardview';
import { getAllCategory, getAllVideos, updateCategory } from '../services/allAPI';


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
  const dragOver = (e)=>{
    e.preventDefault()
  }

  const videoDropped = async (e)=>{
    const {categoryId,videoId} = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(categoryId,videoId);
    const {data} = await getAllCategory()
    const selectedCategory = data.find(item=>item.id==categoryId)
    let result = selectedCategory.allVideos.filter((video)=>video.id!=videoId)
    const {id,categoryName} = selectedCategory
    let newCategory ={
      id,categoryName,allVideos:result
    }
    const res = await updateCategory(categoryId,newCategory)
  }

  return (
  <> 
   <Row droppable onDragOver={e=>dragOver(e)} onDrop={e=>videoDropped(e)}>
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