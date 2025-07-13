export enum Sections {
    INTRODUCTION = "introduction",
    SKILLS = "skills",
    WORKS = "works",
    HOBBIES = "hobbies",
    CONTACT = "contact"
}

export type ProjectProps = {
  title: string,
  description: string,
  img: string,
  code: string,
  hover_color: string
  live?: string,
}