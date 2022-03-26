import axios from 'axios';

// Login

const BASE_URL = 'http://localhost:3001';

const createHeaders = (token: string) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};

export const loginUser = async (
  user: Omit<DBUser, 'avatar' | 'displayName'>
) => {
  const newUser = await axios.post(`${BASE_URL}/login`, user);

  return newUser.data;
};

export const registerUser = async (user: DBUser) => {
  const newUser = await axios.post(`${BASE_URL}/register`, user);
  return newUser.data;
};

export const addTVShow = async (_id: number, TMDB_show_Id: number) => {
  const newUserTVShow = await axios.post(
    `${BASE_URL}/home/add/${TMDB_show_Id}`,
    {
      _id,
    }
  );

  if (newUserTVShow.status === 400) return undefined;

  return newUserTVShow.data as UserTVShow;
};

export const getShowDetail = async (id: string, userId: string) => {
  const newUserTVShow = await axios.post(`${BASE_URL}/show/${id}`, {
    _id: userId,
  });

  return newUserTVShow.data as TVShow;
};

export const updateEpisode = async (
  _id: string,
  newEpisodeCode: string,
  TMDB_episode_id: string,
  TMDB_show_id: string
) => {
  // TODO fix this
  const updated = await axios.patch(`${BASE_URL}/show/${TMDB_show_id}`, {
    _id,
    newEpisodeCode,
    TMDB_episode_id,
  });

  if (updated.status === 500) return undefined;

  return updated.data as UserTVShow;
};

export const getWaybackUrls = async (userId: number, TMDB_show_Id: number) => {
  const waybacks = await axios.post(`${BASE_URL}/wayback/${TMDB_show_Id}`, {
    _id: userId,
  });

  return waybacks.data as ExternalIds;
};

export const getUserWaybackUrls = async (_id: number, TMDB_show_Id: number) => {
  const waybacks = await axios.post(`${BASE_URL}/userwayback/${TMDB_show_Id}`, {
    _id,
  });

  return waybacks.data.websites as Array<UserWayback>;
};

export const addUserWaybackUrl = async (
  _id: number,
  website: string,
  TMDB_show_Id: number
) => {
  const waybacks = await axios.post(
    `${BASE_URL}/userwayback/add/${TMDB_show_Id}`,
    {
      _id,
      website,
    }
  );

  return waybacks.data as UserWayback;
};

export const updateUserWayback = async (_id: number, TMDB_show_Id: number) => {
  if (!_id || !TMDB_show_Id) {
    console.log('in get userwayback api, _id or TMDB show id is not a number');
    return;
  }

  try {
    const waybacks = await axios.patch(
      `${BASE_URL}/userwayback/update/${TMDB_show_Id}`,
      {
        _id,
      }
    );
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export const addTopic = async (
  topicBody: TopicRequest,
  TMDB_show_id: number
) => {
  try {
    const createdTopic = await axios.post(
      `${BASE_URL}/forum/topic/add/${TMDB_show_id}`,
      topicBody
    );
    return createdTopic.data as UserTopic;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const fetchTopics = async (TMDB_show_id: string, userId: string) => {
  console.log(TMDB_show_id);
  if (TMDB_show_id && userId) {
    try {
      const topics = await axios.post(
        `${BASE_URL}/forum/load/${TMDB_show_id}`,
        {
          _id: userId,
        }
      );

      if (topics.data === 'No topics found') return [];

      return topics.data as UserTopic[];
    } catch (e) {
      console.log(e);
      return undefined;
    }
  }
};

export const postReply = async (
  TMDB_show_id: number,
  userId: number,
  topicId: string,
  body: string
) => {
  try {
    const reply = await axios.post(
      `${BASE_URL}/forum/reply/add/${TMDB_show_id}`,
      {
        _id: userId,
        body,
        topicId,
      }
    );

    return reply.data as Reply;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

export const deleteUserShow = async (TMDB_show_id: string, userId: string) => {
  const response = await axios.post(`${BASE_URL}/home/delete/${TMDB_show_id}`, {
    _id: userId,
  });

  if (response.status === 204) return true;
  return false;
};

export const upVotePost = async (userId: string, topicId: string) => {
  const response = await axios.patch(`${BASE_URL}/forum/topic/upvote`, {
    _id: userId,
    topicId,
  });

  console.log();

  return response;
};

export const downVotePost = async (userId: string, topicId: string) => {
  const response = await axios.patch(`${BASE_URL}/forum/topic/downvote`, {
    _id: userId,
    topicId,
  });

  return response;
};

export const setShowWatched = async (TMDB_show_id: string, userId: string) => {
  const response = await axios.patch(
    `${BASE_URL}/home/complete/${TMDB_show_id}`,
    {
      _id: userId,
    }
  );

  return response.data as UserTVShow;
};

export const reportTopicOrReply = async (report: Report) => {
  const response = await axios.post(`${BASE_URL}/forum/report`, report);

  return response;
};

export const deleteTopics = async (topic: UserTopic) => {
  const response = await axios.post(`${BASE_URL}/forum/topic/delete`, {
    topicId: topic._id,
  });

  console.log(response);
  if (response.status === 200) return true;
  return false;
};

export const deleteReplies = async (reply: Reply) => {
  const response = await axios.post(`${BASE_URL}/forum/reply/delete`, {
    topicId: reply.topicId,
    replyId: reply._id,
  });

  if (response.status === 200) return true;
  return false;
};
