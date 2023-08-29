import React from 'react'

export const FeaturedImage = ({ img, externalLink }) => {
  return (
    <div className='featured-image grid-area-image frotate fne'>
      <div className='c-image'>
        <a className='d-iblock' href={externalLink}>
          <div className='fih'>
            <picture className='proyect-image'>
              <img src={img} alt='example of the app notes' />
            </picture>
          </div>
        </a>
      </div>
    </div>
  )
}
