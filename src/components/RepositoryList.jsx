import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

// https://api.github.com/orgs/rocketseat/repos

export function RepositoryList() {
	const [repositories, setReposiotries] = useState([]);

	useEffect(() => {
		fetch("https://api.github.com/orgs/rocketseat/repos")
			.then((response) => {
				response.json();
			})
			.then((data) => {
				setReposiotries(data);
			});
	}, []);

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				<RepositoryItem
					title="unform"
					content="Forms in React Js"
				></RepositoryItem>
			</ul>
		</section>
	);
}
