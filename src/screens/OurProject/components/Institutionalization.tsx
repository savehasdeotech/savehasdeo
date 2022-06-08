import React, { ReactElement } from "react";

interface Props {}

function Institutionalization({}: Props): ReactElement {
  return (
    <div>
      <section
      id="institutionalization"
        className="services-section py-5 py-md-0 mt-60"
        style={{ minHeight: "100vh" }}
      >
        <div className="section-title text-center mb-0">
          {/* <h3
            style={{
              fontFamily: "Caveat, cursive",
              fontWeight: "bolder",
              letterSpacing: 1.3,
              fontSize: "36px",
            }}
          >
            Our Experience
          </h3>{" "} */}
          <h2> Institutionalization</h2>{" "}
          <p>
            We know that, to change the country, we will need to implement our
            model of ”Rural Economic Revolution” across India. Moreover, a
            multi-pronged approach will be required to achieve this goal.
          </p>
          <br />
        </div>
        <div className="row m-auto p-5">
          <div className="col-lg-6">
            <p>
              The approach will involve developing a training syllabus for
              specific crop plantation requirements and post-harvest management
              strategies, setting up farmer-training institutions to deliver
              residential trainings, institutionalizing the Save Hasdeo process
              through a Standard Operating Procedure, and experimenting with a
              policy-driven top-down model.
            </p>
            <p>
              We not only plan to develop a training syllabus for a residential
              training institute in Parli, but also plan to work with State
              Governments to help create robust horticulture policies, while
              simultaneously creating an S.O.P. to implement Save Hasdeo models
              across the country.
            </p>
            <p>
              Save Hasdeo has already started working closely with the
              government and international organizations to participate and
              influence creation of policies and task forces.
            </p>
          </div>
          <div className="col-lg-6">
            <p>
              In that regard, we met the Union Agriculture Minister, Union
              Agriculture Secretary, ICAR, FICCI, some of the top bureaucrats in
              Madhya Pradesh, some Union Ministers, and worked on a possible
              meeting with the Chief Ministers of Madhya Pradesh and Gujarat.
            </p>
            <p>
              Our Discussions with the Agriculture Minister of India focused on
              training for the farmers. He also provided us assurance of the
              marketing support. He insisted us to focus on the Kisan Mitra
              schemes. Our Discussions with ICAR focused on upgrading the
              structure of KVK.
            </p>
            <p>
              Additionally, we are also in talks with embassies of the
              Netherlands & Israel for Technology Management resources for our
              farmers.
            </p>
            <p>
              Therefore, we believe that with our Scale & Speed of work at
              Institutional level, we will be able to Transform India.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Institutionalization;
