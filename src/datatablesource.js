export const userColumns=[{ field: "id", headerName: "ID", width: 70 },
{field: "user", 
headerName: "Users", 
width: 230,
renderCell:(params) =>{
    return(
        <div className="cellWithImg"> 
        <img className="cellImg" src={params.row.img} alt="avatar"/>
        {params.row.username}
        </div>

    );
}
},
{ field: "email", headerName: "Email", width: 230 },
{ field: "age", headerName: "Age", width: 230},
{ field: "status", headerName: "Status", width: 160,
renderCell:(params) =>{
    return(
        
        <div className={`cellWithStatus  ${params.row.status}`}>{params.row.status} </div>

    );}},

];

export const userRows=[
    {
        id:1,
        username : "Snow",
        img:"https://images.pexels.com/photos/16751809/pexels-photo-16751809/free-photo-of-close-up-of-blossoms.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"active",
        email:"isnow@gmail.com ",
        age:"35",
    },
    {
        id:2,
        username : "Jamie",
        img:"https://images.pexels.com/photos/16313994/pexels-photo-16313994/free-photo-of-young-brunette-posing-between-hanging-wildflowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"passive",
        email:" jams@gmail.com",
        age:"18",
    },
    {
        id:3,
        username : "Lanister",
        img:"https://images.pexels.com/photos/7011974/pexels-photo-7011974.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"pending",
        email:"lan@gamil.com ",
        age:"35",
    },
    {
        id:4,
        username : "Danny",
        img:"https://images.pexels.com/photos/17053664/pexels-photo-17053664/free-photo-of-industry-writing-business-emergency.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"active",
        email:" dannyy@gmail.com",
        age:"26",
    },
    {
        id:5,
        username : "Gabriel",
        img:"https://images.pexels.com/photos/16158164/pexels-photo-16158164/free-photo-of-nature-fashion-sunglasses-people.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"passive",
        email:"gabs@gmail.com",
        age:"20",
    },
    {
        id:6,
        username : "Oconnel",
        img:"https://images.pexels.com/photos/16762858/pexels-photo-16762858/free-photo-of-yellow-daffodils-in-vase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"pending",
        email:"ksap@gmail.com",
        age:"45",
    },
    {
        id:7,
        username : "Harry",
        img:"https://images.pexels.com/photos/16256556/pexels-photo-16256556/free-photo-of-photoday.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"pending",
        email:"yuupp@gmail.com",
        age:"26",
    },
    {
        id:8,
        username : "Francis",
        img:"https://images.pexels.com/photos/16995264/pexels-photo-16995264/free-photo-of-bird-winter-animal-dog.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"active",
        email:"gradeff@gmail.com",
        age:"34",
    },
    {
        id:9,
        username : "Bournvile",
        img:"https://images.pexels.com/photos/15350272/pexels-photo-15350272/free-photo-of-steps-in-a-garden.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"passive",
        email:"hrtyub@gmail.com",
        age:"29",
    },
    {
        id:10,
        username : "Davy Jones",
        img:"https://images.pexels.com/photos/16897680/pexels-photo-16897680/free-photo-of-city-road-traffic-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        status:"pending",
        email:"davy@gmail.com",
        age:"30",
    },
];