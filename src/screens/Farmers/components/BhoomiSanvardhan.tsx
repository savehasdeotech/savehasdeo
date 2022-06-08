import React, { ReactElement } from "react";

interface Props {}

function BhoomiSanvardhan({}: Props): ReactElement {
  return (
    <section id="bhoomi-sanvardhan" className="pt-60 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Rejuvenating Soil</h3>
              <h2>Soil Conservation</h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6">            
            <p>Bhoomi Sanvardhan is an effort by Mayank Gandhi which aims to bring vermiculture to our farmers in order to improve organic content in the soil. So far thousands of farmers have availed the benefits of this scheme to rejuvenate their soil.</p>
            <p>Organic matter in the soil promotes soil structure. This, in turn, serves to limit soil erosion and enhances water infiltration and holding capacity, providing better living conditions for plant roots and soil organisms.</p>
            <p>Since the inception of our Bhoomi Sanvardhan (Soil Conservation) scheme, our ground team across different working regions has been organizing regular training sessions for beneficiary farmers who have expressed interest in vermiculture and have received the needful resources from us which includes vermiculture beds, 3kgs of earthworms, training material etc. for every farmer.</p>
            <p>One can enroll with us by calling your nearest Save Hasdeo office or one of our representatives listed below.</p>
            <p><strong>Save Hasdeo Farmer Helpline contact: 8591314651</strong></p>
            <p><strong>Regional Centres:</strong></p>
            <ul>
            <li dir="auto">Madhya Pradesh : 85913114671 (Gaurav Upadhyay)</li>
            <li dir="auto">Marathwada, Maharashtra : 8591304662 (Mukteshwar Kadbhane)</li>
            <li dir="auto">Palghar, Maharashtra : 8830689344 (Sudhir Chinta)</li>
            </ul>
            <p><strong>Vermibeds distributed by Global Vikas Trust's Save Hasdeo till date (22.03.22):</strong></p>
            <ul>
            <li>Marathwada -: 1026</li>
            <li>Madhya Pradesh -:185</li>
            <li>Palghar -: 70</li>
            <li><strong>Total -: 1,281 Farmers</strong></li>
            </ul>
            <p>To learn more, check one of our Monthly Reports on this theme <a href="https://drive.google.com/file/d/15qcVQI1UoyBvUQQWPCyqUfI8Qa85PsCV/view" target="_blank">🔗</a></p>
            </div>
          <div className="col-lg-6">
            <div className="video-area style--two mb-50 mb-lg-0">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/F_qa4_SJV0A" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BhoomiSanvardhan;
