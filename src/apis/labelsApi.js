import clientApi from './clientApi';

const END_POINTS = '/api/constants';

const getLabels = () => {
  return clientApi.get(END_POINTS);
};

export default { getLabels };
