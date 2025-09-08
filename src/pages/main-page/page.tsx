import { ContactMePart } from "../../modules/contact-me-part"
import { CoursesPart } from "../../modules/courses-part"
import { HeaderPart } from "../../modules/header-part"
import { MyProjectsPart } from "../../modules/my-projects-part"
import { TechnologiesPart } from "../../modules/technologies-part"

export function MainPage() {
	return (
		<div
			style={{
				width: "100vw",
				minHeight: "100vh",
				// backgroundColor: "red",
				backgroundImage: "url('/assets/images/noise.jpg')",
				backgroundRepeat: "repeat",
				backgroundPosition: "top left",
				backgroundSize: "auto",
			}}
		>
			<HeaderPart />
			<div
				style={{
					display: "flex",
					flexDirection:  "column",
					width: "100%",
					paddingLeft: "10%",
					paddingRight: "10%",
					gap: "50px",
					paddingBottom: "30px",
				}}
			>
				<MyProjectsPart />
				<TechnologiesPart />
				<CoursesPart />
				<ContactMePart />
			</div>
		</div>
	)
}
