import React from 'react'
import StyledForumTopicList from './forumTopicList.styled';

function ForumTopicList() {
  return (
    <StyledForumTopicList>

      <div className='score'>
        <div >
          <button className='up'></button>
        </div>
        <div>56</div>
        
        <button className='down'></button>
      </div>
      
      <div className='text-container'>

        <div className='topic-header'>
          <div>The topic title</div>
          <div>Date</div>
        </div>
        
        <div className='bottom-half'>
          <div className='user-info'>
              <div className='avatar'>
                <img src='https://avatars.dicebear.com/api/male/haha.svg'></img>
              </div>
              <div>Admin</div>
          </div>

          <div className='topic-content'>
            <div >Content of the topic: Nulla mollit anim laborum pariatur et exercitation excepteur laboris duis id dolore mollit magna. Quis dolore amet cupidatat mollit duis aute qui labore ex. Occaecat aliqua deserunt excepteur tempor nulla occaecat. Amet fugiat eu fugiat cupidatat dolore eiusmod amet et aliqua in. Cillum ullamco laboris quis sunt qui tempor do. Ex mollit cupidatat amet reprehenderit excepteur mollit voluptate veniam non esse nulla.Laborum excepteur deserunt amet laboris tempor velit eu labore minim. Aliquip ut ea do deserunt nisi irure. Commodo Lorem commodo reprehenderit pariatur amet deserunt. Ut proident aliquip deserunt ullamco pariatur enim minim. Sunt fugiat aute nisi amet proident cupidatat consequat duis ex elit anim irure. Aliquip in enim est consectetur duis nisi.Anim do cillum aliqua aliqua aliquip id ex minim cupidatat voluptate pariatur ut sunt. Eiusmod esse enim eiusmod elit anim est aute fugiat veniam id veniam. Proident culpa amet minim magna proident est reprehenderit laborum aute Lorem est sint do do. Ex nostrud nisi fugiat adipisicing cillum. Anim ea voluptate dolore non aute. Id minim esse esse excepteur officia. Dolor cillum pariatur anim elit enim labore aute anim in proident pariatur exercitation minim velit.Commodo tempor eiusmod nostrud fugiat. Proident ex aute cupidatat et occaecat velit Lorem dolor quis duis. Eu Lorem duis labore velit nulla sunt. Excepteur amet sit Lorem ullamco sint aute veniam anim laborum consectetur nostrud.</div>
            <button>Add Reply</button>
          </div>
        </div>

      </div>

    </StyledForumTopicList>
  )
}

export default ForumTopicList;
