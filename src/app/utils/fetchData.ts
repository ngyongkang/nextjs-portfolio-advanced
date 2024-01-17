"use server"

import { Experience, PageInfo, Project, Skill, Social } from "../../../typings";

async function fetchSkills(url: any) {
    const res = await fetch(`${url}/api/skill`).then((res) => {return res.json()});
    const skills: Skill[] = res;
    return skills;
}

async function fetchSocial(url: any) {
    const res = await fetch("http://localhost:3000/api/social").then((res) => {return res.json()});
    const socials: Social[] = res;
    return socials;
}

async function fetchExperience(url: any) {
    const res = await fetch("http://localhost:3000/api/experience").then((res) => {return res.json()});
    const skills: Experience[] = res;
    return skills;
}

async function fetchProject(url: any) {
    const res = await fetch("http://localhost:3000/api/project").then((res) => {return res.json()});
    const skills: Project[] = res;
    return skills;
}

async function fetchPageInfo(url: any) {
    const res = await fetch(`${url}/api/pageinfo`).then((res) => {return res.json()});
    const pageInfo: PageInfo = res;
    return pageInfo;
}

export {
    fetchExperience,
    fetchPageInfo,
    fetchProject,
    fetchSkills,
    fetchSocial
}