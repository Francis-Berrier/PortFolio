export type NavButton= {
    id: number;
    name: string;
    page: string;
};
export type AboutDatasType= {
    title: string;
    buttons: NavButton[]
};
export type ExperiencesCinemaDatasType= {
    buttonName: string;
    link: string;
    title: string;
    introText: string;
    textFilmo: string;
    urlFilmo: string;
};
export type ExpEachDatasType={
    title: string;
    text: string;
    link: string;
    buttonName: string;

};

export type ExperiencesDatasType= { 
    cinema: ExpEachDatasType;
    code: ExpEachDatasType;
};
