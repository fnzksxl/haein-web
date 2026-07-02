export type Project = {
  title: string;
  explain: string;
  year: string;
};

export type AchievementMap = Record<string, Project[]>;

export type EquipmentItem = {
  name: string;
  description?: string;
  quantity?: number;
  imgSrc: string;
  thumnailSrc: string;
};

export type EquipmentMap = Record<string, Record<string, EquipmentItem[]>>;
export type DisplayEquipment = EquipmentItem & { group: string };
