import { TagInterface } from "./Tag.interface";

export interface TagCategoryInterface {
	id: number;
	name: string,
	tags: TagInterface[],
	//onSelectMenuTag?: (id: number) => void | undefined,
	isSelected?: boolean
};
