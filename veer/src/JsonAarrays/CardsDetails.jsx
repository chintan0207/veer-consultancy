// import { FaArrowRightLong } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";
import { FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaEarthAmericas } from "react-icons/fa6";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { ImAirplane } from "react-icons/im";
import { FaPassport } from "react-icons/fa";
import studentVisaImg from '../Assets/flaticons/s5.png'
import visitorVisaImg from '../Assets/flaticons/s3.png'
import workVisaImg from '../Assets/flaticons/s1.png'
import passportImg from '../Assets/flaticons/s4.png'
import aadharImg from '../Assets/flaticons/s7.png'
import pancardImg from '../Assets/flaticons/s8.png'
import electionImg from '../Assets/flaticons/s6.png'
import pccImg from '../Assets/flaticons/s2.png'
import usaFlag from '../Assets/flags/usa.png'
import canadaFlag from '../Assets/flags/canada.png'
import ukFlag from '../Assets/flags/united-kingdom.png'
import franceFlag from '../Assets/flags/france.png'
import newzealandFlag from '../Assets/flags/new-zealand.png'
import germanyFlag from '../Assets/flags/germany.png'
import ausFlag from '../Assets/flags/australia.png'
import passport from "../Assets/images/passportImg.jpg"
import visa from "../Assets/images/visaImg.jpg"
import docoment from "../Assets/images/docoment.jpg"
import certificates from "../Assets/images/certificates.jpg"
import registration from "../Assets/images/registration.jpg"
import travel from "../Assets/images/travel.jpg"
import auscity from "../Assets/city/auscity.jpg"
import ukcity from "../Assets/city/englandcity.jpg"
import canadacity from "../Assets/city/canadacity.jpg"
import usacity from "../Assets/city/usa.webp"
import workpermit from "../Assets/images/workpermit.jpg"
import airticket from "../Assets/images/air-ticket.jpg"
import immigration from "../Assets/images/immigration.jpg"


export const ServiceCardDetails = [
    {
        id: 1,
        name: 'student-visa',
        title: "Student Visa",
        desc: " Expert guidance for a smooth student visa application. We help you navigate every step.",
        icon: studentVisaImg,
        country: [
            {
                id: 1,
                name: 'USA',
                title: "usa",
                img: usaFlag


            },
            {
                id: 2,
                name: 'Canada',
                title: "canada",
                img: canadaFlag
            },




        ]

    },
    {
        id: 2,
        name: 'visitor-visa',
        title: "Visitor Visa",
        desc: "Explore new destinations with ease. Our visitor visa services provide personalized support",
        icon: visitorVisaImg,
        country: [
            {
                id: 1,
                name: 'Canada',
                title: "canada",
                img: canadaFlag
            },
            {
                id: 2,
                name: 'USA',
                title: "usa",
                img: usaFlag
            },
            {
                id: 3,
                name: 'United Kingdom',
                title: "united-kingdom",
                img: ukFlag
            },
            {
                id: 4,
                name: 'Australia',
                title: 'australia',
                img: ausFlag
            },
            {
                id: 5,
                name: 'Germany',
                title: "germany",
                img: germanyFlag
            },
            {
                id: 6,
                name: 'France',
                title: 'france',
                img: franceFlag

            },
        ]
    },
    {
        id: 3,
        name: 'work-visa',
        title: "Work Visa",
        desc: "Achieve professional success abroad with our personalized work visa services.",
        icon: workVisaImg,
        country: [
            {
                id: 1,
                name: 'United Kingdom',
                title: 'united-kingdom',
                img: ukFlag
            },
            {
                id: 2,
                name: 'Germany',
                title: "germany",
                img: germanyFlag

            },
            {
                id: 3,
                name: 'Canada',
                title: "canada",
                img: canadaFlag
            },
            {
                id: 4,
                name: 'Australia',
                title: "australia",
                img: ausFlag
            },
            {
                id: 5,
                name: 'USA',
                title: "usa",
                img: usaFlag
            },
            {
                id: 6,
                name: 'France',
                title: 'france',
                img: franceFlag

            },
        ]
    },
    {
        id: 4,
        name: 'passport',
        title: "Passport",
        desc: " Get your passport quickly and easily. Our expert team guides you through the application process.",
        icon: passportImg,
        country: [
            {
                id: 1,
                name: 'Australia',
                title: 'australia',
                img: ausFlag
            },
            {
                id: 2,
                name: 'Canada',
                title: "canada",
                img: canadaFlag
            },
            {
                id: 3,
                name: 'United Kingdom',
                title: "united-kingdom",
                img: ukFlag
            },
            {
                id: 4,
                name: 'New-Zealand',
                title: "new-zealand",
                img: newzealandFlag

            },
            {
                id: 5,
                name: 'USA',
                title: "usa",
                img: usaFlag
            },
            {
                id: 6,
                name: 'France',
                title: 'france',
                img: franceFlag

            },
        ]
    },
    {
        id: 5,
        name: 'pcc',
        title: "Pcc",
        desc: "Which is require document for abroad",
        icon: pccImg,
        country: [
            {
                id: 1,
                name: 'New-Zealand',
                title: "new-zealand",
                img: newzealandFlag


            },
            {
                id: 2,
                name: 'Canada',
                title: "canada",
                img: canadaFlag
            },
            {
                id: 3,
                name: 'United Kingdom',
                title: "united-kingdom",
                img: ukFlag
            },
            {
                id: 4,
                name: 'Australia',
                title: 'australia',
                img: ausFlag
            },
            {
                id: 5,
                name: 'USA',
                title: "usa",
                img: usaFlag
            },
            {
                id: 6,
                name: 'France',
                title: 'france',
                img: franceFlag

            },
        ]

    },
    {
        id: 6,
        name: 'aadhar-card',
        title: "Aadhar Card",
        desc: " Our services offer comprehensive assistance for resolving Aadhaar card issues.",
        icon: aadharImg,
        country: [
            {
                id: 1,
                name: 'Germany',
                title: "Germany",
                img: germanyFlag
            },
            {
                id: 2,
                name: 'Canada',
                title: "canada",
                img: canadaFlag
            },
            {
                id: 3,
                name: 'United Kingdom',
                title: 'united-kingdom',
                img: ukFlag
            },
            {
                id: 4,
                name: 'New-Zealand',
                title: "new-zealand",
                img: newzealandFlag

            },
            {
                id: 5,
                name: 'USA',
                title: "usa",
                img: usaFlag
            },
            {
                id: 6,
                name: 'France',
                title: 'france',
                img: franceFlag


            },
        ]
    },
    {
        id: 7,
        name: 'pancard',
        title: "Pan Card",
        desc: " Our expert team helps you navigate the PAN card application process quickly and easily.",
        icon: pancardImg,
        country: [
            {
                id: 1,
                name: 'United Kingdom',
                title: 'united-kingdom',
                img: ukFlag
            },
            {
                id: 2,
                name: 'Canada',
                title: "canada",
                img: canadaFlag
            },
            {
                id: 3,
                name: 'Australia',
                title: 'australia',
                img: ausFlag
            },
            {
                id: 4,
                name: 'New-Zealand',
                title: "new-zealand",
                img: newzealandFlag

            },
            {
                id: 5,
                name: 'USA',
                title: "usa",
                img: usaFlag
            },
            {
                id: 6,
                name: 'France',
                title: 'france',
                img: franceFlag


            },
        ]
    },
    {
        id: 8,
        name: 'election-card',
        title: "Election Card",
        desc: " We provide personalized support for updating your election card details.",
        icon: electionImg,
        country: [
            {
                id: 1,
                name: 'France',
                title: 'france',
                img: franceFlag

            },
            {
                id: 2,
                name: 'Canada',
                title: 'canada',
                img: canadaFlag
            },
            {
                id: 3,
                name: 'United Kingdom',
                title: "united-kingdom",
                img: ukFlag
            },
            {
                id: 4,
                name: 'New-Zealand',
                title: "new-zealand",
                img: newzealandFlag
            },
            {
                id: 5,
                name: 'USA',
                title: "usa",
                img: usaFlag
            },
            {
                id: 6,
                name: 'Australia',
                title: 'australia',
                img: ausFlag
            },
        ]
    },
];

