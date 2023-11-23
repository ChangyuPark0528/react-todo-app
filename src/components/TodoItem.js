import React from 'react';
import { MdDelete, MdDone } from 'react-icons/md';
import './scss/TodoItem.scss';
import cn from 'classnames';

const TodoItem = ({ item, remove, check }) => {
  const { id, title, done } = item;
  return (
    <li className='todo-list-item'>
      <div
        className={cn('check-circle', { active: done })} //done이 발생될 때마다 active 클래스 추가.
        onClick={() => check(id)}
      >
        <MdDone />
      </div>
      <span className={cn('text', { finish: done })}>{title}</span>
      <div
        className='remove'
        onClick={() => remove(id)}
      >
        <MdDelete />
      </div>
    </li>
  );
};

export default TodoItem;
