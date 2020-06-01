import apiService from './apiService';

export async function getBrands(vehicleType) {
  let brands;
  await apiService
    .get(`${vehicleType}/marcas.json`)
    .then(resp => (brands = resp));
  return brands;
}

export async function getVehicles(vehicleType, brandId) {
  let vehicles;
  await apiService
    .get(`${vehicleType}/veiculos/${brandId}.json`)
    .then(resp => (vehicles = resp));
  return vehicles;
}

export async function getModels(vehicleType, brandId, vehicleId) {
  let models;
  await apiService
    .get(`${vehicleType}/veiculo/${brandId}/${vehicleId}.json`)
    .then(resp => (models = resp));
  return models;
}

export async function getDetails(vehicleType, brandId, vehicleId, modelId) {
  let models;
  await apiService
    .get(`${vehicleType}/veiculo/${brandId}/${vehicleId}/${modelId}.json`)
    .then(resp => (models = resp));
  return models;
}
