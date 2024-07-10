
import data from "public/mock_data.json" 



type Credentials = {
    email:string;
    password:string;
}

export default async function signIn(obj:Credentials){
  data.map(obj2 => {
    if(obj2.email === obj.email)return obj2
    else return 
  })
  return 

}