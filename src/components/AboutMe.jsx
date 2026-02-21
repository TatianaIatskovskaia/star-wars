import {useEffect, useState} from "react";
import {about, base_url, period} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(() => {
        const saved = localStorage.getItem('about_me');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        const timestamp = Number(localStorage.getItem('time'));
        const isExpired = Date.now() - timestamp > period;

        if (!aboutMe || isExpired) {
            fetch(`${base_url}/v1/peoples/1`)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem('about_me', JSON.stringify(data));
                    localStorage.setItem('time', String(Date.now()))
                    setAboutMe(data)
                })
                .catch(() => setAboutMe(`Error loading crawl`));
        }
    }, [aboutMe])

    if (aboutMe) {
        return (
            <div className={'clearfix'}>
                <section className="float-start w-25 mt-1 me-3 mb-3">
                    <img className="w-100" src={`${base_url}/${aboutMe.image}`} alt={`${aboutMe.name}`}/>
                </section>
                <section>
                    {about.map((item) => <p key={item}
                                            className={'text-capitalize far-galaxy'}>{item.replace('_', ' ')}: {aboutMe[item]}</p>)}
                </section>
            </div>

        )
    } else {
        return (
            <p className="far-galaxy">
                <span className="spinner-border text-warning"></span>
                <span className="spinner-grow spinner-grow-sm">Loading...</span>
            </p>
        )
    }
};

export default AboutMe;