import { useForm } from "react-hook-form"
import { API_URL } from "../../../../shared/constants"
import styles from "./part.module.css"
import { ContactMePartForm } from "./part.types"

export function ContactMePart() {
	const { handleSubmit, register } = useForm<ContactMePartForm>()

	async function sendMessage(data: ContactMePartForm) {
		
		console.log(API_URL)
		const response = await fetch(`${API_URL}contact-me`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(
				data,
			),
		})
	}

	return (
		<div className={styles.container} id="contactMe">
			<p className={styles.title}>SAY HELLO</p>
			<form
				className={styles.content}
				onSubmit={handleSubmit(sendMessage)}
			>
				<div className={styles.inputAndLabel}>
					<p className={styles.label}>Name</p>
					<input
						type="text"
						placeholder="Your Name"
						className={styles.input}
						{...register("name", {
							required: {
								value: true,
								message: "Write your name",
							},
						})}
					/>
				</div>
				<div className={styles.inputAndLabel}>
					<p className={styles.label}>Email</p>
					<input
						type="text"
						placeholder="john@doe.com"
						className={styles.input}
						{...register("email", {
							required: {
								value: true,
								message: "Write your email",
							},
						})}
					/>
				</div>
				<div className={styles.inputAndLabel}>
					<p className={styles.label}>Message</p>
					<textarea
						rows={4}
						placeholder="Your Message"
						className={`${styles.input} ${styles.textarea}`}
						{...register("message", {
							required: {
								value: true,
								message: "Write your message",
							},
						})}
					/>
				</div>

				<div className={styles.sendButtonHelper}>
					<button className={styles.sendButton} type="submit">
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
			</form>
		</div>
	)
}
