import Client from "../lib/axios";

export async function addRezerveTimeUser(number, nCode, data) {
    let apiCall = await Client().put(`/admin/reserve-time?number=${number}&nCode=${nCode}`, data)
    return apiCall.data;
}