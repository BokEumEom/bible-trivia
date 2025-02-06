// src/data/quests.js
import { AcademicCapIcon, BookOpenIcon, UserIcon, ClockIcon } from "@heroicons/react/24/solid";

export const quests = [
  { id: 1, title: "성경 기본", icon: AcademicCapIcon, link: "/quiz?category=knowledge", status: "completed" },
  { id: 2, title: "성경 구절", icon: BookOpenIcon, link: "/quiz?category=verses", status: "in-progress" },
  { id: 3, title: "성경 인물", icon: UserIcon, link: "/quiz?category=characters", status: "locked" },
  { id: 4, title: "성경 역사", icon: ClockIcon, link: "/quiz?category=history", status: "locked" },
];
