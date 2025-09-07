import { TechnologyCardProps } from "./card.types"
import styles from './card.module.css'

export function TechnologyCard(props: TechnologyCardProps) {
	return (
		<div className={styles.container}>
			<img className={styles.image} src={`/assets/technologies/${props.name}.png`} alt="" />
			<p className={styles.name}>{props.name}</p>
		</div>
	)
}
