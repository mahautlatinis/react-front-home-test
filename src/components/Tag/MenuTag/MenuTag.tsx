import { useState } from "react"
//import { menuTagList } from "../../../assets/mock_data/TagData"
import { TagCategoryInterface } from "../../../interfaces/Tag/TagCategory.interface"
import TagItem from "../TagItem/TagItem"
import "./style.css"

interface MenuTagProps {
	onSelectMenuTag: (id: number) => void
	selectedMenu: number[],
	menuTags: TagCategoryInterface[]
}

export default function MenuTag(props: MenuTagProps)
{
	//const [menuTags, setMenuTagList] = useState<TagCategoryInterface[]>(menuTagList)

	const isSelected = (menuTag: TagCategoryInterface) => {
		if (props.selectedMenu.includes(menuTag.id))
			return true
		return false
	}

	return (
		<div className="menutag">
			<h2>Menu</h2>
			<div 
				className="tag-list"
			>
				<ul>
					<li key={0} className={props.selectedMenu.includes(0) ? "selected" : "tag"}  onClick={() => props.onSelectMenuTag(0)}>Toutes</li>
				</ul>
				{props.menuTags.map(menuTag => 
					<TagItem 
						id={menuTag.id}
						name={menuTag.name}
						tags={menuTag.tags}
						onSelectTagCategory={props.onSelectMenuTag}
						key={menuTag.id}
						isSelected={isSelected(menuTag)}
					/>
			)}
			</div>
		</div>
	)
}
