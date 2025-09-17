import { TechnologyCard } from "../../../../components/technology-card"
import styles from "./part.module.css"

export function CoursesPart() {
	return (
		<div className={styles.container} id="courses">
			<p className={styles.title}>COURSES</p>
			<div className={styles.content}>
				<p className={styles.schoolTitle}>World IT:</p>
				<div className={styles.coursesList}>
					<div className={styles.courseCard}>
						<div className={styles.nameAndDates}>
							<p className={styles.name}>JavaScript Developer</p>
							<p className={styles.dates}>2024-2025</p>
						</div>
						<div className={styles.helpDescriptionTabulation}>
							<p className={styles.description}>
								The JavaScript Developer course introduces
								students to modern web and mobile development.
								It covers key technologies such as React, React
								Native, TypeScript, and Express, providing a
								solid foundation for building interactive
								applications.
							</p>

							<div className={styles.whatWeLearnBlock}>
								<p className={styles.whatWeLearnTitle}>What we learn:</p>

								<div className={styles.whatWeLearnList}>
									<TechnologyCard name="JavaScript" />
									<TechnologyCard name="TypeScript" />
									<TechnologyCard name="Node.js" />
									<TechnologyCard name="NPM" />
									<TechnologyCard name="React" />
									<TechnologyCard name="React Native" />
									<TechnologyCard name="Express" />
									<TechnologyCard name="Git" />
									<TechnologyCard name="Github" />
									<TechnologyCard name="Prisma" />
									<TechnologyCard name="MySQL" />
								</div>
							</div>
						</div>
					</div>
					<div className={styles.courseCard}>
						<div className={styles.nameAndDates}>
							<p className={styles.name}>Web Developer In Python</p>
							<p className={styles.dates}>2023-2024</p>
						</div>
						<div className={styles.helpDescriptionTabulation}>
							<p className={styles.description}>
								The Web Developer in Python course provides an
								introduction to the basics of web development.
								Students learn the core principles of building
								structured and dynamic websites step by step.
							</p>

							<div className={styles.whatWeLearnBlock}>
								<p className={styles.whatWeLearnTitle}>What we learn:</p>

								<div className={styles.whatWeLearnList}>
									<TechnologyCard name="Python" />
									<TechnologyCard name="Django" />
									<TechnologyCard name="HTML" />
									<TechnologyCard name="CSS" />
									<TechnologyCard name="JavaScript" />
									<TechnologyCard name="BootStrap" />
									<TechnologyCard name="Jinja" />
									<TechnologyCard name="Figma" />
									<TechnologyCard name="MySQL" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
