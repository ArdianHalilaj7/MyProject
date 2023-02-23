import React from 'react';
import { Container, CardGroup, Card, Row, Col, Button } from 'react-bootstrap';

const styles = {
    card: {
      backgroundColor: '#000',
      borderRadius: 50,
      padding: '1rem',

    },
    cardImage: {
      objectFit: 'cover',
      borderRadius: 50,
      maxWidth: '400px',
      minWidth: '100px',
    }
  }

const Shop = () => {
  return (

    <>


        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>
              <Col>
                <Card.Img src="whey.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title style={{marginLeft:'-20px'}}><Button variant="dark" size="lg">WHEY PROTEIN</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                  <h6 className='h5biography'>Size:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>2.2Kg</h4>
                  <h6 className='h5biography'>Flavour:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>Chocolate</h4>
                  <h6 className='h5biography'>Protein Information:</h6>
                  <h6 style={{fontSize:'14px'}} className='h4biography'>
                  Whether you’re a beginner just kick starting your fitness journey or 
                  someone who’s aiming to take their workouts to the next level, Pre Load is the way to look! 
                  </h6>
                  <br/>
                  <h5 className='h5biography'>Price:</h5><h4 style={{fontSize:'18px'}} className='h4biography'>
                    <Button><b><del style={{color:'red'}}><i>$149.90</i></del> to $129.90</b></Button></h4>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>

        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="creatine.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title style={{marginLeft:'-20px'}}><Button variant="dark" size="lg">CREATINE MONOHYDRATE</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                  <h6 className='h5biography'>Size:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>1Kg</h4>
                  <h6 className='h5biography'>Flavour:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>Monohydrate</h4>
                  <h6 className='h5biography'>Protein Information:</h6>
                  <h6 style={{fontSize:'14px'}} className='h4biography'>
                  Backed by years of research, Creatine Monohydrate will help maximise 
                  your performance gains and increase your training capacity.
                  </h6>
                  <br/>
                  <h5 className='h5biography'>Price:</h5><h4 style={{fontSize:'18px'}} className='h4biography'><Button><b>$24.90</b></Button></h4>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>

        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="preload.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title style={{marginLeft:'-20px'}}><Button variant="dark" size="lg">PRE LOAD TWIN PACK</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                  <h6 className='h5biography'>Size:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>360g + 360g</h4>
                  <h6 className='h5biography'>Flavour:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>Cirtus Clash</h4>
                  <h6 className='h5biography'>Protein Information:</h6>
                  <h6 style={{fontSize:'14px'}} className='h4biography'>
                  Backed by years of research, Creatine Monohydrate will help maximise 
                  your performance gains and increase your training capacity.
                  </h6>
                  <br/>
                  <h5 className='h5biography'>Price:</h5><h4 style={{fontSize:'18px'}} className='h4biography'>
                    <Button><b><del style={{color:'red'}}><i>$139.90</i></del> to $119.90</b></Button></h4>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>

        <CardGroup className="m-5 d-block">
          <Card className="m-5 border-0 shadow" style={styles.card}>
            <Row>

              <Col>
                <Card.Img src="isozero.jpg" style={styles.cardImage} />
              </Col>

              <Col>
                <Card.Body>
                <Card.Title style={{marginLeft:'-20px'}}><Button variant="dark" size="lg">ISO ZERO</Button></Card.Title>
                <br/>
                <Card.Text as="h4" style={styles.cardText}>
                  <h6 className='h5biography'>Size:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>750g</h4>
                  <h6 className='h5biography'>Flavour:</h6><h4 style={{fontSize:'18px'}} className='h4biography'>Chocolate</h4>
                  <h6 className='h5biography'>Protein Information:</h6>
                  <h6 style={{fontSize:'14px'}} className='h4biography'>
                  If you are looking to maximise your protein intake whilst reducing other macros 
                  like fats and carbs - Emrald Labs Iso Zero is ideal for you!
                  </h6>
                  <br/>
                  <h5 className='h5biography'>Price:</h5><h4 style={{fontSize:'18px'}} className='h4biography'>
                    <Button><b>$84.90</b></Button></h4>
                </Card.Text>

                </Card.Body>
              </Col>

            </Row>
          </Card>
        </CardGroup>

        


    </>


  )
}

export default Shop