import {Listcard} from "./styledcomponents";
const Listoffir = ({data}) => {
    return (
        <a href="https://pbs.twimg.com/media/FGXrSpeVgAQG4hR?format=jpg&name=medium" style={{textDecoration:"none",color:"black"}}>
        <div >
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
        </div></a>
    );
};

export default Listoffir;