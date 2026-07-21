//Task-1
interface UserProfile{
    name:string;
    email:number;
}

const userResponse:ApiResponse<UserProfile>={
status:200,
message:"Success",
data:{
    name:"Sharmin",email:"sharmin@MediaList.com"}
}
//Task-2
interface Product {
  title: string;
  price: number;
}
const productResponse: ApiResponse<Product> = {
  status: 200,
  message: "Product fetched successfully",
  data: {
    title: "Mechanical Keyboard",
    price: 3500
  }
};

//Task-3
interface Box<T>{
    content:T;
    createdAt:Date;
}

const stringBox : Box<string>={
    content:"Secret Letter",
    createdAt:new Date()
}
//Task-4
interface Repository<T>{
    id:number;
    data:T;

}

const userRepo: Repository<{username:string;isActive:boolean}>={
    id:1,
    data:{
        username:"Sharmin",
        isActive:true
    }
}