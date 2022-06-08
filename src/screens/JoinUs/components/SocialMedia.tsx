import React, { ReactElement } from "react";
import SocialMediaAccounts from './../../../data/SocialMediaAccounts.json'
interface Props {}

function SocialMedia({}: Props): ReactElement {
  return (
    <section className="pt-0 pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Follow us @GlobalParli</h3> <h2>Social Media</h2>{" "}
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
         
         {SocialMediaAccounts.map(account => {
             return(
                <a href={account.link} target="_blank" className="col-lg-4 col-sm-6">
                    <div className="single-service text-center">
                        <div className="icon">
                            <i className={account.iconClass} aria-hidden="true"/>
                        </div>
                        <div className="content">
                            <h4>{account.name}</h4>
                        </div>
                    </div>
                </a>
             )
         })}
          

          
        </div>
      </div>
    </section>
  );
}

export default SocialMedia;
