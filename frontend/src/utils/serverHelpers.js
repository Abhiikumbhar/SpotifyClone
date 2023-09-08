import { backendUrl } from "./config";
const makeUnauthenticatedPOSTRequest = async(route, body) =>{
    const response =await fetch(backendUrl + route, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(body),
    });
    const formatedResponse = await response.json();
    return formatedResponse;
};