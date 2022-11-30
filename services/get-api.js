import Client from "../lib/axios";


export async function getUser(data) {
    let apiCall = await Client().get("/get-user", data)
    return apiCall.data;
  }
