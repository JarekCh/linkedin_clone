import React, { useEffect, useState } from 'react';
import '../styles/Feed.css';
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption.js';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from '../firebase';
import firebase from 'firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState('');
  const [post, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .orderBy('timiestamp', 'desc')
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault();

    db.collection('posts').add({
      name: user.displayName,
      descryption: user.email,
      message: input,
      photoUrl: user.photoUrl || '',
      timiestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput('');
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='text'
            />
            <button onClick={sendPost} type='submit'>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption Icon={SubscriptionsIcon} title='Video' color='#e7a33e' />
          <InputOption Icon={EventNoteIcon} title='Photo' color='#c0cbd' />
          <InputOption
            Icon={CalendarViewDayIcon}
            title='Write article'
            color='#7fc15e'
          />
        </div>
      </div>

      {/* POST */}
      <FlipMove>
        {post.map(({ id, data: { name, descryption, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={descryption}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
