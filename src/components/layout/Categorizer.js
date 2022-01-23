import React, { Component } from 'react'
import './Categorizer.css'
import { Carousel, Thumbs } from 'react-responsive-carousel'
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from 'react-bootstrap/Button'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import axios, { Axios } from 'axios'

//images
import image1 from "../../images/image1.jpeg"
import image2 from "../../images/image2.jpeg"
import image3 from "../../images/image3.jpeg"
import { ButtonGroup } from 'react-bootstrap';

const values = [
    { name: 'A', value: '' },
    { name: 'X', value: '' },
    { name: 'O', value: '' },
    { name: 'Y', value: '' },
    { name: 'H', value: '' }
  ];

class Categorizer extends Component {

    constructor(props) {
        super(props);
        this.state = {array: values, checkAll: false}
    }
    
    render() {

        const handleChange = (event) => {
            let newArray = [...this.state.array]
            if (event.charAt(0) === 'A') {
                event.charAt(1) === '0' ? newArray.map(x => x.name === 'A' ? x.value = '0' : null) : newArray.map(x => x.name === 'A' ? x.value = '1' : null) 
            }
            if (event.charAt(0) === 'X') {
                event.charAt(1) === '0' ? newArray.map(x => x.name === 'X' ? x.value = '0' : null) : newArray.map(x => x.name === 'X' ? x.value = '1' : null) 
            }
            if (event.charAt(0) === 'O') {
                event.charAt(1) === '0' ? newArray.map(x => x.name === 'O' ? x.value = '0' : null) : newArray.map(x => x.name === 'O' ? x.value = '1' : null) 
            }
            if (event.charAt(0) === 'Y') {
                event.charAt(1) === '0' ? newArray.map(x => x.name === 'Y' ? x.value = '0' : null) : newArray.map(x => x.name === 'Y' ? x.value = '1' : null) 
            }
            if (event.charAt(0) === 'H') {
                event.charAt(1) === '0' ? newArray.map(x => x.name === 'H' ? x.value = '0' : null) : newArray.map(x => x.name === 'H' ? x.value = '1' : null) 
            }

            this.setState({array: newArray}, () => {
                console.log(this.state.array)})
        }

        const handleSave = (event) => {
            //saves and submits the values to backend
            /*
            let values = this.state.array
            axios.post(`http address`, {values})
            .then(res =>{
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err);) */


        }


        
        return (
            <div className="categorizerContainer">
                    <Carousel className="carousel" showStatus={false} showIndicators={false} showThumbs={false} autoPlay={false}>
                        <div className="carouselImage">
                            <img className="carouselImage" src={image1} alt=""/>
                        </div>
                        <div className="carouselImage">
                            <img className="carouselImage" src={image2} alt=""/>
                        </div>
                        <div className="carouselImage">
                            <img className="carouselImage" src={image3} alt=""/>
                        </div>
                    </Carousel>
                    <div className="optionsBar">
                        <div className="options">
                            <h4 className="optionsLabel">A</h4>
                            <ToggleButtonGroup defaultValue={'A1'} onChange={handleChange} type="radio" name="options">
                                <ToggleButton id="A-no" value={"A0"} variant="outline-danger">
                                ✕
                                </ToggleButton>
                                <ToggleButton id="A-yes" value={"A1"} variant="outline-success">
                                ✔
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="options">
                            <h4 className="optionsLabel">X</h4>
                            <ToggleButtonGroup defaultValue={'X1'} onChange={handleChange} type="radio" name="options">
                                <ToggleButton id="X-no" value={"X0"} variant="outline-danger">
                                ✕
                                </ToggleButton>
                                <ToggleButton id="X-yes" value={"X1"} variant="outline-success">
                                ✔
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="options">
                            <h4 className="optionsLabel">O</h4>
                            <ToggleButtonGroup defaultValue={'O1'} onChange={handleChange} type="radio" name="options">
                                <ToggleButton id="O-no" value={"O0"} variant="outline-danger">
                                ✕
                                </ToggleButton>
                                <ToggleButton id="O-yes" value={"O1"} variant="outline-success">
                                ✔
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="options">
                            <h4 className="optionsLabel">Y</h4>
                            <ToggleButtonGroup defaultValue={'Y1'} onChange={handleChange} type="radio" name="options">
                                <ToggleButton id="Y-no" value={"Y0"} variant="outline-danger">
                                ✕
                                </ToggleButton>
                                <ToggleButton id="Y-yes" value={"Y1"} variant="outline-success">
                                ✔
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="options">
                            <h4 className="optionsLabel">H</h4>
                            <ToggleButtonGroup defaultValue={'H1'} onChange={handleChange} type="radio" name="options">
                                <ToggleButton id="Y-no" value={"H0"} variant="outline-danger">
                                ✕
                                </ToggleButton>
                                <ToggleButton id="Y-yes" value={"H1"} variant="outline-success">
                                ✔
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </div>
                        <div className="saveButton">
                            <h5 className="optionsLabel">1/15</h5>
                                <Button onClick={handleSave} variant="success">Save</Button>
                        </div>
                    </div>
                
            </div>
        )
    }
}

export default Categorizer