export const services = [
    {
        id: 1,
        name: "Student Visa",
        icon: <FaGraduationCap />
    },
    {
        id: 2,
        name: "Work Permit",
        icon: <FaPersonWalkingLuggage />
    },
    {
        id: 3,
        name: "Immigration",
        icon: <FaEarthAmericas />
    },
    {
        id: 4,
        name: "Visitor Visa",
        icon: <FaArrowRightArrowLeft />
    },
    {
        id: 5,
        name: "Air Ticket",
        icon: <ImAirplane />
    },
    {
        id: 6,
        name: "Passport",
        icon: <FaPassport />
    },
]

export const exploreServices = [
    {
        id: 1,
        title: "Passport services",
        img: passport,
        desc: "Efficient passport services to simplify your international travel plans!"
    },
    {
        id: 2,
        title: "Visa services",
        img: visa,
        desc: "Expert visa services for a seamless journey to your desired destination!"
    },
    {
        id: 3,
        title: "Identity & certi Services",
        img: docoment,
        desc: "Trusted services for identity verification and certification needs"
    },
    {
        id: 4,
        title: "Government Docs Assistance",
        img: certificates,
        desc: "Assistance for making government documentation"
    },
    {
        id: 5,
        title: "MSME Registration",
        img: registration,
        desc: "Easy MSME registration to help your business grow and thrive!"
    },
    {
        id: 6,
        title: "Travel Assistance",
        img: travel,
        desc: "Comprehensive travel assistance for a smooth and worry-free journey to your destination!"
    }
]

export const explorecountries = [
    {
        id: 1,
        title: "Australia",
        img: auscity,
        desc: "Efficient passport services to simplify your international travel plans!"
    },
    {
        id: 2,
        title: "United-kingdom",
        img: ukcity,
        desc: "Expert visa services for a seamless journey to your desired destination!"
    },
    {
        id: 3,
        title: "Canada",
        img: canadacity,
        desc: "Trusted services for identity verification and certification needs"
    },
    {
        id: 4,
        title: "USA",
        img: usacity,
        desc: "Assistance for making government documentation"
    }

]


export const exploreS3 = [
    {
        id: 1,
        title: "Work Permit",
        img: workpermit,
        desc: "Effortless work permit solutions, unlocking global career possibilities"
    },
    {
        id: 2,
        title: "Air ticket",
        img: airticket,
        desc: "Book your air tickets effortlessly for a smooth and convenient journey"
    },
    {
        id: 3,
        title: "Immigration",
        img: immigration,
        desc: "Seamless immigration services to help you start your new chapter abroad"
    }

]

