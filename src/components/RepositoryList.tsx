import { RepositoryItem } from "./RepositoryItem";
import "../styles/repositories.scss";
import { useEffect, useState } from "react";

// https://api.github.com/orgs/rocketseat/repos

interface Repository {
	name: string;
	description: string;
	html_url: string
}

export function RepositoryList() {
	const [repositories, setReposiotries] = useState<Repository[]>([]);

	useEffect(() => {
		fetch("https://api.github.com/orgs/rocketseat/repos")
			.then((response) => response.json())
			.then((data) => setReposiotries(data));
	}, []);

	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				{
					repositories.map((repository) => {
						return <RepositoryItem key={repository.name} repository={repository}></RepositoryItem>
					})
				}
				                              
			</ul>
		</section>
	);
}
