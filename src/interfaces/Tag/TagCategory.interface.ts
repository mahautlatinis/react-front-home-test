import { TagInterface } from "./Tag.interface";

export interface TagCategoryInterface {
	//handleSelection: (id: number) => void;
	id: number;
	name: string,
	tags: TagInterface[],
	onSelect?: (...args: any) => void,
	isSelected?: boolean
};
