import Client from "../lib/axios";

export async function addRezerveTimeUser(number, nCode, data) {
    let apiCall = await Client().put(`/admin/reserve-time?number=${number}&nCode=${nCode}`, data)
    return apiCall.data;
}

export async function updateUser(data) {
    let apiCall = await Client().put("/user", data)
    return apiCall.data;
}
export async function updatePassword(data) {
    let apiCall = await Client().put("/change-password", data)
    return apiCall.data;
}