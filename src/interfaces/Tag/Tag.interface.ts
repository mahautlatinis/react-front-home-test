export interface TagInterface {
	id: number;
	type: string;
	label: string;
	name?: {
		fr?: string;
		en?: string;
	};
	color?: string;
};
