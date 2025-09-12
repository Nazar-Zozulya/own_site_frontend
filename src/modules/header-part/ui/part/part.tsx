import styles from "./part.module.css"

export function HeaderPart() {
	return (
		<div className={styles.container}>
			<div className={styles.navigationBlock}>
				<button
					className={styles.navItem}
					onClick={() => {
						document.querySelector("#myProjects")?.scrollIntoView({
							behavior: "smooth",
							block: "center",
						})
					}}
				>
					Projects
				</button>

				<a
					style={{ textDecoration: "none" }}
					className={styles.navItem}
					href="https://www.canva.com/design/DAGt5dT6r5I/mteEd8w-o1tOakCJ8sFnVA/edit?utm_content=DAGt5dT6r5I&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
				>
					Resume
				</a>

				<img className={styles.navImage} src="" alt="" />

				<button
					className={styles.navItem}
					onClick={() => {
						document
							.querySelector("#technologies")
							?.scrollIntoView({
								behavior: "smooth",
								block: "center",
							})
					}}
				>
					Experience
				</button>

				<button
					className={styles.navItem}
					onClick={() => {
						document.querySelector("#myProjects")?.scrollIntoView({
							behavior: "smooth",
							block: "center",
						})
					}}
				>
					Courses
				</button>
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
