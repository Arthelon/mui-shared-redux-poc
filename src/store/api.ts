import { configureDisputeApi } from "redux-dispute-poc";

const api = configureDisputeApi();

export const { middleware, useGetDisputesQuery, useLazyGetDisputesQuery } = api;
export default api.reducer;
