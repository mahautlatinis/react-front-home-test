import { MenuTagInterface} from "../Tag/MenuTag.interface";

export default interface MenuContextInterface {
	currentMenues: {
		selectedMenu?: number[],
		menuTags: MenuTagInterface[]
	},
	onSelect: {
		handleSelection: (id: number) => void 
	},
	adding: {
		adding: boolean
		id: number
	}
}
