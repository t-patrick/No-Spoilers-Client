import axios from 'axios';

// Login

const BASE_URL = 'http://localhost:3001';

export const verifyTokenAndLogin = async (token: string) => {
  let config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${BASE_URL}/authcheck`, config);
  return response;
};

export const setupToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const loginUser = async (
  user: Omit<DBUser, 'avatar' | 'displayName'>
) => {
  const newUser = await axios.post(`${BASE_URL}/login`, user);

  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${newUser.data.token}`;
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
  const newUserTVShow = await axios.get(`${BASE_URL}/show/${id}`);

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
    newEpisodeCode,
    TMDB_episode_id,
  });

  if (updated.status === 500) return undefined;

  return updated.data as UserTVShow;
};

export const getWaybackUrls = async (userId: number, TMDB_show_Id: number) => {
  const waybacks = await axios.get(`${BASE_URL}/wayback/${TMDB_show_Id}`);

  return waybacks.data as ExternalIds;
};

export const getUserWaybackUrls = async (_id: number, TMDB_show_Id: number) => {
  const waybacks = await axios.get(`${BASE_URL}/userwayback/${TMDB_show_Id}`);

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
      website,
    }
  );

  return waybacks.data as UserWayback;
};

export const updateUserWayback = async (_id: number, TMDB_show_Id: number) => {
  try {
    const waybacks = await axios.get(
      `${BASE_URL}/userwayback/update/${TMDB_show_Id}`
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
      const topics = await axios.get(`${BASE_URL}/forum/load/${TMDB_show_id}`);

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
    topicId,
  });
  return response;
};

export const downVotePost = async (userId: string, topicId: string) => {
  const response = await axios.patch(`${BASE_URL}/forum/topic/downvote`, {
    topicId,
  });

  return response;
};

export const setShowWatched = async (TMDB_show_id: string, userId: string) => {
  const response = await axios.patch(
    `${BASE_URL}/home/complete/${TMDB_show_id}`
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

export const updateUser = (user: DBUser) => {};

export const postUpdateReply = async (
  topicId: string,
  replyId: string,
  body: string
) => {
  const response = await axios.patch(`${BASE_URL}/forum/reply/edit`, {
    topicId,
    replyId,
    body,
  });

  if (response.status === 200) return true;
  return false;
};

export const postUpdateTopic = async (
  topicId: string,
  body: string,
  title: string
) => {
  const response = await axios.patch(`${BASE_URL}/forum/topic/edit`, {
    topicId,
    title,
    body,
  });

  if (response.status === 200) return true;
  return false;
};

export const updateUserAvatar = async (avatar: string) => {
  const response = await axios.patch(`${BASE_URL}/profile/avatar`, {
    avatar,
  });

  if (response.status === 200) return response.data;
  return false;
};
