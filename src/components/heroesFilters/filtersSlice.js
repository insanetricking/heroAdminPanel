import { createSlice, createAsyncThunk, createEntityAdapter } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

// const initialState = {
// 	filters: [],
// 	activeFilter: "all",
// 	filtersLoadingStatus: "idle",
// };

const filtersAdapter = createEntityAdapter();

const initialState = filtersAdapter.getInitialState({
	activeFilter: "all",
	filtersLoadingStatus: "idle",
});

export const fetchFilters = createAsyncThunk("filters", async () => {
	const { request } = useHttp();
	return await request("http://localhost:3001/filters");
});

const filtersSlice = createSlice({
	name: "filters",
	initialState,
	reducers: {
		filtersFetching: (state) => {
			state.filtersLoadingStatus = "loading";
		},
		filtersFetched: (state, action) => {
			state.filtersLoadingStatus = "idle";
			state.heroes = action.payload;
		},
		filtersFetchingError: (state) => {
			state.filtersLoadingStatus = "error";
		},
		filterChanged: (state, action) => {
			state.activeFilter = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFilters.pending, (state) => {
				state.filtersLoadingStatus = "loading";
			})
			.addCase(fetchFilters.fulfilled, (state, action) => {
				state.filtersLoadingStatus = "idle";
				filtersAdapter.setAll(state, action.payload);
			})
			.addCase(fetchFilters.rejected, (state) => {
				state.filtersLoadingStatus = "error";
			});
	},
});

export const { selectAll } = filtersAdapter.getSelectors((state) => state.filters);

const { actions, reducer } = filtersSlice;

export default reducer;
export const { filtersFetching, filtersFetched, filtersFetchingError, filterChanged } =
	actions;
