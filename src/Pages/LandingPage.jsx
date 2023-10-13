import React from 'react'
import { Col,Row,Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {
  const navigateByUrl = useNavigate()
  return (
    <>
    <Row className='mt-3 mb-5 align-items-center justify-content-between w-100'>
       

      <Col></Col>
      <Col lg={5}>
        <h3>Welcome to<span className='text-warning'> Media Player</span></h3>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, obcaecati. Cupiditate hic magni a eligendi impedit optio cum velit sit alias! Laborum dolore quaerat fugiat numquam cupiditate ullam amet hic. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, facilis molestiae, inventore porro voluptatem ipsum incidunt officiis totam ut.</p>
        <button onClick={()=>navigateByUrl('/home')} className='mt-3 btn btn-info'>Get Started <i className="fa-solid fa-arrow-right fa-beat ms-2"></i></button>
      </Col>
      <Col lg={5}>
        <img className='img-fluid' src="https://scitechdaily.com/images/Music-Rhythm-Frequency-Waveform.gif" alt="landing" />
      </Col>


    </Row>
    <div className="container  mt-5 mb-5 d-flex align-items-center justify-content-center flex-column ">
      <h3>Features</h3>
      <div className="cards mt-5 mb-5 d-flex align-items-center justify-content-between w-100">

      <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'350px'} variant="top" src="https://i.pinimg.com/originals/89/a8/06/89a8066b5292d2f2edd34470f46f6811.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'350px'} variant="top" src="https://media.tenor.com/oD3E5pCQCkYAAAAM/musical-notes.gif" />
      <Card.Body>
        <Card.Title>Category Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>


    <Card className='p-3' style={{ width: '22rem' }}>
      <Card.Img height={'350px'} variant="top" src="https://www.gifss.es/musica/ecualizadores/ecualizador-07.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

      </div>

     <div className='container border rounded p-5 border-secondary b-5 mt-5 d-flex align-items-center justify-content-between w-100 mb-5' >
        <div className="col-lg-5">
          <h3 className='mb-3 text-warning'>Simple,Fast and Powerful </h3>
          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Play Everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error aperiam ducimus delectus? Aliquid tempora amet enim.</h6>

          <h6 className='mb-3'><span className='fs-5 fw-bolder'> Categorise Video</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error aperiam ducimus delectus.</h6>

          <h6 className='mb-3'><span className='fs-5 fw-bolder'>Managing History</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum error aperiam ducimus delectus.</h6>
        
          
        </div>
        <div className='video col-lg-6'>
          <iframe width={'100%'} height={'387'} src="https://www.youtube.com/embed/IqwIOlhfCak" title='LEO - Badass Lyrics | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander' frameborder="0" allow ="accelerometer;autoplay; clipboard-write'encrypted-media'gyroscope'picture-in-picture;web-share" allowFullScreen ></iframe>
  
        </div>
  
     </div>
    </div>
    
    
    </>
  )
}

export default LandingPage