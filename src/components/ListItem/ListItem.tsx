import { TodosItem } from '../../types/types';
import {MdEdit, FaRegTrashCan, IoCheckbox} from "../index"

const ListItem = ({ id, title, completed }: TodosItem) => {
    return (
        <li className='flex justify-between items-center gap-4 p-2.5 mb-4 bg-light-brown rounded-sm'>
            <input
                type="checkbox"
                checked={completed}
                className="cursor-pointer"
            />
            <span
                className={`flex-1 ${completed ? "text-gray-500 line-through" : "text-white"} font-bold truncate`}>
                {title}
            </span>
            <div className='flex gap-2 text-xl text-white cursor-pointer'>
                <IoCheckbox />
                <MdEdit />
                <FaRegTrashCan />
            </div> 
        </li>
    )
}

export default ListItem
