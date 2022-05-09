import { useHttp } from "../../hooks/http.hook";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilters } from "../../actions";
import { filterChanged } from "./filtersSlice";

import Spinner from "../spinner/Spinner";
import classNames from "classnames";

// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

const HeroesFilters = () => {
	const { request } = useHttp();
	const { filters, filtersLoadingStatus, activeFilter } = useSelector(
		(state) => state.filters
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchFilters(request));
	}, []);

	if (filtersLoadingStatus === "loading") {
		return <Spinner />;
	} else if (filtersLoadingStatus === "error") {
		return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
	}

	const renderFilters = (arr) => {
		if (arr.length === 0) {
			return <h5 className="text-center mt-5">Фильтры не найдены</h5>;
		}

		return arr.map(({ name, className, label }) => {
			const btnClass = classNames("btn", className, {
				active: name === activeFilter,
			});

			return (
				<button
					key={name}
					id={name}
					className={btnClass}
					onClick={() => {
						dispatch(filterChanged(name));
					}}
				>
					{label}
				</button>
			);
		});
	};

	const buttons = renderFilters(filters);

	return (
		<div className="card shadow-lg mt-4">
			<div className="card-body">
				<p className="card-text">Отфильтруйте героев по элементам</p>
				<div className="btn-group">{buttons}</div>
			</div>
		</div>
	);
};

export default HeroesFilters;