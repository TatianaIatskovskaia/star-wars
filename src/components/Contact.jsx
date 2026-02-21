import {useState} from "react";
import Planets from "./Planets.jsx";

const Contact = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        planet: '',
        subject: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className="container">
            <form>
                <label htmlFor="fname">First Name</label>
                <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name.."
                    value={formData.firstname}
                    onChange={handleChange}
                />

                <label htmlFor="lname">Last Name</label>
                <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name.."
                    value={formData.lastname}
                    onChange={handleChange}
                />

                <label htmlFor="planet">Planet</label>
                <select
                    id="planet"
                    name="planet"
                    value={formData.planet}
                    onChange={handleChange}
                >
                    <Planets/>
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{height: '200px'}}
                    value={formData.subject}
                    onChange={handleChange}
                ></textarea>

                <input className={'btn btn-danger border-warning'} type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default Contact;