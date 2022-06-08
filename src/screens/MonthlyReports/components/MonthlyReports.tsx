import React, { ReactElement, useState } from "react";
import MonthlyReports from './../../../data/MonthlyReports.json'
import Image from "next/image";
import styles from './MonthlyReports.module.scss'
import { report } from "process";

interface Props { }

function Reports({ }: Props): ReactElement {
    const [showReportType, setShowReportType] = useState('Reports2021')

    return (
        <section
            id="reports"
            className="pt-100 section-pattern bg-img"
            style={{
                backgroundImage:
                    'url("assets/img/section-pattern/testimonial-pattern.png")',
            }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">

                            <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '36px' }}>Documentations</h3>
                            <h2>Monthly Reports</h2>
                            
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <div className="about-nav-tab mt-20" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <ul className="nav nav-tabs" role="tablist">

                                <li className="nav-items">
                                        <a
                                            className={`nav-link ${showReportType === 'Reports2022' ? 'active' : ''}`}
                                            data-toggle="tab"
                                            role="tab"
                                            aria-selected="false"
                                            onClick={() => setShowReportType('Reports2022')}
                                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                                        >
                                            2022
                                        </a>
                                    </li>

                                    <li className="nav-items">
                                        <a
                                            className={`nav-link ${showReportType === 'Reports2021' ? 'active' : ''}`}
                                            data-toggle="tab"
                                            role="tab"
                                            aria-selected="false"
                                            onClick={() => setShowReportType('Reports2021')}
                                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                                        >
                                            2021
                                        </a>
                                    </li>

                                    <li className="nav-items">
                                        <a
                                            className={`nav-link ${showReportType === 'Reports2020' ? 'active' : ''}`}
                                            data-toggle="tab"
                                            role="tab"
                                            aria-selected="false"
                                            onClick={() => setShowReportType('Reports2020')}
                                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                                        >
                                            2020
                                        </a>
                                    </li>

                                    <li className="nav-items">
                                        <a
                                            className={`nav-link ${showReportType === 'Reports2019' ? 'active' : ''}`}
                                            data-toggle="tab"
                                            role="tab"
                                            aria-selected="true"
                                            onClick={() => setShowReportType('Reports2019')}
                                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                                        >
                                            2019 
                                        </a>
                                    </li>

                                    <li className="nav-items">
                                        <a
                                            className={`nav-link ${showReportType === 'Reports2018' ? 'active' : ''}`}
                                            data-toggle="tab"
                                            role="tab"
                                            aria-selected="true"
                                            onClick={() => setShowReportType('Reports2018')}
                                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                                        >
                                            2018
                                        </a>
                                    </li>

                                    {/* <li className="nav-items">
                                        <a
                                            className={`nav-link ${showReportType === 'Reports2017' ? 'active' : ''}`}
                                            data-toggle="tab"
                                            role="tab"
                                            aria-selected="false"
                                            onClick={() => setShowReportType('Reports2017')}
                                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                                        >
                                            2017
                                        </a>
                                    </li> */}
                                </ul>
                            </div>


                            <div className="row justify-content-center">
                                {/* {MonthlyReports[showReportType].map((report) => {
                                    return (
                                        <div key={report.id} className="col-lg-3 col-sm-6">
                                            <div className="single-service text-center">
                                                <div className="icon">
                                                    <img
                                                        src="assets/img/icons/pdficon.svg"
                                                        data-rjs={2}
                                                        alt=""
                                                        data-rjs-processed="true"
                                                        width={83}
                                                        height={65}
                                                    />
                                                </div>
                                                <a href={report.filePath} target="_blank" className="content">
                                                    <h4>{report.month}</h4>
                                                    <a className="btn-inline" style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bold', letterSpacing: 1, fontSize: '16px' }}>
                                                        Read More
                                                    </a>
                                                </a>
                                            </div>
                                        </div>
                                    );
                                })} */}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Reports;
