import { GithubLinkCardProps } from "./card.types"
import styles from "./card.module.css"

export function GithubLinkCard(props: GithubLinkCardProps) {
	return (
		<a href={props.link} className={styles.container} target="_blank">
			<img
				className={styles.img}
				src="/assets/technologies/Github.png"
				alt=""
			/>
			<p className={styles.link}>{props.title}</p>
		</a>
	)
}
