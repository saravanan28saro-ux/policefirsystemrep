import {Listcard} from "./styledcomponents";
const Listoffir = ({data}) => {
    return (
        <div>
            {data.map(fir => (
                <div key={fir.firno}>
                    <h2>FIR Number: {fir.firno}</h2>
                    <Listcard>
                        <p>Name: <br/>{fir.name}</p>
                    <p>Date: <br/> {fir.date}</p>
                    <p>Time: <br/>{fir.time}</p>
                    <p>Place: <br/>{fir.place}</p>
                    <p>Description: <br/>{fir.description}</p>
                    <p>Status: <br/>{fir.status}</p>
                    </Listcard>
                </div>
            ))}
        </div>
    );
};

export default Listoffir;