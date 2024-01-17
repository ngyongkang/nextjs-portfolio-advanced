"use server";
import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import {
  fetchExperience,
  fetchPageInfo,
  fetchProject,
  fetchSkills,
  fetchSocial,
} from "./utils/fetchData";
import { headers } from "next/headers";
import Homepage from "./Homepage";

export default async function Page() {
  const headersList = headers();
  const fullUrl = headersList.get("referer");

  const pageInfo: PageInfo = await fetchPageInfo(fullUrl);
  const experiences: Experience[] = await fetchExperience(fullUrl);
  const skills: Skill[] = await fetchSkills(fullUrl);
  const projects: Project[] = await fetchProject(fullUrl);
  const socials: Social[] = await fetchSocial(fullUrl);

  // const data = await getData();
  return (
    <Homepage
      pageInfo={pageInfo}
      experiences={experiences}
      skills={skills}
      projects={projects}
      socials={socials}
    />
  );
}
