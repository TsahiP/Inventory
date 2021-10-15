import labelsApi from '../apis/labelsApi';

const handleGetLabels = async () => {
  const response = await labelsApi.getLabels();
  if (!response.ok) return response.data;
  return response.data.LABELS;
};

export default { handleGetLabels };
