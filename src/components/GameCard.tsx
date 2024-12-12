import React from 'react'
import './GameCard.css'

interface IGameCard {
  url?:string;
  title: string;
  description: string;
  ready?: boolean;
  children?: React.ReactNode
}

export const GameCard: React.FC<IGameCard> = ({url, title, description, children, ready=false}) => {
  const handleUrlClick = () => {
    window.open(url, '_blank');
  }
  return (
    <div className='game-card'>
      <div>
        <h5>{title}</h5>
        <p className='description'>{description}</p>
        <h6 className='subtitle'>Items to learn</h6>
        {children}
      </div>
      <button className='button' onClick={handleUrlClick}>{ready ? 'PLAY': 'IN DEVELOPMENT'}</button>
  </div>
  )
}
