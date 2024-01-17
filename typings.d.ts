interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string;
}

interface Image {
    _type: "image";
    asset: {
        _ref: string;
        _type: "reference";
    }
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    name: string;
    role: string;
    address: string;
    backgroundInformation: string;
    email: string;
    heroImage: Image;
    profilePic: Image;
    phoneNumber: string;
}

export interface Technology extends SanityBody {
    _type: "skill";
    icon: string;
    progress: string;
    title: string;
}

export interface Skill extends SanityBody {
    _type: "skill";
    icon: string;
    progress: string;
    title: string;
}

export interface Experience extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Project extends SanityBody {
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
}


export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
}