import { useState } from "react"
import { TechnologyCard } from "../../../../components/technology-card"
import { GithubLinkCard } from "../github-link-card"
import styles from "./card.module.css"
import { ProjectCardProps } from "./card.types"

export function ProjectCard(props: ProjectCardProps) {
	const [ imageIndex, setImageIndex ] = useState<number>(0)

	return (
		<div className={styles.container}>
			<div className={styles.titleAndLinks}>
				<p className={styles.title}>{props.title}</p>
				<div className={styles.linksList}>
					{props.links.map((link) => {
						return (
							<GithubLinkCard
								link={link.link}
								title={link.title}
							/>
						)
					})}
				</div>
			</div>
			<p className={styles.description}>{props.description}</p>
			<div className={styles.technologiesList}>
				{props.technologies.map((technology) => {
					return <TechnologyCard name={technology.name} />
				})}
			</div>
			<div className={styles.imageSlider}>
				<img
					className={styles.selectedImage}
					src={props.images[imageIndex]}
					alt=""
				/>
				<div className={styles.imageSliderList}>
					{props.images.map((image, index) => {
						return (
							<button
								style={{
									border: "none",
									background: "none",
									cursor: "pointer",
								}}
								onClick={() => {
									console.log("asd")
									console.log(index)
									console.log(imageIndex)
									
									setImageIndex(index)
								}}
							>
								<img
									className={`${styles.imageInSlider} ${
										index == imageIndex
											? styles.activeImageInSlider
											: ""
									}`}
									src={image}
									alt=""
								/>
							</button>
						)
					})}
				</div>
			</div>
		</div>
	)
}
