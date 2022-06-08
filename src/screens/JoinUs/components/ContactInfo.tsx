import React, { ReactElement, useState } from "react";

interface Props {}

function ContactInfo({}: Props): ReactElement {

  const [data, setData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",    
  });

  const {name, email, company, phone, message} = data;

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Thank You for reaching out to us. We will be reaching out to you shortly!")
    try {
      const response = await fetch("https://v1.nocodeapi.com/nemil/google_sheets/MszeAIoNuWsNKKNv?tabId=Sheet1" , {
          method : "POST",
          headers : {
            'Content-Type':'application/json'
          },
          body : JSON.stringify([[name, email, company, phone, message, new Date().toLocaleString()]])  //Here Json stringify uses 2-D array so there are double square brackets
        }
      );
      await response.json();
      setData({...data, name:"", email:"", company:"", phone:"", message:""})
    } 
    catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="contactus" className="pt-60 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="contact-info">
              <h3>Contact Info</h3>
              <p>
                We are always available for you.
              </p>
              <div className="row">
                <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                  <div className="image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="50px"
                      height="43px"
                      className="svg replaced-svg"
                      viewBox="0 0 43px 50px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(251, 36, 117)"
                        d="M48.677,43.006 C48.507,43.006 48.341,42.973 48.179,42.909 L36.446,38.175 L25.461,42.924 L25.388,42.942 C25.271,42.983 25.130,43.006 25.000,43.006 C24.872,43.006 24.743,42.984 24.607,42.939 L24.522,42.921 L24.481,42.900 L13.553,38.175 L1.821,42.910 C1.660,42.973 1.493,43.006 1.327,43.006 C1.062,43.006 0.805,42.925 0.582,42.772 C0.217,42.523 0.000,42.109 0.000,41.667 L0.000,6.257 C0.000,5.707 0.327,5.219 0.835,5.015 L13.185,0.031 L13.251,0.025 C13.343,0.005 13.381,-0.004 13.423,-0.008 L13.590,-0.016 C13.629,-0.016 13.689,-0.014 13.741,-0.008 L13.843,0.006 L13.879,0.023 L13.949,0.044 L13.995,0.044 L14.054,0.070 L14.081,0.075 L25.000,4.804 L35.969,0.059 L36.180,0.009 L36.299,-0.011 C36.330,-0.014 36.384,-0.016 36.432,-0.016 C36.485,-0.016 36.565,-0.016 36.655,0.006 L36.799,0.040 L36.913,0.076 L37.024,0.119 L49.235,5.871 C49.701,6.086 50.000,6.561 50.000,7.080 L50.000,41.667 C50.000,42.107 49.785,42.519 49.425,42.770 C49.193,42.925 48.938,43.006 48.677,43.006 ZM2.655,7.164 L2.655,39.688 L12.245,35.819 L12.245,3.294 L2.655,7.164 ZM37.755,35.819 L47.345,39.688 L47.345,7.931 L37.755,3.417 L37.755,35.819 ZM14.900,35.844 L23.673,39.636 L23.673,7.143 L14.900,3.346 L14.900,35.844 ZM26.327,7.139 L26.327,39.636 L35.100,35.844 L35.100,3.346 L26.327,7.139 Z"
                      />
                    </svg>
                  </div>
                  <div className="media-body">
                    <h4><a href="https://maps.app.goo.gl/coUBiV4iBW3zSdT59">Office Location</a></h4>
                    <p>
                    1202, 12th floor, Mohini Towers, 5th Rd, Govind Dham, Ram Krishna Nagar, Khar West, Mumbai, Maharashtra 400052
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                  <div className="image">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="51px"
                      height="51px"
                      className="svg replaced-svg"
                      viewBox="0 0 51px 51px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(251, 36, 117)"
                        d="M48.854,24.661 C48.769,24.671 48.695,24.682 48.610,24.682 C47.923,24.682 47.320,24.196 47.204,23.499 C46.368,18.578 44.041,14.089 40.466,10.519 C36.891,6.960 32.396,4.626 27.468,3.792 C26.685,3.655 26.167,2.926 26.294,2.145 C26.431,1.374 27.161,0.845 27.933,0.983 C33.454,1.923 38.478,4.521 42.476,8.513 C46.474,12.505 49.076,17.521 50.017,23.034 C50.155,23.805 49.626,24.544 48.854,24.661 ZM27.542,10.055 C30.894,10.625 33.951,12.209 36.373,14.628 C38.795,17.046 40.382,20.098 40.953,23.446 C41.080,24.228 40.562,24.967 39.779,25.094 C39.694,25.104 39.620,25.115 39.536,25.115 C38.848,25.115 38.245,24.629 38.129,23.932 C37.653,21.165 36.352,18.651 34.342,16.645 C32.333,14.638 29.816,13.329 27.045,12.864 C26.262,12.737 25.754,11.987 25.892,11.216 C26.029,10.445 26.759,9.928 27.542,10.055 ZM18.065,19.465 C17.282,20.257 16.478,21.080 15.611,21.872 C16.256,23.298 17.145,24.703 18.467,26.371 C21.196,29.719 24.041,32.307 27.171,34.292 C27.478,34.482 27.838,34.662 28.219,34.852 C28.483,34.989 28.758,35.127 29.033,35.275 L32.375,31.948 C33.443,30.881 34.692,30.321 35.992,30.321 C37.304,30.321 38.541,30.892 39.567,31.958 L45.374,37.777 C46.442,38.834 47.003,40.090 47.003,41.400 C47.003,42.699 46.453,43.966 45.406,45.054 C44.951,45.529 44.485,45.983 44.031,46.416 C43.364,47.061 42.730,47.663 42.180,48.328 C42.169,48.349 42.148,48.360 42.137,48.381 C40.530,50.123 38.478,51.000 36.035,51.000 C35.823,51.000 35.590,50.989 35.368,50.979 C31.741,50.746 28.493,49.384 26.061,48.233 C19.694,45.160 14.120,40.798 9.487,35.275 C5.669,30.691 3.110,26.414 1.396,21.799 C0.698,19.919 -0.211,17.046 0.042,13.962 C0.212,12.051 0.984,10.403 2.337,9.051 L5.934,5.429 C5.944,5.418 5.944,5.418 5.955,5.408 C7.012,4.394 8.260,3.855 9.551,3.855 C10.841,3.855 12.068,4.394 13.094,5.408 C13.781,6.041 14.448,6.717 15.082,7.372 C15.400,7.710 15.738,8.048 16.066,8.375 L18.953,11.259 C21.175,13.476 21.175,16.349 18.953,18.567 C18.657,18.863 18.361,19.169 18.065,19.465 ZM16.944,13.276 L14.056,10.393 C13.718,10.044 13.380,9.706 13.052,9.368 C12.406,8.703 11.793,8.080 11.148,7.478 C11.137,7.467 11.127,7.457 11.116,7.446 C10.778,7.108 10.238,6.707 9.572,6.707 C9.032,6.707 8.482,6.971 7.964,7.457 L4.358,11.058 C3.480,11.935 3.004,12.959 2.898,14.195 C2.739,16.127 3.099,18.176 4.083,20.806 C5.680,25.115 8.091,29.128 11.698,33.469 C16.066,38.675 21.323,42.783 27.309,45.677 C29.498,46.723 32.417,47.948 35.559,48.148 C35.717,48.159 35.887,48.159 36.045,48.159 C37.695,48.159 38.954,47.620 40.022,46.480 C40.678,45.709 41.376,45.022 42.063,44.367 C42.518,43.924 42.941,43.523 43.354,43.079 C44.433,41.960 44.433,40.851 43.343,39.773 L37.515,33.954 C37.505,33.944 37.505,33.944 37.494,33.933 C37.166,33.574 36.627,33.162 35.971,33.162 C35.305,33.162 34.734,33.595 34.374,33.954 L30.757,37.566 C30.577,37.746 30.027,38.295 29.149,38.295 C28.800,38.295 28.462,38.210 28.102,38.031 C28.060,38.010 28.018,37.978 27.975,37.957 C27.669,37.767 27.309,37.587 26.928,37.397 C26.505,37.186 26.061,36.964 25.627,36.690 C22.232,34.546 19.154,31.747 16.235,28.156 L16.225,28.146 C14.617,26.108 13.559,24.397 12.808,22.580 C12.798,22.548 12.787,22.517 12.777,22.485 C12.586,21.883 12.417,20.996 13.327,20.088 C13.337,20.067 13.358,20.056 13.380,20.035 C14.300,19.211 15.146,18.366 16.034,17.458 C16.341,17.162 16.637,16.856 16.944,16.550 C18.065,15.430 18.065,14.395 16.944,13.276 Z"
                      />
                    </svg>
                  </div>
                  <div className="media-body">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel: 91 91522 34047">+91 8591314651</a> 
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-12 single-contact-info media align-items-center">
                  
                  <div className="image">
                    
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="50px"
                      height="45px"
                      className="svg replaced-svg"
                      viewBox="0 0 45px 50px"
                    >
                      <path
                        fillRule="evenodd"
                        fill="rgb(251, 36, 117)"
                        d="M48.720,44.937 L1.320,45.000 C1.320,45.000 1.319,45.000 1.319,45.000 C0.979,45.000 0.654,44.870 0.414,44.640 C0.174,44.409 0.039,44.095 0.038,43.768 L-0.000,17.027 C-0.000,17.020 0.002,17.013 0.002,17.006 C0.008,16.621 0.199,16.244 0.553,16.009 L7.745,11.220 L7.745,6.142 C7.745,5.461 8.319,4.909 9.026,4.909 L17.224,4.909 L24.275,0.214 C24.714,-0.079 25.296,-0.077 25.734,0.216 L32.740,4.909 L40.974,4.909 C41.681,4.909 42.254,5.461 42.254,6.142 L42.254,11.280 L49.411,16.074 C49.667,16.245 49.838,16.490 49.915,16.759 C49.944,16.822 49.961,16.931 49.961,17.003 L49.999,43.702 C50.000,44.383 49.427,44.936 48.720,44.937 ZM44.900,42.475 L25.019,27.618 L5.066,42.528 L44.900,42.475 ZM7.745,14.219 L3.532,17.024 L7.745,19.830 L7.745,14.219 ZM2.564,19.380 L2.595,41.252 L18.059,29.697 L2.564,19.380 ZM25.001,2.730 L21.729,4.909 L28.254,4.909 L25.001,2.730 ZM39.693,7.376 L10.306,7.376 L10.306,21.535 L20.182,28.110 L24.234,25.082 C24.701,24.734 25.336,24.746 25.786,25.070 C25.792,25.075 25.797,25.078 25.804,25.082 L29.826,28.089 L39.693,21.480 L39.693,7.376 ZM42.254,14.285 L42.254,19.765 L46.345,17.025 L42.254,14.285 ZM47.403,19.321 L31.947,29.673 L47.435,41.247 L47.403,19.321 ZM15.051,19.958 C15.051,19.277 15.624,18.724 16.331,18.724 L33.668,18.724 C34.375,18.724 34.949,19.277 34.949,19.958 C34.949,20.639 34.375,21.192 33.668,21.192 L16.331,21.192 C15.624,21.192 15.051,20.639 15.051,19.958 ZM33.668,14.777 L16.331,14.777 C15.624,14.777 15.051,14.225 15.051,13.544 C15.051,12.862 15.624,12.310 16.331,12.310 L33.668,12.310 C34.375,12.310 34.949,12.862 34.949,13.544 C34.949,14.225 34.375,14.777 33.668,14.777 Z"
                      />
                    </svg>
                  </div>
                  <div className="media-body">
                    
                    <h4>Email</h4>
                    <p>
                      <a href="mailto: connect@globalparli.org">connect@globalparli.org</a>
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <h3>Send Us Message</h3>
              <form
                method="POST"
                action="sendmail.php"
                className="card shadow-lg p-5 contact-form"
                onSubmit={handleSubmit}
              >
                
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      className="theme-input-style"
                      placeholder="Your Name"
                      value={name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      className="theme-input-style"
                      placeholder="Your Email"
                      value={email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      type="text"
                      name="company"
                      className="theme-input-style"
                      placeholder="Company Name"
                      value={company}
                      onChange={handleChange}
                    />
                  </div>

                  <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="phone"
                      className="theme-input-style"
                      placeholder="Phone"
                      pattern="[1-9]{1}[0-9]{9}"
                      value={phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      className="theme-input-style"
                      value={message}
                      onChange={handleChange}
                      required
                      defaultValue={""}
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn btn-success">
                      <span>Submit</span>
                    </button>
                  </div>
                </div>

                <div className="form-response" />
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;