import React from 'react'

export default function ForumNewTopic() {
  return (
    <div>
      <form>
        <div>
          <div>Title</div>
          {/* type of textarea??? */}
          <textarea /> 
        </div>

        <div>
          <div>Body</div>
          {/* type of textarea??? */}
          <textarea />
        </div>

        <div>
          <button type='submit'>Create Topic</button>
        </div>
        
      </form>

    </div>
  )
}
