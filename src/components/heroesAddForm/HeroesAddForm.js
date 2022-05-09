
import { useHttp } from "../../hooks/http.hook";
import { heroCreated } from "../heroesList/heroesSlice";
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
	

	const { filters, filtersLoadingStatus } = useSelector((state) => state.filters);
	const dispatch = useDispatch();
	const { request } = useHttp();

	const onAdd = (hero) => {
		hero = { ...hero, id: uuidv4() };

		request("http://localhost:3001/heroes", "POST", JSON.stringify(hero))
			.then((res) => console.log(res, "Отправка успешна"))
			.then(dispatch(heroCreated(hero)))
			.catch((err) => console.log(err));
	};

	const renderFilters = (filters, status) => {
		if (status === "loading") {
			return <option>Загрузка элементов</option>;
		} else if (status === "error") {
			return <option>Ошибка загрузки</option>;
		}

		// Если фильтры есть, то рендерим их
		if (filters && filters.length > 0) {
			return filters.map(({ name, label }) => {
				// Один из фильтров нам тут не нужен
				// eslint-disable-next-line
				if (name === "all") return;

				return (
					<option key={name} value={name}>
						{label}
					</option>
				);
			});
		}
	};

	return (
		<Formik
			initialValues={{ name: "", description: "", element: "" }}
			validationSchema={Yup.object({
				name: Yup.string().min(2, "At least 2 letters").required("Must Have!!!"),
				description: Yup.string().min(10, "At least 10 letters").required("Must Have"),
				element: Yup.string(),
			})}
			onSubmit={(hero, {resetForm}) => {
				onAdd(hero);
				resetForm({hero:''});
			}}
		>
			<Form className="border p-4 shadow-lg rounded">
				<div className="mb-3">
					<label htmlFor="name" className="form-label fs-4">
						Имя нового героя
					</label>
					<Field
						required
						type="text"
						name="name"
						className="form-control"
						id="name"
						placeholder="Как меня зовут?"
						
					/>
					<FormikErrorMessage className="error" name="name" component="div" />
				</div>

				<div className="mb-3">
					<label htmlFor="text" className="form-label fs-4">
						Описание
					</label>
					<Field
						as="textarea"
						required
						name="description"
						className="form-control"
						id="text"
						placeholder="Что я умею?"
						style={{ height: "130px" }}
						
					/>
					<FormikErrorMessage className="error" name="description" component="div" />
				</div>

				<div className="mb-3">
					<label htmlFor="element" className="form-label">
						Выбрать элемент героя
					</label>
					<Field
						as="select"
						required
						className="form-select"
						id="element"
						name="element"
						
					>
						<option value="">Я владею элементом...</option>
						{renderFilters(filters, filtersLoadingStatus)}
					</Field>
					<FormikErrorMessage className="error" name="element" component="div" />
				</div>

				<button type="submit" className="btn btn-primary">
					Создать
				</button>
			</Form>
		</Formik>
	);
};

export default HeroesAddForm;
