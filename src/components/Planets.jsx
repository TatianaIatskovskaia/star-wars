import {useEffect, useState} from "react";
import {base_url, period} from "../utils/constants.js";

const Planets = () => {
    const [planets, setPlanets] = useState(() => {
        const saved = localStorage.getItem('planets');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        const timestamp = Number(localStorage.getItem('planetsTime'));
        const isExpired = Date.now() - timestamp > period;

        if (!planets || isExpired) {
            fetch(`${base_url}/v1/planets`)
                .then(res => res.json())
                .then(data => data.map(planet => planet.name))
                .then(names => {
                    localStorage.setItem('planets', JSON.stringify(names));
                    localStorage.setItem('planetsTime', String(Date.now()))
                    setPlanets(names)
                })
                .catch(() => setPlanets(`Error loading crawl`));
        }
    }, [planets])

    if (planets) {
        return planets.map(planet => <option key={planet} value={planet}>{planet}</option>)
    } else {
        return <option disabled>Error loading planets</option>;
    }
};

export default Planets;