import type { AboutDatasType, ExperiencesCinemaDatasType, ExperiencesDatasType } from "./AboutTypes";
import type { HeaderDataType } from "./HeaderDataType";
import type { HomeDataType } from "./HomeDataType";
import type { ContactDatasType } from "./ContactType";
import type { FilmCardDataType } from "./Film";

export type PageDataType= {
    home: HomeDataType;
    header: HeaderDataType;
    footer: {

    },
    aboutNav: AboutDatasType;
    aboutBio: {

    },
    aboutExperience: ExperiencesDatasType;
    aboutExperienceCinema: ExperiencesCinemaDatasType;
    aboutFormation: {

    },
    aboutCompetences: {

    },
    filmCardData: FilmCardDataType;
    contact: ContactDatasType;

}