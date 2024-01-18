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
  // const fullUrl = headersList.get("referer");
  const fullUrl = process.env.SANITY_STUDIO_BASE_URL
    ? process.env.SANITY_STUDIO_BASE_URL
    : `https://${process.env.VERCEL_URL}`;

  const pageInfo: PageInfo = await fetchPageInfo(fullUrl);
  const experiences: Experience[] = await fetchExperience(fullUrl);
  const skills: Skill[] = await fetchSkills(fullUrl);
  const projects: Project[] = await fetchProject(fullUrl);
  const socials: Social[] = await fetchSocial(fullUrl);

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
