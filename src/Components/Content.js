import React from "react";

function Content() {
  return (
    <div>
      <section class=""></section>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                     <img class="d-block w-100" src="Images/bloom.jpg" alt="First slide" style={{height:"auto"}}/>
                  </div>
                  <div class="carousel-item">
                     <img class="d-block w-100 " src="Images/marketplace.jpg" alt="Second slide" style={{height:"auto"}}/>
                  </div>
                </div>
               </div>

      <section class="bg-light" id="marketplace">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">
                Welcome To Our Marketplace
              </h3>
            </div>
          </div>
          <div class="row">
            <p class="text-center text-secondary mt-4">
              Our marketplace will assist you in finding the best vendors for
              all the services you require for your business. Have a look at the
              services provided by the vendors, their costs as well as their
              ratings by our clients.
            </p>
          </div>
        </div>
      </section>

      <section class="" id="vendors">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-12">
              <h3 class="text-center mt-4 text-secondary">Our Vendors</h3>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="Images/market-analysis.jpeg"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Market Analysis</h4>
                  <p class="card-text text-secondary">
                    Our vendors perform in-depth research and reporting into a
                    variety of markets. They also analyze market activity to
                    provide you with custom market insight and new perspectives
                    into your own marketing campaigns.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    See Vendors
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="Images/cybersecurity-services.jpeg"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Cybersecurity</h4>
                  <p class="card-text text-secondary">
                    Gain access to next-generation cybersecurity consulting
                    services to help your organization build cyber resilience
                    from the inside out. Our vendors will help you detect and
                    defend against cyber attacks as effectively as possible.
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    See Vendors
                  </a>
                </div>
              </div>
            </div>
            <div class="col-sm-4 mb-5">
              <div class="card mt-4">
                <img
                  class="card-img-top"
                  src="Images/digital-marketing.jpeg"
                  alt=""
                />
                <div class="card-body">
                  <h4 class="card-title text-secondary">Digital Marketing</h4>
                  <p class="card-text text-secondary">
                    Have marketing methods and practices implemented for you
                    that are used on the Internet to promote products and
                    services to your potential consumers. We use digital
                    platforms like search engines, social media and e-campaigns.{" "}
                  </p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-primary">
                    See Vendors
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="" id="services">
        <div class="container">
          <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center text-secondary mt-4">Our Top Services</h3>
            <h3>Market Analysis</h3>
          </div>
          <div class="accordion" id="accordionExample">
            <div class="card">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    4SiGHT Research and Analytics
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  4SiGHT Research and Analytics is the fastest growing marketing
                  insights company in Middle East. In a short time, 4SiGHT has
                  grown quickly through repeat business and continuous
                  investment in resources and infrastructure, showing a strong
                  commitment to their clients in delivering trusted advisory
                  services. It has strong partnerships with clients across FMCG,
                  Banking and Finance, Telecom, Real Estate, Retail, Government
                  sector and others. 4SiGHT has market research solutions for
                  every stage of your business. Whether it’s a new market, new
                  product, new segment or a new brand. Whether you want to grow
                  or you want to consolidate. 4SiGHT research solutions will
                  meet all your market research needs at every stage of your
                  business. The company believes strongly in technologically
                  enabled research solutions and offers Eye Tracking research
                  and customized delivery solutions.
                  <p>
                    <b>Website: https://4sightglobal.com/</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Omnibus Marketing Research and Consultancies
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Omnibus Marketing Research and Consultancies is a leading full
                  service Market research and Consultancy company with offices
                  in Dubai, Abu Dhabi and Casablanca. They do Qualitative
                  Research and Quantitative Research and provide valuable
                  insights to support your business strategy.
                  <p>
                    <b>Website: https://omnibusmr.com/</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Insight Scouts Research and Consultancy
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Insight Scouts is a boutique market research agency
                  headquartered in Nicosia, Cyprus, that covers markets across
                  Central/Eastern Europe, Middle East and North Africa. They
                  offer a range of quantitative, qualitative and mystery
                  shopping research services, backed by quality control
                  procedures. Their experience extends beyond most industry
                  sectors, with particularly strong expertise in serving
                  Healthcare and Automotive client.
                  <p>
                    <b>Website: https://www.insightscouts.eu/</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-light mt-5" id="client">
        <div class="container">
          <div class="row text-center">
            <div class="col-sm-12 col-md-12 mb-4">
              <h3 class="text-center mt-4 text-secondary">Client Reviews</h3>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/businesswoman.webp"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">
                  Anna Deynah
                </h4>
                <h6 class="font-weight-bold blue-text my-3">Managing Director at ABC</h6>
                <p class="font-weight-normal dark-grey-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                  eos id officiis hic tenetur quae quaerat ad velit ab hic
                  tenetur.
                </p>
              </div>
            </div>

            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/businessman.png"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
                <h6 class="font-weight-bold blue-text my-3">Regional Manager at ABC</h6>
                <p class="font-weight-normal dark-grey-text">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam
                  corporis suscipit laboriosam, nisi ut aliquid commodi.
                </p>
              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial mb-5">
                <div class="avatar mx-auto">
                  <img
                    src="Images/businesswoman.webp"
                    class="rounded-circle z-depth-1 img-fluid"
                  />
                </div>
                <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
                <h6 class="font-weight-bold blue-text my-3">Founder at ABC</h6>
                <p class="font-weight-normal dark-grey-text">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Content;
