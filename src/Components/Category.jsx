import React,{useEffect, useState} from 'react'
import { Modal,Form,Button, Col, Row } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, updateCategory } from '../services/allAPI';
import { getAllCategory } from '../services/allAPI';
import VideoCard from './Cardview';


function Category() {
  const [allCategories,setAllCategories] = useState([])
  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleAddCategory = async ()=> {
    if(categoryName){
      let body = {
        categoryName,allVideos:[]
      }
      //make api call
      const response = await addCategory(body)
      console.log(response);
      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        //reset state
        setCategoryName("")
        //get category
        getCategories()
      }else{
        toast.error("Operation failed!!! Please try after some time...")
      }
    }else{
      toast.warning("Please provide category name!!!")
    }
       
    }

    const getCategories = async ()=>{
      //make api call
      const {data} = await getAllCategory()
      setAllCategories(data);
    }

    useEffect(()=>{
      getCategories()
    },[])
const handleDelete = async (id)=>{
  await deleteCategory(id)
  getCategories()
}
const dragOver = (e)=>{
  console.log("Video drag over category");
  e.preventDefault()

}

const videoDrop = async (e,categoryId)=>{
  console.log("Video Dropped inside category Id: "+categoryId);
  const cardId = e.dataTransfer.getData("cardId")
  console.log("Video card Id:" ,cardId);
  //get video details
  const {data} = await getAVideo(cardId)
  // console.log(data);
  // get category details
  const selectedCategory = allCategories?.find(item=>item.id===categoryId)
  selectedCategory.allVideos.push(data)
  console.log(selectedCategory);
  //make api call to update category
  await updateCategory(categoryId,selectedCategory)
  getCategories()
}

  return (
    <>
    <div className="d-grid ms-3">
      <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
    </div>
    {
      allCategories?.length>0?allCategories?.map(item=>(
        <div className="mt-4 mb-3 me-3 ms-4  border rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e)=>videoDrop(e,item?.id)}>
          <div className="d-flex justify-content-between align-items-center">
            <h6>{item?.categoryName}</h6>
            <button onClick={()=>handleDelete(item?.id)} className='btn'><i className="fa-solid fa-trash text-danger"></i></button>
        </div>
        <Row>
          {
            item?.allVideos &&
            item?.allVideos.map(card=>(
              <Col sm={12}>
                <VideoCard displayData={card} insideCategory={true}/>
              </Col>
            ))
          }
        </Row>
        </div>
        
              
      )):<p className='fw-bolder fs-5 text-danger'>No Category added!!</p>
    }

    <Modal
show={show}
onHide={handleClose}
backdrop="static"
keyboard={false}
>
<Modal.Header closeButton>
  <Modal.Title>Add New Category</Modal.Title>
</Modal.Header>
<Modal.Body>
  
<Form className='border border-secondary rounded p-3'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Category Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Category Name" onChange={(e)=>setCategoryName(e.target.value)} />
      </Form.Group>

</Form>
</Modal.Body>
<Modal.Footer>
  <Button variant="secondary" onClick={handleClose}>
    Cancel
  </Button>
  <Button onClick={handleAddCategory} className='btn btn-info'>Add</Button>
</Modal.Footer>
</Modal>
<ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}


export default Category