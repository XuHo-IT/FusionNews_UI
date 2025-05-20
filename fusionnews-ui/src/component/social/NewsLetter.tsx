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
                <p>{translations[language as 'en' | 'vi'].emailHead} </p>
                <div className="input-group mb-2" style={{ width: "100%" }}>
                    <input type="text" className="form-control form-control-lg" placeholder={translations[language as "en" | "vi"].yourEmail} />
                    <div className="input-group-append">
                        <button className="btn btn-primary font-weight-bold px-3">{translations[language as 'en' | 'vi'].signUp} </button>
                    </div>
                </div>
                <small>{translations[language as 'en' | 'vi'].emailDown}</small>
            </div>
        </div>

    )
}

export default NewsLetter