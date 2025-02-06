// src/data/quests.js
import { AcademicCapIcon, BookOpenIcon, UserIcon, ClockIcon } from "@heroicons/react/24/solid";

export const quests = [
  { id: 1, title: "성경 기본", icon: AcademicCapIcon, link: "/quiz?category=knowledge", status: "locked", position: { top: "30%", left: "20%" } },
  { id: 2, title: "성경 구절", icon: BookOpenIcon, link: "/quiz?category=verses", status: "locked", position: { top: "50%", left: "40%" } },
  { id: 3, title: "성경 인물", icon: UserIcon, link: "/quiz?category=characters", status: "locked", position: { top: "70%", left: "60%" } },
  { id: 4, title: "성경 역사", icon: ClockIcon, link: "/quiz?category=history", status: "locked", position: { top: "80%", left: "80%" } },
];
