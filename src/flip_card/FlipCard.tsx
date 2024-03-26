import { TbCalendarSearch } from 'react-icons/tb';
import { FaDisplay } from 'react-icons/fa6';
import './flip_card.scss'

export const FlipCard = () => {
    const handleFlip = () => {
        const card = document.getElementById('card');
        if (card) {
          card.classList.add('flipped');
        }
      };
    
      const handleFlipBack = () => {
        const card = document.getElementById('card');
        if (card) {
          card.classList.remove('flipped');
        }
      };
      return (
        <div className='flip-card' id='card'>
          <div className='flip-card-inner'>
            <div className='flip-card-front'>
                <p>front</p>
              <button id='flipButton' onClick={handleFlip}>
                <TbCalendarSearch/>
              </button>
            </div>
    
            <div className='flip-card-back'>
                <p>back</p>
              <button id='flipButtonBack' onClick={handleFlipBack}>
                <FaDisplay />
              </button>
            </div>
          </div>
        </div>
      );
}
