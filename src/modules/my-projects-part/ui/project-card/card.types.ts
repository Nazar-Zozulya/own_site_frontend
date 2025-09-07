import { GithubLinkCardProps } from "../github-link-card"

export interface ProjectCardProps {
    title: string
    description: string
    technologies: { name: string }[]
    links: GithubLinkCardProps[]
    images: string[]
}