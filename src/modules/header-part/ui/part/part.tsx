import styles from "./part.module.css"

export function HeaderPart() {
	return (
		<div className={styles.container}>
			<div className={styles.navigationBlock}>
				<button className={styles.navItem}>Experience</button>
				<button className={styles.navItem}>Resume</button>
				<img className={styles.navImage} src="" alt="" />
				<button className={styles.navItem}>Projects</button>
				<button className={styles.navItem}>Courses</button>
			</div>

			<img className={styles.logoImg} src="" alt="" />


			<div className={styles.descriptionDiv}>
				<p className={styles.descriptionText}>
					Entry-level JavaScript Developer focused on building web
					applications using modern JavaScript technologies.
					Experienced in developing both backend and frontend
					solutions with React, Express, Node.js, and TypeScript. Also
					familiar with the Django web framework.
				</p>
			</div>
		</div>
	)
}
