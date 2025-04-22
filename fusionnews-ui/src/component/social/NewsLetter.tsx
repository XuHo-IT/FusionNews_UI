import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'redux/store';
import { translations } from 'helpers/languageMap';

const NewsLetter = () => {
  const language = useSelector((state: RootState) => state.language.language);

    return (

        <div className="mb-3">
            <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">{translations[language as 'en' | 'vi'].newsletter}   </h4>
            </div>
            <div className="bg-white text-center border border-top-0 p-3">
                <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                <div className="input-group mb-2" style={{ width: "100%" }}>
                    <input type="text" className="form-control form-control-lg" placeholder="Your Email" />
                    <div className="input-group-append">
                        <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                    </div>
                </div>
                <small>Lorem ipsum dolor sit amet elit</small>
            </div>
        </div>

    )
}

export default NewsLetter