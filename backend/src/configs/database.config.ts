import {connect, ConnectOptions} from 'mongoose';

export const dbConnect = () =>{
    connect('mongodb://localhost:27017/foodmine' , {
    } as ConnectOptions).then(
        () => console.log('Connected to MongoDB'),
    (error)=> console.log(error)
    )
}