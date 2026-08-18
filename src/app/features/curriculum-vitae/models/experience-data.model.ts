export interface ExperienceData {
    jobTitle: string
    company: string
    start: string
    end?: string
    location: string
    country: string
    type: 'remote' | 'hibrid' | 'presential'
    bullets: string[]
    recomendationLetter?: boolean
    technologies: string[]
    methodologies: string[]
}