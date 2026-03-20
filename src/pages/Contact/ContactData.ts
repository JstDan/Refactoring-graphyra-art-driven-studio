export type ContactData = {
  heroInfo: {
    subtitle: string;
    title: string;
    description?: string;
  }[];
  projectTypes: string[];
  contactInfo: {
    emailTitle?: string;
    email?: string;
    phoneTitle?: string;
    phone?: string;
    addressTitle?: string;
    address?: string;
    addressSubtitle?: string;
    socials?: {
      name: string;
      url: string;
    }[];
  }[];
};

export const contactData: ContactData = {
  heroInfo: [
    {
      subtitle: "СВЪРЖЕТЕ СЕ",
      title: "Да създадем нещо,\n което остава.",
    },
  ],
  projectTypes: [
    "Брандинг",
    "Уеб дизайн",
    "Социални мрежи",
    "Печатни материали",
    "Motion дизайн",
    "Друго",
  ],
  contactInfo: [
    {
      emailTitle: "ИМЕЙЛ",
      email: "contact@graphyra.net",
    },
    {
      phoneTitle: "ТЕЛЕФОН",
      phone: "+359 879 626 889",
    },
    {
      addressTitle: "АДРЕС",
      address: "жк. ВЪЗРАЖДАНЕ 37,\n вх. 2, ет. 7, ап. 41",
      addressSubtitle: "Варна, България",
    },
    {
      socials: [
        {
          name: "Instagram",
          url: "https://www.instagram.com/graphyra.marketing/",
        },
        {
          name: "Facebook",
          url: "https://www.facebook.com/profile.php?id=61587596032693",
        },
      ],
    },
  ],
};
