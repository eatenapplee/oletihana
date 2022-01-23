import React, { Component, useState } from 'react';
import './Stats.css'
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResponsiveContainer, PieChart, Pie, Legend } from 'recharts';

const data = [
    { name: 'A', value: 50, fill: '#062EAA'},
    { name: 'X', value: 20, fill: '#037B1C'},
    { name: 'O', value: 40, fill: '#E20426' },
    { name: 'Y', value: 70, fill: '#681474' },
    { name: 'H', value: 100, fill: '#94111' },
  ];

const clothesCategories = [
    "Farkut - low waist", "Farkut - normal waist", "Farkut - high waist", "Farkut - very high waist",
    "Housut - low waist", "Housut - normal waist", "Housut - high waist", "Housut - very high waist", 
    "Hame", "Mekko", "T-paita", "Paita", "Toppi", "Haalari", "Shortsit", "Neule", "Neuletakki", "Huppari", "Collage",
    "Legginssit", "Toppatakki", "Villakangastakki", "Trenssi", "Farkkutakki", "Nahkatakki", "Untuvatakki", "Bolero",
    "Poolo", "Jakku", "Viitat & Ponchot", "Liivi", "Kauluspaita"
];


const clothesDropdown = () => {
    let categories = []
    for (let i = 0; i < clothesCategories.length; i++) {
        let hrefIndex = `#/action-${i+1}`
        categories.push(<Dropdown.Item href={hrefIndex}>{clothesCategories[i]}</Dropdown.Item>)
    }

    return categories
    
}



class Stats extends Component {
    render() {
        return (
            <div className="statsContainer">
                <div className="statsHeaderContainer">
                    <h2 className="statsHeaderContainerText">Stats</h2>
                </div>

                <div className="dropDownContainer">
                    
                    <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Range
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Today</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Last Week</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Last Month</Dropdown.Item>
                                <Dropdown.Item href="#/action-4">Last Year</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Filter
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-0">All clothing</Dropdown.Item>
                                {clothesDropdown()}
                            </Dropdown.Menu>
                        </Dropdown>
                </div>
                
                <div className="pieContainer">
                    <ResponsiveContainer>
                        <PieChart>
                            <Pie dataKey="value" data={data} label />
                            <Legend layout={'horizontal'} width={100} wrapperStyle={{ bottom: 30, left: 10, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px'}} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        )
    }
}

export default Stats
