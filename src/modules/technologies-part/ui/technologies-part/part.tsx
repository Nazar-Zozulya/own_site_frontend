import { TechnologyCard } from "../../../../components/technology-card"
import { TechnologyCardProps } from "../../../../components/technology-card/card.types"
import styles from "./part.module.css"

const technologiesIWorkWith: TechnologyCardProps[] = [
	{
		name: "github",
	},
]

const technologiesIFocusOn: TechnologyCardProps[] = [
	{
		name: "github",
	},
]

export function TechnologiesPart() {
	return (
		<div className={styles.container} id="technologies">
			<p className={styles.partTitle}>TECHNOLOGIES</p>

			<div className={styles.technologieslock}>
				<p className={styles.title}>Technologies I work with:</p>
				<p className={styles.description}>
					This list includes the programs, technologies, and services
					I have worked with and continue to use. I have hands-on
					experience with each of them, and related projects are
					available on my GitHub.
				</p>
				<div className={styles.technologiesList}>
					{technologiesIWorkWith.map((tech) => {
						return <TechnologyCard name={tech.name} />
					})}
				</div>
			</div>

			<div className={styles.technologieslock}>
				<p className={styles.title}>Technologies I focus on:</p>
				<p className={styles.description}>
					This list highlights the programs, technologies, and
					services I am currently focusing on to further develop my
					expertise.
				</p>
				<div className={styles.technologiesList}>
					{technologiesIFocusOn.map((tech) => {
						return <TechnologyCard name={tech.name} />
					})}
				</div>
			</div>
		</div>
	)
}
