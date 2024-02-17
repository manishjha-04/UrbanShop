 import bcrypt from 'bcryptjs';

 const users=[
    {
        name:'Admin User',
        email:'admin@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,

    },{
        name:'Manish Jha',
        email:'Manish@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,

    },{
        name:'Aadi',
        email:'aadi@email.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,

    }
 ];

 export default users;