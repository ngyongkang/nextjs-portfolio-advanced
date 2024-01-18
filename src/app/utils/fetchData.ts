"use server"

import { Experience, PageInfo, Project, Skill, Social } from "../../../typings";


async function fetchSkills(url: any) {
    const res = await fetch(`${url}/api/skill`);
    const data = await res.json();
    const skills: Skill[] = data;
    return skills;
}

async function fetchSocial(url: any) {
    const res = await fetch(`${url}/api/social`);
    const data = await res.json();
    const socials: Social[] = data;
    return socials;
}

async function fetchExperience(url: any) {
    const res = await fetch(`${url}/api/experience`)
    const data = await res.json();
    const skills: Experience[] = data;
    return skills;
}

async function fetchProject(url: any) {
    const res = await fetch(`${url}/api/project`)
    const data = await res.json();
    const skills: Project[] = data;
    return skills;
}

async function fetchPageInfo(url: any) {
    const res = await fetch(`${url}/api/pageinfo`);
    console.log(res);
    const data = await res.json();

    const pageInfo: PageInfo = data;
    return pageInfo;
}

export {
    fetchExperience,
    fetchPageInfo,
    fetchProject,
    fetchSkills,
    fetchSocial
};
