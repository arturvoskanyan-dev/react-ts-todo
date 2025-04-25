import { useState } from 'react';
import { TodosItem } from '../../types/types';
import { MdEdit, FaRegTrashCan, IoCheckbox } from "../index"

const ListItem = ({ id, title, completed, remove, changeCompleted, editTitle }: TodosItem) => {
    const [newTitle, setNewTitle] = useState(title);
    const [isEdit, setIsEdit] = useState<boolean>(false);

    return (
        <li className='flex justify-between items-center gap-4 p-2.5 mb-4 bg-light-brown rounded-sm'>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => changeCompleted?.(id, !completed)}
                className="cursor-pointer"
            />
            {
                !isEdit
                    ? <span
                        onDoubleClick={() => setIsEdit(true)}
                        className={`flex-1 ${completed ? "text-gray-500 line-through" : "text-white"} font-bold truncate`}>
                        {title}
                    </span>
                    : <input
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className='p-2 flex-1 bg-transparent text-white rounded-2xl truncate shadow-input'
                    />
            }
            <div className='flex gap-2 text-xl text-white cursor-pointer'>
                {
                    isEdit
                        ? <IoCheckbox onClick={() => { editTitle?.(id, newTitle); setIsEdit(false) }} />
                        : <MdEdit onClick={() => setIsEdit(true)} />
                }
                <FaRegTrashCan onClick={() => remove?.(id)} />
            </div>
        </li>
    )
}

export default ListItem
