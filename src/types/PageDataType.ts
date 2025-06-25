import type { AboutDatasType, ExperiencesCinemaDatasType, ExperiencesDatasType, AboutBioType } from "./AboutTypes";
import type { HeaderDataType } from "./HeaderDataType";
import type { HomeDataType } from "./HomeDataType";
import type { ContactDatasType } from "./ContactType";
import type { FilmCardDataType } from "./Film";
import type { AbilitiesType } from "./AbilitiesType";

export type PageDataType= {
    home: HomeDataType;
    header: HeaderDataType;
    footer: {

    },
    aboutNav: AboutDatasType;
    aboutBio: AboutBioType;
    aboutExperience: ExperiencesDatasType;
    aboutExperienceCinema: ExperiencesCinemaDatasType;
    aboutFormation: {

    },
    aboutCompetences: AbilitiesType;
    filmCardData: FilmCardDataType;
    contact: ContactDatasType;

}