import { Fircard } from "./styledcomponents";
import { useState } from "react";
import Listoffir from "./Listoffir";
import { firdata } from "../data/firdate";

const Fir = () => {

    const [firno, setFirno] = useState("");
    const [filteredFir, setFilteredFir] = useState([]); // show all initially

    const handleChange = (event) => {
        setFirno(event.target.value);
    };

    const search = () => {

        if (firno.trim() === "") {
            setFilteredFir(firdata);
            return;
        }

        const result = firdata.filter(
            (fir) => fir.firno.toLowerCase() === firno.toLowerCase()
        );

        setFilteredFir(result);
    };

    return (
        <div>
            <Fircard>
                <h1>Enter FIR Number</h1>
                <input
                    className="firnoinput"
                    type="text"
                    value={firno}
                    onChange={handleChange}
                    placeholder="FIR Number"
                />
                <button className="searchbutton" onClick={search}>
                    Search
                </button>
            </Fircard>

            <hr />

            <Listoffir data={filteredFir} />
        </div>
    );
};

export default Fir;