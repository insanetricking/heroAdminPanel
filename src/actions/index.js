
// import {
// 	filtersFetching,
// 	filtersFetched,
// 	filtersFetchingError,
// } from "../components/heroesFilters/filtersSlice";



// export const fetchFilters = (request) => (dispatch) => {
// 	dispatch(filtersFetching());
// 	request("http://localhost:3001/filters")
// 		.then((data) => dispatch(filtersFetched(data)))
// 		.catch((err) => dispatch(filtersFetchingError(err)));
// };



// // export const heroesFetching = () => {
// //     return {
// //         type: 'HEROES_FETCHING'
// //     }
// // }

// export const heroesFetching = createAction('HEROES_FETCHING');

// // export const heroesFetched = (heroes) => {
// //     return {
// //         type: 'HEROES_FETCHED',
// //         payload: heroes
// //     }
// // }

// export const heroesFetched = createAction('HEROES_FETCHED'); //payload загружается автоматом

// // export const heroesFetchingError = () => {
// //     return {
// //         type: 'HEROES_FETCHING_ERROR'
// //     }
// // }

// export const heroesFetchingError = createAction('HEROES_FETCHING_ERROR');

// // export const heroDeleted = (id) => {
// //     return {
// //         type: 'HERO_DELETED',
// //         payload: id
// //     }
// // }

// export const heroDeleted = createAction('HERO_DELETED');

// // export const heroCreated = (hero) => {
// //     return {
// //         type: 'HERO_CREATED',
// //         payload: hero
// //     }
// // }

// export const heroCreated = createAction('HERO_CREATED');

// export const filtersFetching = () => {
//     return {
//         type: 'FILTERS_FETCHING',

//     }
// }
// export const filtersFetched = (filters) => {
//     return {
//         type: 'FILTERS_FETCHED',
//         payload: filters
//     }
// }
// export const filtersFetchingError = () => {
//     return {
//         type: 'FILTERS_FETCHING_ERROR',
//     }
// }

// export const filterChanged = (name) => {
//     return {
//         type: 'FILTER_CHANGED',
//         payload: name
//     }
// }

// export const filterChanged = (name) => (dispatch) => {
// 	setTimeout(() => {
// 		dispatch({
// 			type: "FILTER_CHANGED",
// 			payload: name,
// 		});
// 	}, 1000);
// };
