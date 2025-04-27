import { useState } from 'react';
import { TodosItem, ListProps } from '../../types/types';
import { MdEdit, FaRegTrashCan, IoCheckbox } from "../index"
import { useDispatch } from 'react-redux';
import { changeCompleted, editTitle, remove } from '../../store/slices/todoSlice';

const ListItem = ({ id, title, completed }: TodosItem & ListProps) => {
    const [newTitle, setNewTitle] = useState(title);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const dispatch = useDispatch();

    return (
        <li className='flex justify-between items-center gap-4 p-2.5 mb-4 bg-light-brown rounded-sm'>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => dispatch(changeCompleted(id))}
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
                        ? <IoCheckbox onClick={() => { dispatch(editTitle({id, newTitle})); setIsEdit(false)}} />
                        : <MdEdit onClick={() => setIsEdit(true)} />
                }
                {/* <FaRegTrashCan onClick={() => remove?.(id)} /> */}
                <FaRegTrashCan onClick={() => dispatch(remove(id))} />
            </div>
        </li>
    )
}

export default ListItem
