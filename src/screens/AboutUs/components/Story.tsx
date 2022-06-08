import React, { ReactElement } from 'react'

interface Props {
    
}
const StoryData = [
  {
    id:1,
    imagePath:'/assets/img/about/drought.jpg',
    content: <> <p>It was the summer of 2016. Mayank Gandhi had quit confrontational politics. However, the fire to change the country continued to burn within. Politics could not be the only way to impact the lives of people for the better. During this period, reports of a severe drought in Marathwada region of Maharashtra emerged.</p> <p> The situation was desperate, and it was in this crisis that the first seeds of Save Hasdeo were sown. Beed district had among the highest suicide rates in the country and was the worst drought affected district in all of Marathwada. Within Beed, Parli taluka (106 villages) had just 1.72% irrigated area as opposed to a 40% Indian average.</p></>
  },
  {
    id:2,
    imagePath:'/assets/img/about/farmer.jpg',
    content: <p>Average monthly income of a family was around Rs 3500, and “people were living because they were not dead.” There was depression and a feeling of hopelessness. Dams were close to 0% storage and drinking water was scarce. Suicides and deaths due to malnutrition were a common occurrence. Most importantly, there were differences, strife, and inequality among the people – with politics and caste system being the major reasons.</p>
  },
  {
    id:3,
    imagePath:'/assets/img/about/mg.jpg',
    content: <p>Mayank Gandhi decided to work with a cluster of 15 villages in Parli in spite of not knowing the local language. As an emergency relief measure, water through tankers were supplied to 38 villages every day for two months. An average of 5 lakh rupees were spent each week for water supply.</p>
  },
  {
    id:4,
    imagePath:'/assets/img/WaterTanker.jpg',
    content: <p>Although water supply was adequate to bring temporary relief to the local community, it was not a viable long-term solution. A concrete and sustainable measure had to be implemented to improve the lives of the people. Moreover, a multi-pronged approach was required to not only address the water woes but also the socio-economic issues plaguing the region.</p>
  },
  {
    id:5,
    imagePath:'/assets/img/about/village.jpg',
    content: <><p>A deliberately and intelligently crafted rural development model had to be created - one that could understand the various nuances and layers of rural India, identify the gaps and shortcomings, and implement small interventions that would overcome the gaps.</p><p>It was decided to create this model called Save Hasdeo with 15 villages in Parli. After the success of this model, the same would be replicated, scaled up, and institutionalized across the country. </p></>
  },
  {
    id:6,
    imagePath:'/assets/img/home/achievements/2020.jpg',
    content: <><p>The working strategy for the transformation of Parli, and eventually the villages of India, had three phases:</p>
    <ul className="list-check mb-5">
      <li><i className="fa fa-check" /> Changing mindset of the people – replace hopelessness with motivation and action.</li>
      <li><i className="fa fa-check" /> Make villages drought-proof by water harvesting and then transform lives by increasing social harmony and increasing incomes multiple times.</li>
      <li><i className="fa fa-check" /> Take this model and replicate, scale-up and institutionalize with the help of policy makers.</li>
    </ul></>
  }
]
function Story({}: Props): ReactElement {
    return (
        <>
        <section id="story" className="pt-60 ov-hidden" style={{backgroundImage: 'url("assets/img/section-pattern/page-title.png")'}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title text-center">
                  <h3 style={{fontFamily:'Caveat, cursive',fontWeight:'bolder',letterSpacing:1.3,fontSize:'36px'}}>Our Story</h3>
                  <h2>Journey of Nation Building</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
          <section className="pb-60">
            <div className="container">
            {/* <iframe src="https://prezi.com/v/embed/i1hxdotphwvk/" allow="autoplay; fullscreen" style={{width:'100%',borderRadius:'20px',height:'90vh'}}></iframe> */}
               
               {StoryData.map((story)=>{
                 return(
                  <div key={story.id} className="row align-items-center justify-content-center pb-40">
                    <div className="col-lg-6">
                      <div className="video-area style--two mb-50 mb-lg-0">
                        <img
                          src={story.imagePath}
                          data-rjs={2}
                          alt=""
                          data-rjs-processed="true"
                          width={540}
                          height={500}
                        />                      
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="project-details">          
                        <div className="row justify-content-center">
                          <div className="col-lg-12">
                            <div className="project-details-content">
                              {story.content}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
                 )
               })}
                

            </div>
          </section>
        </>
    )
}

export default Story
