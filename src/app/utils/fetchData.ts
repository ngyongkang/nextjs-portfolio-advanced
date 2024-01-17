"use server"

import { Experience, PageInfo, Project, Skill, Social } from "../../../typings";

async function fetchSkills() {
    const res = await fetch("/api/skill").then((res) => {return res.json()});
    const skills: Skill[] = res;
    return skills;
}

async function fetchSocial() {
    const res = await fetch("/api/social").then((res) => {return res.json()});
    const skills: Social[] = res;
    return skills;
}

async function fetchExperience() {
    const res = await fetch("/api/experience").then((res) => {return res.json()});
    const skills: Experience[] = res;
    return skills;
}

async function fetchProject() {
    const res = await fetch("/api/project").then((res) => {return res.json()});
    const skills: Project[] = res;
    return skills;
}

async function fetchPageInfo() {
    const res = await fetch("/api/pageinfo").then((res) => {return res.json()});
    const skills: PageInfo[] = res;
    return skills;
}

export {
    fetchExperience,
    fetchPageInfo,
    fetchProject,
    fetchSkills,
    fetchSocial
}