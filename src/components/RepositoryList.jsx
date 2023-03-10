import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList() {
	return (
		<section className="repository-list">
			<h1>Lista de repositórios</h1>

			<ul>
				<RepositoryItem title="unform" content="Forms in React Js"></RepositoryItem>
				
			</ul>
		</section>
	);
}
