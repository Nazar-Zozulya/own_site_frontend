import { TechnologyCard } from "../../../../components/technology-card"
import { TechnologyCardProps } from "../../../../components/technology-card/card.types"
import styles from "./part.module.css"

const technologiesIWorkWith: TechnologyCardProps[] = [
	{ name: "HTML" },
	{ name: "CSS" },
	{ name: "JavaScript" },
	{ name: "TypeScript" },
	{ name: "Python" },
	{ name: "Node.js" },
	{ name: "NPM" },
	{ name: "React" },
	{ name: "React Native" },
	{ name: "Express.js" },
	{ name: "Django" },
	{ name: "Docker" },
	{ name: "Git" },
	{ name: "Github" },
	{ name: "MySQL" },
	{ name: "PostgreSQL" },
	{ name: "Prisma" },
	{ name: "Figma" },
	{ name: "Jinja" },
	{ name: "BootStrap" },
]

// JavaScript TypeScript React Express.js Docker

const technologiesIFocusOn: TechnologyCardProps[] = [
	{ name: "JavaScript" },
	{ name: "TypeScript" },
	{ name: "React" },
	{ name: "Express.js" },
	{ name: "Docker" },
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
