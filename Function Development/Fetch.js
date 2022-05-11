const getRequest = async (API_URL) =>
  await fetch(API_URL, {
    method: "GET",
    headers: {},
    body: {},
  });

const postRequest = async (API_URL) =>
  await fetch(API_URL, {
    method: "POST",
    headers: {},
    body: {},
  });

const deleteRequest = async (API_URL) =>
  await fetch(API_URL, {
    method: "DELETE",
    headers: {},
    body: {},
  });
const putRequest = async (API_URL) =>
  await fetch(API_URL, {
    method: "PUT",
    headers: {},
    body: {},
  });
