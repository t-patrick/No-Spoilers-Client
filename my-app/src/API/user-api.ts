import axios from 'axios';

// Login

const BASE_URL = 'http://localhost:3001';

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
  console.log('in getShow detail', newUserTVShow);

  return newUserTVShow.data as TVShow;
};

export const updateEpisode = async (
  _id: string,
  newEpisodeCode: string,
  TMDB_episode_id: string,
  tvShow: TVShow
) => {
  // TODO fix this
  const updated = await axios.patch(`${BASE_URL}/show/`, {
    _id,
    newEpisodeCode,
    TMDB_episode_id,
    tvShow,
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
  console.log('in update user wayback, id', _id, 'show id:', TMDB_show_Id);

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
  try {
    const topics = await axios.post(`${BASE_URL}/forum/${TMDB_show_id}`, {
      _id: userId,
    });

    if (topics.data === 'No topics found') return [];

    return topics.data as UserTopic[];
  } catch (e) {
    console.log(e);
    return undefined;
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
