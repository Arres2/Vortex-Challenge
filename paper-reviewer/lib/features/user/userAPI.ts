// A mock function to mimic making an async request for data
export const fetchUser = async (email:any, password:any ) => {
  const response = await fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const result: { data: any } = await response.json();

  return result;
};
