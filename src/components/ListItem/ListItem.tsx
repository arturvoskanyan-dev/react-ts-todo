import { useState } from 'react';
import { Todos } from '../../types/types';
import { MdEdit, FaRegTrashCan, IoCheckbox } from "../index"
import { useAppDispatch } from '../../store/hooks';
import { changeCompleted, editList } from '../../store/slices/todoAPI';
import { changeTodoId, remove } from '../../store/slices/todoSlice';

const ListItem = ({ id, title, completed }: Todos) => {
    const [newTitle, setNewTitle] = useState(title);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const change = (id: number, completed: boolean) => {
        dispatch(changeCompleted({ id, completed }))
        dispatch(changeTodoId(id))
    }

    const edit = (id: number, title: string) => {
        dispatch(editList({ id, title }))
        dispatch(changeTodoId(id))
        setIsEdit(false)
    }

    return (
        <li className='flex justify-between items-center gap-4 p-2.5 mb-4 bg-light-brown rounded-sm'>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => change(id, completed)}
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
            <div className='flex gap-2 text-xl text-white [&>button]:cursor-pointer'>
                {
                    isEdit
                        ? <button aria-label="change-edit-btn" onClick={() => edit(id, newTitle)}><IoCheckbox /></button>
                        : <button aria-label="edit-btn" onClick={() => setIsEdit(true)}><MdEdit /></button>
                }
                <button aria-label='remove-btn' onClick={() => dispatch(remove(id))}>
                    <FaRegTrashCan />
                </button>
            </div>
        </li>
    )
}

export default ListItem
