"use client"

import { IconType } from "react-icons";
import { FaHome, FaGlobe, FaComments, FaCameraRetro, FaFilm, FaBook, FaCogs, FaMapMarkerAlt, FaInfoCircle } from "react-icons/fa";

export const BASE_WIDTH = 400;

type MenuItem = {
    icon: IconType;
    label: string;
};

export const MENU_ITEMS: MenuItem[] = [
    { icon: FaHome, label: "Community Dashboard" },
    { icon: FaGlobe, label: "Global Surveyors" },
    { icon: FaComments, label: "Group Hub Forums" },
    { icon: FaCameraRetro, label: "Survey Photos" },
    { icon: FaFilm, label: "Surveying Tutorials" },
    { icon: FaBook, label: "Surveying Jobs" },
    { icon: FaCogs, label: "Tools & Resources" },
    { icon: FaMapMarkerAlt, label: "Member Map" },
    { icon: FaInfoCircle, label: "Documentation" },
];