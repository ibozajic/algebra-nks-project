import React, {Component} from 'react';
import { Modal, Button, Container, Row, Col, Image } from 'react-bootstrap';

class ButtonInfo extends Component {  

    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
      render() {
        return (
          <span>
            <Button variant="primary" onClick={this.handleShow}><i class="fas fa-info-circle"></i></Button>
    
            <Modal show={this.state.show} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.product_name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row>
                    <Col md={4}>
                      <Image style={{ height: '100px' }} src={this.props.product_img} rounded />
                    </Col>
                    <Col md={8}>
                    {this.props.product_desc}
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="outline-dark" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Add Beer to Cart
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                  Favorite Beer
                </Button>                
              </Modal.Footer>
            </Modal>
          </span>
        );
      }
}

export default ButtonInfo;