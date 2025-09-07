import { HeaderPart } from "../../modules/header-part"
import { MyProjectsPart } from "../../modules/my-projects-part"

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
					width: "100%",
					paddingLeft: "10%",
					paddingRight: "10%"
				}}
			>
				<MyProjectsPart />
			</div>
		</div>
	)
}
