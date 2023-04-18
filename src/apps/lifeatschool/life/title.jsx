import React from 'react'

function TITLE({title, summary, author, dt}) {

  return (
    <div>
        <div>
            <p className='news_title'>{title}</p>
            <p className='news_summary'>{summary}</p>
            <p className='news_author'>
                <span>{author}</span>
                <span>{dt}</span>
            </p>
        </div>
    </div>
  )
}

export default TITLE