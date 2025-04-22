import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { translations } from "helpers/languageMap";
const ContactForm = () => {
  const language = useSelector((state: RootState) => state.language.language);

  return (
    <div className="col-lg-8">
      <div className="section-title mb-0">
        <h4 className="m-0 text-uppercase font-weight-bold">
          {translations[language as "en" | "vi"].contact}
        </h4>
      </div>
      <div className="bg-white border border-top-0 p-4 mb-3">
        <div className="mb-4">
          <h6 className="text-uppercase font-weight-bold">
            {" "}
            {translations[language as "en" | "vi"].contact_info}
          </h6>
          <p className="mb-4">
            {translations[language as "en" | "vi"].contact_content}
          </p>

          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <i className="fa fa-map-marker-alt text-primary mr-2"></i>
              <h6 className="font-weight-bold mb-0">
                {" "}
                {translations[language as "en" | "vi"].contact_from}
              </h6>
            </div>
            <p className="m-0">
              {" "}
              {translations[language as "en" | "vi"].contact_place}
            </p>
          </div>
          <div className="mb-3">
            <div className="d-flex align-items-center mb-2">
              <i className="fa fa-envelope-open text-primary mr-2"></i>
              <h6 className="font-weight-bold mb-0">
                {" "}
                {translations[language as "en" | "vi"].contact_email}
              </h6>
            </div>
            <p className="m-0">deskit1xuho@gmail.com</p>
          </div>
        </div>
        <h6 className="text-uppercase font-weight-bold mb-3">
          {" "}
          {translations[language as "en" | "vi"].contact_form}
        </h6>
        <form>
          <div className="form-row">
            <div className="col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control p-4"
                  placeholder={
                    translations[language as "en" | "vi"].contact_form_name
                  }
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control p-4"
              placeholder={
                translations[language as "en" | "vi"].contact_form_subject
              }
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control p-4"
              placeholder={
                translations[language as "en" | "vi"].contact_form_message
              }
              required
            />
          </div>
          <div>
            <button
              className="btn btn-primary font-weight-semi-bold px-4"
              style={{ height: "50px" }}
              type="submit"
            >
              {translations[language as "en" | "vi"].contact_form_send_message}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
