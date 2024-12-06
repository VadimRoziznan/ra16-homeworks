export const fetchServices = async (dispatch) => {
  const response = await fetch('http://localhost:7070/api/services');
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const data = await response.json();
  return data;
};

export const fetchServiceDetails = async (id) => {
  const response = await fetch(`http://localhost:7070/api/services/${id}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
};