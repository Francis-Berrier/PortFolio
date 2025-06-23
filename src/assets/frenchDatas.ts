
import type { AboutDatasType } from "../types/AboutDatasType"
import type { ContactDatasType } from "../types/ContactType"
import type { ExperiencesDatas } from "../types/ExperiencesCinemaDatasType"
import type { HomeDataType } from "../types/HomeDataType"


/*Home*/
export const homeDatas: HomeDataType= {
    title: "Francis Berrier",
    subtitle: "Développeur Web",
    introText: "Après une première carrière dans le cinéma, je suis un jeune développeur web, avide de découvrir de nouveaux projets et défis avec vous. Faisons connaissance!",
    buttonContact: "Contact",
    buttonGit: "Mon Github",
}   

/*A Propos*/
export const aboutDatas: AboutDatasType= {
    title: "A Propos",
    nameButtonOne: "Biographie",
    nameButtonTwo: "Expériences",
    nameButtonThree: "Formation",
    nameButtonFour: "Compétences"
}

/*Experiences*/
export const experiencesDatas: ExperiencesDatas= {
    title: "Expériences Professionnelles",
    introText: "Au cours de ma première carrière, j'ai eu la chance de travailler sur de nombreux films aux différents postes de la fabrication du son pour le Cinéma. Voici une sélection des films auxquels j'ai eu la chance de participer:",
    textFilmo: "Consultez ma filmographie complète",
    urlFilmo: "https://www.imdb.com/fr/name/nm2588640/?ref_=ttfc_fcr_cr"
}

/*Contact*/
export const contactDatas: ContactDatasType= {
    title: "Entrons en Contact",
    introText: "Si vous avez des questions, un emploi ou un projet à me proposer, n'hésitez pas à me contacter. J'ai hâte de découvrir de nouveaux horizons avec vous.",
    labelName: "Nom",
    labelSurname: "Prénom",
    labelSociety: "Société",
    labelEmail: "Email",
    labelMessage: "Message",
    placeHolder: "Ecrivez votre Message",
    labelSubmit: "Envoyer",
    formMissedField: "Veuillez renseigner les champs requis (marqué de *) avant d'envoyer votre message",
    formWrongEmail: "Email incorrect",
    formSendEmail: "Email envoyé",
    formErrorEmail: "L'email n'a pas pu être envoyé"
}