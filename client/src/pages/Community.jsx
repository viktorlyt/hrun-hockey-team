import React from "react";
import Wrapper from "../assets/wrappers/Community";

const Community = () => {
  return (
    <Wrapper>
      <h1>Community</h1>
      <div className="community-container">
        <p className="b1">
          Castors Hockey Club are proud to be a part of the Community Castors de
          St-Quentin
        </p>
        <div className="community-images">
          <img src="/assets/images/community_1.png" alt="Community Image" />
          <img src="/assets/images/community_2.png" alt="Community Image" />
        </div>
      </div>
      <div className="donations-container">
        <div className="about">
          <h1>Donations</h1>
          <p className="b1">
            The Custors Hockey Club are proud to support our local community. We
            receive a high volume of requests and will do our best to support
            community programs, organizations and non-profits. We cannot
            guarantee that all requests will be supported. In order to be
            considered, please fill out Donation Request and submit with a
            written request highlighting the event and where the monies raised
            will be going towards at least one month prior to event. Please drop
            off at the Custors Hockey Club office, located at Western Financial
            Place.
          </p>
          <h4 className="capitalize-all">
            PLEASE CLICK HERE TO DOWNLOAD YOUR DONATIONS REQUEST FORM
          </h4>
          <button className="long selected download">
            <a
              href="/assets/documents/donation_request_form.pdf"
              download="Donation_Request_Form.pdf"
            >
              Download
            </a>
          </button>
        </div>
        <div className="image-container">
          <img src="/assets/images/donations.png" alt="Donate Image" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Community;
