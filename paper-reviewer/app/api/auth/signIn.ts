import data from "public/mock_data.json" 

type Credentials = {
    email:string;
    password:string;
}

export default async function signIn(obj:Credential
  ) {
    try {
    //   data.filter(email === obj.email)
        
      res.status(200).json({ success: true })
    } catch (error) {
      if (error.type === 'CredentialsSignin') {
        res.status(401).json({ error: 'Invalid credentials.' })
      } else {
        res.status(500).json({ error: 'Something went wrong.' })
      }
    }
  }