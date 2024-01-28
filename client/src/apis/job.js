import axios from "axios";
const token = localStorage.getItem("token");
export async function getDataonMount() {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  axios.defaults.withCredentials = true;
  try {
    const response = await axios.get(`${baseURL}/job/alljobs`, {
      headers: {
        token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function dataOnSearch(role, skills) {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  axios.defaults.withCredentials = true;
  try {
    const response = await axios.get(
      `${baseURL}/job/search?role=${role}&skills=${skills}`,
      {
        headers: {
          token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getJobDataID(jobID) {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  try {
    const response = await axios.get(`${baseURL}/job/getjob/${jobID}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function addJob(jobdata) {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  const payload = { ...jobdata };
  try {
    const response = await axios.post(`${baseURL}/job/newjob`, payload, {
      headers: {
        token,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function EditJob(jobID, jobdata) {
  const baseURL = import.meta.env.VITE_APP_BASE_URL;
  const payload = { ...jobdata };
  try {
    const response = await axios.put(`${baseURL}/job/edit/${jobID}`, payload, {
      headers: {
        token,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
