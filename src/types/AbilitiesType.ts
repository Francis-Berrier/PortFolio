export type AbilityType= {
    id: number;
    imgUrl: string;
    name: string;
    description: string;
    precentProgress: number;
}
export type AbilitiesType= {
    title: string;
    introText: string;
}
export type SkillsPresentationCardType= {
    title: string;
    logoUrl: string;
    text: string;
}

export type SkillsPresentationDatas= {
    entete: string;
    title: string;
    cards : SkillsPresentationCardType[];
    linkButton: string;
}