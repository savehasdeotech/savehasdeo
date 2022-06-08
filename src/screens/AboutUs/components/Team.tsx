import React, { ReactElement } from "react";
import TeamData from './../../../data/TeamData.json'
import styles from './Team.module.scss'
interface Props { }

function Team({ }: Props): ReactElement {
  const [showTeamType, setShowTeamType] = React.useState('trustee')

  React.useEffect(() => {
    if (showTeamType === "mhteam") {
      document.getElementById("mh-tab").classList.remove("d-none")
      setShowTeamType('mumbaiteam')
    } else if (showTeamType === "mpteam" || showTeamType === "trustee") {
      document.getElementById("mh-tab").classList.add("d-none")
    }
  }, [showTeamType])

  return (
    <section
      id="team"
      className="pt-60 section-pattern bg-img"
      style={{
        backgroundImage:
          'url("assets/img/section-pattern/testimonial-pattern.png")',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center">
              <h3 style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '36px' }}>Team Members</h3> <h2>Our Amazing Team Members</h2>{" "}

              <div className="about-nav-tab mt-20" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <ul className="nav nav-tabs" role="tablist">

                  <li className="nav-items">
                    <a
                      className={`nav-link ${showTeamType === 'trustee' ? 'active' : ''}`}
                      data-toggle="tab"
                      role="tab"
                      aria-selected="false"
                      onClick={() => setShowTeamType('trustee')}
                      style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                    >
                      Trustee
                    </a>
                  </li>

                  <li className="nav-items">
                    <a
                      className={`nav-link ${showTeamType === 'mhteam' ? 'active' : ''}`}
                      data-toggle="tab"
                      role="tab"
                      aria-selected="true"
                      onClick={() => setShowTeamType('mhteam')}
                      style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                    >
                      Maharashtra Team
                    </a>

                    <div className="about-nav-tab d-none mt-30" id="mh-tab" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                      <ul className="nav nav-tabs" role="tablist">

                        <li className="nav-items">
                          <a
                            className={`nav-link ${showTeamType === 'mumbaiteam' ? 'active' : ''}`}
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                            onClick={() => setShowTeamType('mumbaiteam')}
                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                          >
                            Mumbai team
                            </a>
                        </li>
                        <li className="nav-items">
                          <a
                            className={`nav-link ${showTeamType === 'parliteam' ? 'active' : ''}`}
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                            onClick={() => setShowTeamType('parliteam')}
                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                          >
                            Parli team
                          </a>
                        </li>
                        <li className="nav-items">
                          <a
                            className={`nav-link ${showTeamType === 'palgharteam' ? 'active' : ''}`}
                            data-toggle="tab"
                            role="tab"
                            aria-selected="true"
                            onClick={() => setShowTeamType('palgharteam')}
                            style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                          >
                            Palghar team
                            </a>
                        </li>

                      </ul>
                    </div>
                  </li>

                  <li className="nav-items">
                    <a
                      className={`nav-link ${showTeamType === 'mpteam' ? 'active' : ''}`}
                      data-toggle="tab"
                      role="tab"
                      aria-selected="true"
                      onClick={() => setShowTeamType('mpteam')}
                      style={{ fontFamily: 'Caveat, cursive', fontWeight: 'bolder', letterSpacing: 1.3, fontSize: '22px' }}
                    >
                      Madhya Pradesh Team
                    </a>
                  </li>
                </ul>
              </div>


              <div className="row">
                {TeamData[showTeamType].map((teams) => {
                  return (
                    <div className="col-lg-3 col-sm-6">
                      <div className={styles.singleMember}>
                        <img
                          src={teams.imagePath}
                          data-rjs={2}
                          alt=""
                          data-rjs-processed="true"
                        />
                        <div className="info-front text-center">
                          <h3 className={"mb-10 mt-20"} style={{ color: "#4d4d4d" }}>{teams.name}</h3>
                          <p> {teams.designation} </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Team;
