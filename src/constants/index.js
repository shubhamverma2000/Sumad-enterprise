
import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { company1, company2 } from "../assets/images";

export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Our Services" },
    { href: "#clients", label: "Clients" },
    { href: "#footer", label: "Contact Us" },
];

export const introStat = [
    { value: '1k+', label: 'Customers' },
    { value: '500+', label: 'Companies' },
    { value: '250k+', label: 'XYZ' },
]

export const clientsData = [
    {
        imgURL:company1,
        Label:"Company1"
    },
    {
        imgURL:company2,
        Label:"Company2"
    },
    {
        imgURL:company1,
        Label:"Company3"
    },
    {
        imgURL:company2,
        Label:"Company4"
    },
    {
        imgURL:company1,
        Label:"Company1"
    },
    {
        imgURL:company2,
        Label:"Company5"
    }
];


export const services = [
    {
        imgURL: truckFast,
        label: "Service 1",
        subtext: "Enjoy seamless shopping with our complimentary shipping service."
    },
    {
        imgURL: shieldTick,
        label: "Service 2",
        subtext: "Experience worry-free transactions with our secure payment options."
    },
    {
        imgURL: support,
        label: "Service 3",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: support,
        label: "Service 3",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: support,
        label: "Service 3",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
    {
        imgURL: support,
        label: "Service 3",
        subtext: "Our dedicated team is here to assist you every step of the way."
    },
];


export const footerLinks = [
    {
        title: "Services",
        links: [
            { name: "Project1", link: "/" },
            { name: "Project2", link: "/" },
            { name: "Project3", link: "/" },
            { name: "Project4", link: "/" },
            { name: "Project5", link: "/" },
            { name: "Project6", link: "/" },
        ],
    },
    {
        title: "Help",
        links: [
            { name: "About us", link: "/" },
            { name: "Privacy policy", link: "/" }
        ],
    },
    {
        title: "Get in touch",
        links: [
            { name: "customer@sumad-enterprise.com", link: "mailto:customer@sumad-enterprise.com" },
            { name: "+91-99999-77777", link: "tel:+91-99999-77777" },
        ],
    },
];

export const socialMedia = [
    { src: facebook, alt: "facebook logo" },
    { src: twitter, alt: "twitter logo" },
    { src: instagram, alt: "instagram logo" },
];
