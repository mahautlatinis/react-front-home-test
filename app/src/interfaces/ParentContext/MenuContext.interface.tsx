export default interface MenuContextInterface {
	currentMenues: {
		selectedMenu?: number[],
		menuTags: any[],//TODO: revoir le type
	},
	onSelect: {
		handleSelection: (id: number) => void 
	},
	adding: {
		adding: boolean
		id: number
	}
}
