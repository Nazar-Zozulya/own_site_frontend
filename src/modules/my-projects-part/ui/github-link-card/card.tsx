import { GithubLinkCardProps } from "./card.types";
import styles from './card.module.css'

export function GithubLinkCard(props: GithubLinkCardProps) {
	return (
		<div className={styles.container}>
			<img className={styles.img} src="/assets/technologies/github.png" alt="" />
            <a className={styles.link} href={props.link}>{props.title}</a>
		</div>
	)
}
