import type { AboutDatasType, ExperiencesCinemaDatasType, ExperiencesDatasType, AboutBioType, ExperiencesCodeDatasType } from "./AboutTypes";
import type { HeaderDataType } from "./HeaderDataType";
import type { HomeDataType } from "./HomeDataType";
import type { ContactDatasType } from "./ContactType";
import type { FilmCardDataType } from "./Film";
import type { AbilitiesType, SkillsPresentationDatas} from "./AbilitiesType";

export type PageDataType= {
    home: HomeDataType;
    homeSkills: SkillsPresentationDatas;
    header: HeaderDataType;
    footer: {

    },
    aboutNav: AboutDatasType;
    aboutBio: AboutBioType;
    aboutExperience: ExperiencesDatasType;
    aboutExperienceCinema: ExperiencesCinemaDatasType;
    aboutExperienceCode: ExperiencesCodeDatasType;
    aboutFormation: {

    },
    aboutCompetences: AbilitiesType;
    filmCardData: FilmCardDataType;
    contact: ContactDatasType;

}