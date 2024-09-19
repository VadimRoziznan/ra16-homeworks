import React from 'react'
import "../Card/card.scss"

export interface ICard {
  id: number,
  content: string
}

export const Card: React.FC<ICard> = (props) => {
  const { content } = props;

  return (
    <div className='card-container'>
      <div className='user-info'>
        <img src="https://cdn.dribbble.com/users/323571/screenshots/5412611/media/b4978c6d2001514413b2cd1fb29cacb8.jpg?resize=1000x750&vertical=center"></img>
        <div className='nic'>
          <h4>Бэтмен</h4>
        </div>
      </div>
      <div className='content'>
        {content}
      </div>
      <div className='like'></div>
      <div className='add-comment'></div>
    </div>
  )
}
