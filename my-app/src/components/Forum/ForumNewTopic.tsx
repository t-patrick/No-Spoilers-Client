import React from 'react'
import StyledForumNewTopic from './forumNewTopic.styled'

export default function ForumNewTopic() {
  return (
    <StyledForumNewTopic>
      <form>
        <div className='title'>
          <div>Title</div>
          <textarea /> 
        </div>

        <div className='body'>
          <div>Body</div>
          <textarea />
        </div>

        <div className='btn'>
          <button type='submit'>Create Topic</button>
        </div>

      </form>
    </StyledForumNewTopic>
  )
}
