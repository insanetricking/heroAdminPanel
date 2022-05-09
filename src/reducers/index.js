// const initialState = {
// 	heroes: [],
// 	heroesLoadingStatus: "idle",
// 	filters: [],
// 	activeFilter: "all",
// 	filtersLoadingStatus: "idle",
// };

// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case "HEROES_FETCHING":
// 			return {
// 				...state,
// 				heroesLoadingStatus: "loading",
// 			};

// 		case "HEROES_FETCHED":
// 			return {
// 				...state,
// 				heroes: action.payload,
// 				heroesLoadingStatus: "idle",
// 			};

// 		case "HEROES_FETCHING_ERROR":
// 			return {
// 				...state,
// 				heroesLoadingStatus: "error",
// 			};

// 		case "FILTERS_FETCHING":
// 			return {
// 				...state,
// 				filtersLoadingStatus: "loading",
// 			};

// 		case "FILTERS_FETCHED":
// 			return {
// 				...state,
// 				filters: action.payload,
// 				filtersLoadingStatus: "idle",
// 			};

// 		case "FILTERS_FETCHING_ERROR":
// 			return {
// 				...state,
// 				filtersLoadingStatus: "error",
// 			};

// 		case "FILTER_CHANGED":
// 			return {
// 				...state,
// 				activeFilter: action.payload,
// 			};

// 		case "HERO_DELETED":
// 			return {
// 				...state,
// 				heroes: state.heroes.filter((item) => item.id !== action.payload),
// 			};

// 		case "HERO_CREATED":
// 			return {
// 				...state,
// 				heroes: [...state.heroes, action.payload],
// 			};

// 		default:
// 			return state;
// 	}
// };

// export default reducer;
