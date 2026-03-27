import projectDobrudzha from "@/assets/project-dobrudzha.png";
import projectDolce from "@/assets/project-dolce.png";
import projectDouble44 from "@/assets/project-double44.png";
import projectMoodboard from "@/assets/project-moodboard.png";
import projectSoul from "@/assets/project-soul.png";
import projectAurum from "@/assets/project-aurum.jpg";
import projectVerde from "@/assets/project-verde.jpg";
import projectKinetic from "@/assets/project-kinetic.jpg";
import projectLumina from "@/assets/project-lumina.jpg";

export interface Project {
  title: string;
  category: string;
  categoryKey: string;
  description: string;
  image: string;
  year: string;
  services: string[];
  link?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "ПФК Добруджа",
    category: "Социални мрежи",
    categoryKey: "Социални",
    description:
      "Управление на социалните мрежи на футболен клуб. Публикации, сторита и цялостна визуална стратегия за онлайн присъствие.",
    image: projectDobrudzha,
    year: "2025",
    services: ["Социални мрежи", "Motion Graphics", "Съдържание"],
    slug: "pfk-dobrudzha",
  },
  {
    title: "Dolce Amaro",
    category: "Уеб дизайн",
    categoryKey: "Уеб",
    description:
      "Модерен уебсайт за италиански ресторант с онлайн поръчки и резервации. Елегантен дизайн, който отразява атмосферата на заведението.",
    image: projectDolce,
    year: "2024",
    services: ["Уеб дизайн", "UX", "Онлайн резервации"],
    link: "https://dolceamaro.bg/",
    slug: "dolce-amaro",
  },
  {
    title: "Double44",
    category: "Уеб дизайн",
    categoryKey: "Уеб",
    description:
      "Луксозен бар в центъра на Варна. Пълна визуална идентичност включваща лого, менюта и брандиране на интериора.",
    image: projectDouble44,
    year: "2024",
    services: ["Уеб дизайн", "Бранд идентичност", "Menu Design", "Сигнаж"],
    link: "https://www.double44.com/",
    slug: "double44",
  },
  {
    title: "Elegant Moodboard",
    category: "Социални шаблони",
    categoryKey: "Социални",
    description:
      "Естетична визуална система за фотографско студио. Шаблони за Instagram и Facebook с единен визуален стил.",
    image: projectMoodboard,
    year: "2024",
    services: ["Дизайн система", "Социални шаблони"],
    slug: "elegant-moodboard",
  },
  {
    title: "Soul Beauty",
    category: "Социални шаблони",
    categoryKey: "Социални",
    description:
      "Цялостна визуална идентичност за салон за красота. Модерен и женствен дизайн за социални мрежи.",
    image: projectSoul,
    year: "2023",
    services: ["Бранд идентичност", "Социални шаблони"],
    slug: "soul-beauty",
  },
  {
    title: "Aurum",
    category: "Социални шаблони",
    categoryKey: "Социални",
    description:
      "Система от шаблони за луксозна бижутерска марка. Елегантен и минималистичен подход.",
    image: projectAurum,
    year: "2023",
    services: ["Creative Direction", "Social Templates"],
    slug: "aurum",
  },
  {
    title: "Verde Organic",
    category: "Брандинг",
    categoryKey: "Брандинг",
    description:
      "Цялостна идентичност за биологичен производител. Природни цветове и органични форми.",
    image: projectVerde,
    year: "2023",
    services: ["Брандинг", "Опаковки", "Visual System"],
    slug: "verde-organic",
  },
  {
    title: "Kinetic",
    category: "Motion дизайн",
    categoryKey: "Motion",
    description:
      "Анимирани елементи за технологична компания. Динамични визуализации и motion graphics.",
    image: projectKinetic,
    year: "2023",
    services: ["Motion Design", "3D Elements"],
    slug: "kinetic",
  },
  {
    title: "Lumina Events",
    category: "Печатни материали",
    categoryKey: "Брандинг",
    description:
      "Пълен комплект материали за агенция за събития. Покани, банери и рекламни материали.",
    image: projectLumina,
    year: "2022",
    services: ["Печатни материали", "Бранд идентичност"],
    slug: "lumina-events",
  },
];
