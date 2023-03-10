
export function RepositoryItem(props) {
    return (
		<li>
			<strong>{props.title}</strong>
			<p>{props.content}</p>
			<a href="">Acessar Repositório</a>
		</li>
	);
}