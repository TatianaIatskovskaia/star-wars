import {useEffect, useState} from "react";
import {about, base_url} from "../utils/constants.js";

const AboutMe = () => {
    const [aboutMe, setAboutMe] = useState(null);

    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => setAboutMe(data))
            .catch(() => setAboutMe(`Error loading crawl`));
    }, [])

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