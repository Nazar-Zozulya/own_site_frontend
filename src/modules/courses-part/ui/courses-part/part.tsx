import styles from "./part.module.css"

export function CoursesPart() {
	return (
		<div className={styles.container} id="courses">
			<p className={styles.title}>COURSES</p>
			<div className={styles.content}>
				<p className={styles.schoolTitle}>World IT:</p>
				<div className={styles.coursesList}>
					<div className={styles.courseCard}>
						<p className={styles.name}>JavaScript Developer</p>
						<div className={styles.helpDescriptionTabulation}>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet consectetur. Nibh
								habitasse curabitur sapien egestas facilisis
								vulputate quam. Fermentum pulvinar quis lectus
								aenean.
							</p>
						</div>
					</div>
                    <div className={styles.courseCard}>
						<p className={styles.name}>Python Developer</p>
						<div className={styles.helpDescriptionTabulation}>
							<p className={styles.description}>
								Lorem ipsum dolor sit amet consectetur. Nibh
								habitasse curabitur sapien egestas facilisis
								vulputate quam. Fermentum pulvinar quis lectus
								aenean.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
