import { TagInterface } from "./Tag.interface";

export interface TagCategoryInterface {
	id: number;
	name: string,
	tags: TagInterface[],
	onSelectTagCategory: (id: number) => void
};
