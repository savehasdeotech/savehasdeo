import React, { ReactElement } from 'react'
import ProductionData from './../../../data/ProductionData'
import { Doughnut, Pie } from "react-chartjs-2";
import { chartColors } from "./colors";
interface Props {
    
}

function Production({}: Props): ReactElement {

    const productionDataObject = [
        {
            id:1,
            fruitName:"Lemon",
            data:{
                labels: ['January-March:2023', 'January-March:2024', 'January-March:2025', 'January-March:2026'],
                datasets: [{
                    data: [2450, 2940, 3920, 4900],
                    label: 'Tonnes of Production',
                    backgroundColor: chartColors,
                    borderColor: "white",
                    borderWidth: 1
                }]
              }
        },
        // {
        //     id:2,
        //     fruitName:"Drumsticks",
        //     data:{
        //         labels: ['April-June:2021', 'October-December:2021', 'April-June:2022', 'October-December:2022', 'April-June:2023', 'October-December:2023', 'April-June:2024', 'October-December:2024'],
        //         datasets: [{
        //             data: [1540, 1925,2310,2310,2310,2310,2310,2310],
        //             label: 'Tonnes of Production',
        //             backgroundColor: chartColors,
        //             borderColor: "white",
        //             borderWidth: 1
        //         }]
        //       }
        // },
        {
            id:3,
            fruitName:"Guava",
            data:{
                labels: ['April-June:2022', 'April-June:2023', 'April-June:2024', 'April-June:2025', 'April-June:2026'],
                datasets: [{
                    data: [5930, 7120, 8305, 9500, 9500],
                    label: 'Tonnes of Production',
                    backgroundColor: chartColors,
                    borderColor: "white",
                    borderWidth: 1
                }]
              }
        },
        {
            id:4,
            fruitName:"Mango",
            data:{
                labels: ['April-June:2022', 'April-June:2023', 'April-June:2024', 'April-June:2025', 'April-June:2026'],
                datasets: [{
                    data: [3650, 4005, 4370, 4735, 4735],
                    label: 'Tonnes of Production',
                    backgroundColor: chartColors,
                    borderColor: "white",
                    borderWidth: 1
                }]
              }
        },
        {
            id:5,
            fruitName:"Custard Apple",
            data:{
                labels: ['October-December:2023', 'October-December:2024', 'October-December:2025', 'October-December:2026'],
                datasets: [{
                    data: [3030, 4550, 4850, 5155],
                    label: 'Tonnes of Production',
                    backgroundColor: chartColors,
                    borderColor: "white",
                    borderWidth: 1
                }]
              }
        },
        {
            id:6,
            fruitName:"Papaya",
            data:{
                labels: [ '2020', '2021'],
                datasets: [{
                    data: [8515,6810],
                    label: 'Tonnes of Production',
                    backgroundColor: chartColors,
                    borderColor: "white",
                    borderWidth: 1
                }]
              }
        }
    ]

    
    return (
        <section id="production2020" className="pt-60 pb-60 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/price-pattern.png")'}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                        <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>2020 Production</h3>
                        <h2>Production Predictions for 2020 plantation</h2>
                        </div>
                    </div>
                </div>
                {productionDataObject.map((fruit)=>{
                        return(
                        <div key={fruit.id} className="row justify-content-center pb-60">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h3>{fruit.fruitName}</h3>
                                </div>
                            </div>
                            <div className={`${fruit.fruitName === 'Drumsticks' ? 'col-lg-12' : 'col-lg-6'}  `}>
                                <Doughnut
                                    data={fruit.data}
                                        options={{
                                            legend: {
                                                display: true,
                                                position: 'top'
                                            },
                                            datalabels: {
                                                display: true,
                                                color: "white",
                                            }
                                        }}
                                />
                            </div>
                        </div>
                        )
                })}
                
                
                {/* {
                    ProductionData.fruits.map((fruit)=>{
                        return(
                            <div key={fruit.id}>
                                <div className="row">
                                    <div className="col-12">
                                        <div className="section-title text-center">
                                            <h3>{fruit.fruitName}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="pricing-navtab">
                                    <ul className="row nav nav-tabs justify-content-center" role="tablist">
                                        {fruit.productionPredictions.map((prediction) =>{
                                            return(
                                                <li className="nav-item col-lg-3 col-sm-6">
                                                    <a href="#" className="nav-link text-center" data-toggle="tab" role="tab">
                                                        <h2>{prediction.production} tonnes</h2>
                                                        <br/>
                                                        <p>{prediction.month}</p>
                                                    </a>
                                                </li>
                                            )
                                        })}
                                        
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                } */}
                

            </div>
            </section>
    )
}

export default Production
