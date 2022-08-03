import { useState } from "react"
import { menuTagList } from "../../../assets/mock_data/TagData"
import { TagCategoryInterface } from "../../../interfaces/Tag/TagCategory.interface"
import TagItem from "../TagItem/TagItem"
import "./style.css"

interface MenuTagProps {
	onSelectMenuTag: (id: number) => void
}

export default function MenuTag(props: MenuTagProps)
{
	const [menuTags, setMenuTagList] = useState<TagCategoryInterface[]>(menuTagList)

	return (
		<div className="menutag">
			<h2>Menu</h2>
			<div 
				className="tag-list"
			>
				<ul>
					<li className="" key={0} onClick={() => props.onSelectMenuTag(0)}>Toutes</li>
				</ul>
				{menuTags.map(menuTag => 
					<TagItem 
						id={menuTag.id}
						name={menuTag.name}
						tags={menuTag.tags}
						onSelectTagCategory={props.onSelectMenuTag}
						key={menuTag.id}
					/>
			)}
			</div>
		</div>
	)
}
