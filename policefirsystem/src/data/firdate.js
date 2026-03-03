export const firdata=[
    {
        firno:"1234",
        name:"Saravanan",
        date:"2023-01-01",
        time:"10:00",
        place:"Chennai",
        description:"Theft of a car",
        status:"Open"
    },
    {
        firno:"5678",
        name:"Kumar",
        date:"2023-02-01", 
        time:"15:00",
        place:"Coimbatore",
        description:"Assault and battery",
        status:"Closed"
    },
    {
        firno:"9012",
        name:"Priya",
        date:"2023-03-01",
        time:"12:00",
        place:"Madurai",
        description:"Fraud",
        status:"Open"   
    }

    ]
export const addfunction=(newfirdata)=>{
    firdata.push(newfirdata);
}

export const policeusers = [
  { username: "saravanan", userid: "TN1234" ,rank:"Inspector",posting:"Chennai","contact":"1234567890"},
  { username: "kumar", userid: "TN5678" ,rank:"Sub-Inspector",posting:"Coimbatore","contact":"0987654321"},
  { username: "priya", userid: "TN9012" ,rank:"Assistant",posting:"Madurai","contact":"1122334455"}
];
