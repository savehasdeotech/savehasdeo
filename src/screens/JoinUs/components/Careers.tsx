import React, { ReactElement } from 'react'
import styles from './Careers.module.scss'

interface Props {
    
}

function Careers({}: Props): ReactElement {
    return (
        <section id="careers" className="pt-100 pb-90 section-pattern bg-img" style={{backgroundImage: 'url("assets/img/section-pattern/feature-pattern.png")'}}>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="section-title text-center">
                        <h3>Jobs</h3>
                        <h2>Careers</h2>
                        <p className={`${styles.careerintro}`}>
                            Global Vikas Trust is a not for profit organization founded by Mayank Gandhi, of which Save Hasdeo is a movement of Rural Economic Transformation with a focused goal of Increasing Farmer Incomes. 
                            So far, we have successfully achieved an increase in farmer incomes from Rs. 10k - 20k per acre to over Rs. 2,00,000 per acre, benefitting thousands of farmer families and environment. Till date we have planted over 1 crore fruit trees, across thousands of villages in Maharashtra and Madhya Pradesh.     
                        </p>
                        <p className={`${styles.careerintro}`}>
                                We are currently recruiting passionate individuals to scale up this initiative across India.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                    <div className="col-12 accordion" id="accordionExample">

                        <div className="card">
                            <div className="card-header" id="headingOne">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" style={{paddingLeft:"25px"}} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                        Field Associate - Agronomist
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>
                                        <b>Reporting to:  </b>
                                        Project Manager
                                    </p>
                                    <p>
                                        <b>Responsibilities:  </b>
                                    </p>
                                    <p>
                                        &#8680; Planning, developing, implementing and managing the overall Swades digital program strategy. <br/>
                                        &#8680; Handling strategic online initiatives. <br />
                                        &#8680; Leading marketing campaigns from the idea stage to their execution & implementation. <br />
                                        &#8680; Measures and reports performance of all digital marketing campaigns and assesses against goals (ROI and KPIs). <br />
                                        &#8680; Brainstorms new and creative growth strategies through digital marketing. <br />
                                        &#8680; Collaborate with agencies and other vendor partners. <br />
                                        &#8680; Evaluate emerging technologies. <br />
                                        &#8680; Stay up to date with the latest technology and best practices. <br />
                                        &#8680; Manage and oversee various digital marketing channels. <br />
                                        &#8680; Prepare and manage the digital marketing budget. <br />
                                        &#8680; Connecting with the targeted community to move them to the digital platform. <br />
                                        &#8680; Orientation/linking for the rural audience. <br />
                                        &#8680; Fulfilled with technical knowledge of horticulture <br />
                                    </p> 
                                    <p>
                                        <b>Education & Experience:  </b>
                                    </p>
                                    <p>
                                        &#8680; B Sc. /M Sc. in Agriculture / Horticulture. <br />
                                        &#8680; 0 - 2 years of experience in the associate domain. <br />
                                    </p>
                                    <p>
                                        <b>Salary:  </b>
                                        15K - 20K per month
                                    </p>
                                    <p>
                                        <b>Location:  </b>
                                        Madhya Pradesh
                                    </p>
                                    <div style={{textAlign: "center"}}>
                                        <button type="button" className={`btn btn-outline-primary ${styles.apply}`}>
                                            <a href="mailto: hr@globalparli.org?cc=connect@globalparli.org&subject= Application%20for%20Field Associate - Agronomist">Apply Now</a>
                                        </button>
                                    </div>
                                    <p style={{ textAlign: "center" }}>
                                        <b>Note: Please attach your resume when you apply for this position </b>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="headingTwo">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" style={{ paddingLeft: "25px" }} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Account Executive
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>
                                        <b>Reporting to:  </b>
                                        Accounts Head
                                    </p>
                                    <p>
                                        <b>Responsibilities:  </b>
                                    </p>
                                    <p>
                                        &#8680; Receipts & Payments, Expenses, Sales & Purchases Entry (in Tally.ERP9). <br />
                                        &#8680; Preparing accounts and tax returns. <br />
                                        &#8680; Using accounting software to create spreadsheets and reports. <br />
                                        &#8680; Administering payrolls and controlling income and expenditure. <br />
                                        &#8680; Auditing financial information of the organization. <br />
                                        &#8680; Compiling and presenting reports, commentaries, and financial statements & analyzing accounts. <br />
                                        &#8680; Managing colleagues, workloads, and deadlines. <br />
                                        &#8680; Working on any other tasks as and when allotted. <br />
                                    </p>
                                    <p>
                                        <b>Education & Experience:  </b>
                                    </p>
                                    <p>
                                        &#8680; M.Com <br />
                                        &#8680; 0 - 2 years of experience. <br />
                                    </p>
                                    <p>
                                        <b>Qualifications/Skills:</b>
                                    </p>
                                    <p>
                                        &#8680; Microsoft office 2007/2008. <br />
                                        &#8680; MS. Word & MS. Excel (Vlookup, Hlookup, Pivot table, Sum if) <br />
                                        &#8680; Tally 9 & ERP 9 <br />
                                    </p>
                                    <p>
                                        <b>Salary:  </b>
                                        10K - 15K per month
                                    </p>
                                    <p>
                                        <b>Location:  </b>
                                        Mumbai
                                    </p>
                                    <div style={{ textAlign: "center" }}>
                                        <button type="button" className={`btn btn-outline-primary ${styles.apply}`}>
                                            <a href="mailto: hr@globalparli.org?cc=connect@globalparli.org&subject= Application%20for%20Account Executive">Apply Now</a>
                                        </button>
                                    </div>
                                    <p style={{ textAlign: "center" }}>
                                        <b>Note: Please attach your resume when you apply for this position </b>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="headingThree">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" style={{ paddingLeft: "25px" }} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Video Editing Intern
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>
                                        <b>Reporting to:  </b>
                                        PR Lead
                                    </p>
                                    <p>
                                        <b>Responsibilities:  </b>
                                    </p>
                                    <p>
                                        &#8680; Create campaign related promotional videos when required<br />
                                        &#8680; Produce creative assets including motion graphics, layouts, and visual standards for marketing activities across multiple channels<br />
                                        &#8680; Create and edit videos for various social platforms YouTube, Instagram reels, Facebook<br />
                                        &#8680; Scout for stock videos, audios and construct inspiring stories with the content team<br />
                                        &#8680; Reordering and fine-tuning the content to ensure the logical sequencing and smooth running of the film/video<br />
                                    </p>
                                    
                                    <p>
                                        <b>Qualifications/Skills:</b>
                                    </p>
                                    <p>
                                        &#8680; Video Editing<br />
                                        &#8680; Graphic Designing<br />
                                        &#8680; English Proficiency(Written + Spoken), Creative Writing & Communications.<br />
                                    </p>
                                    <p>
                                        <b>Salary:  </b>
                                        5K - 8K per month
                                    </p>
                                    <p>
                                        <b>Location:  </b>
                                        Mumbai
                                    </p>
                                    <div style={{ textAlign: "center" }}>
                                        <button type="button" className={`btn btn-outline-primary ${styles.apply}`}>
                                            <a href="mailto: hr@globalparli.org?cc=connect@globalparli.org&subject= Application for Video Editing Intern">Apply Now</a>
                                        </button>
                                    </div>
                                    <p style={{ textAlign: "center" }}>
                                        <b>Note: Please attach your resume when you apply for this position </b>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="card">
                            <div className="card-header" id="headingFour">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" style={{ paddingLeft: "25px" }} type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Content Writer intern
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>
                                        <b>Responsibilities:  </b>
                                    </p>
                                    <p>
                                        &#8680; Prepare well-structured drafts for email and communication letters (invitations, applications, reports, concept notes, SOPs, etc. ) <br />
                                        &#8680; Research domain-related topics (online sources, interviews, and news) <br />
                                        &#8680; Proofread and edit content posts & reports before publication or for GVT  <br />
                                        &#8680; Coordinate with social media & digital teams to illustrate articles <br />
                                        &#8680; Conduct simple keyword research and use SEO guidelines to increase web traffic. <br />
                                        &#8680; Identify needs and gaps in our content and recommend new topics and promote content on social media. <br />
                                    </p>
                                    <p>
                                        <b>Education & Experience:  </b>
                                    </p>
                                    <p>
                                        &#8680; Bachelor's/Master's degree in Journalism or Literature <br />
                                        &#8680; 0 - 2 years of experience. <br />
                                    </p>
                                    <p>
                                        <b>Qualifications/Skills:</b>
                                    </p>
                                    <p>
                                        &#8680; Creative Writing, English Proficiency (Written,Spoken) . <br />
                                        &#8680; Digital Marketing, Report Writing <br />
                                    </p>
                                    <p>
                                        <b>Salary:  </b>
                                        5K - 8K per month
                                    </p>
                                    <p>
                                        <b>Location:  </b>
                                        Mumbai
                                    </p>
                                    <div style={{ textAlign: "center" }}>
                                        <button type="button" className={`btn btn-outline-primary ${styles.apply}`}>
                                            <a href="mailto: hr@globalparli.org?cc=connect@globalparli.org&subject= Application%20for%20Account Executive">Apply Now</a>
                                        </button>
                                    </div>
                                    <p style={{ textAlign: "center" }}>
                                        <b>Note: Please attach your resume when you apply for this position </b>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header" id="headingFive">
                                <h2 className="mb-0">
                                    <button className="btn btn-link btn-block text-left collapsed" style={{ paddingLeft: "25px" }} type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                        MIS Executive
                                    </button>
                                </h2>
                            </div>
                            <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                <div className="card-body">
                                    <p>
                                        <b>Responsibilities:  </b>
                                    </p>
                                    <p>
                                        &#8680; Proficiency in Google Sheets MS Excel (Advanced Functions and Formula).  <br />
                                        &#8680; Well-versed in creating MIS Reports and dashboards and present them to relevant departments.<br />
                                        &#8680; Publishing Daily, Weekly and Monthly reports to help management to take corrective actions. <br />
                                        &#8680; Capability to work efficiently in a team as well as independently during Project Management <br />
                                        &#8680; Responsible to generate, maintain, consolidate and track various reports. <br />
                                        &#8680; Provide support and maintenance to existing management information systems (MIS). Provide recommendations to update current MIS to improve reporting efficiency and consistency.<br />
                                        &#8680; Analysis of process and prepare Adhoc MIS Ability to understand Organizational needs and apply analytical concepts to provide solutions. <br />
                                    </p>
                                    <p>
                                        <b>Education & Experience:  </b>
                                    </p>
                                    <p>
                                        &#8680; Bachelor's/Master's degree in any Stream  <br />
                                        &#8680; 2 years of experience. <br />
                                    </p>
                                    <p>
                                        <b>Salary:  </b>
                                        15K - 20K per month
                                    </p>
                                    <p>
                                        <b>Location:  </b>
                                        Mumbai, Palghar, Madhya-Pradesh
                                    </p>
                                    <div style={{ textAlign: "center" }}>
                                        <button type="button" className={`btn btn-outline-primary ${styles.apply}`}>
                                            <a href="mailto: hr@globalparli.org?cc=connect@globalparli.org&subject= Application%20for%20Account Executive">Apply Now</a>
                                        </button>
                                    </div>
                                    <p style={{ textAlign: "center" }}>
                                        <b>Note: Please attach your resume when you apply for this position </b>
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>
            </div>
        </div>
        </section>

    )
}

export default Careers
