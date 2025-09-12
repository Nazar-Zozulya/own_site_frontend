import styles from "./part.module.css"

export function ContactMePart() {
	return (
		<div className={styles.container} id="contactMe">
			<p className={styles.title}>SAY HELLO</p>
			<p className={styles.content}>
				<div className={styles.inputAndLabel}>
					<p className={styles.label}>Name</p>
					<input
						type="text"
						placeholder="Your Name"
						className={styles.input}
					/>
				</div>
				<div className={styles.inputAndLabel}>
					<p className={styles.label}>Email</p>
					<input
						type="text"
						placeholder="john@doe.com"
						className={styles.input}
					/>
				</div>
				<div className={styles.inputAndLabel}>
					<p className={styles.label}>Message</p>
					<textarea
                        rows={4}
						placeholder="Your Message"
						className={`${styles.input} ${styles.textarea}`}
					/>
				</div>

				<div className={styles.sendButtonHelper}>
					<button className={styles.sendButton}>
						<svg
							width="22"
							height="22"
							viewBox="0 0 22 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21 1L14 21L10 12L1 8L21 1Z"
								stroke="#9E9EAA"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
                        <p>Send</p>
					</button>
				</div>
			</p>
		</div>
	)
}
