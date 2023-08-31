import React, { useState } from 'react';
import './PostPage.css'


const PostPage = () => {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [abstract, setAbstract] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };


  const handleSubmit = () => {
    // Check for required fields and display error message if any field is empty
    if (!title || !content || (postType === 'question' && !tags) || (postType === 'article' && !abstract)) {
      setErrorMessage('Please fill in all the required fields.');
      return;
    }

    // Logic to handle the submission of the post
    console.log('Submitted post:', { postType, title, content, tags, abstract });
    alert('Thank you for your response');

    // Reset the error message
    setErrorMessage('');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleTagsChange = (event) => {
    setTags(event.target.value);
  };

  const handleAbstractChange = (event) => {
    setAbstract(event.target.value);
  };


  const getDescriptionText = () => {
    return postType === 'question'
      ? 'For post a question, the following section would be appeared.'
      : 'For post an article, the following section would be appeared.';
  };


  return (
    <div>
      <h3 className='style'>New Post</h3>
      <div className='line'>
        <label><b>
          Select Post Type:
          </b></label>
        <div className='space'>
          <label>
            <input
              type="radio"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            Question
          </label>
          <label className='space1'>
            <input
              type="radio"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
            Article
          </label>
        </div>
      </div>
      <h3 className='style'>What do you want to ask or share</h3>
      <p><b>This section is designed based on the type of the post. It could be developed by conditional rendering. <span style={{color: 'red'}}>{getDescriptionText()}</span></b></p>
      <div className='between'>
        <label><b>
          Title:
          </b><input className='title'
            type="text"
            value={title}
            placeholder={
              postType === 'question'
                ? 'Start your question with how, what, why, etc.'
                : 'Enter a descriptive title'
            }
            onChange={handleTitleChange}
          />
        </label>
      </div>
      {postType === 'question' && (
        <div>
        <div className='between' >
          <label className='bottom'><b>
            Describe Your Problem:
            </b> 
          </label>
          <label className='bottom'> 
            <textarea className='content' value={content} onChange={handleContentChange}/>
          </label>
          </div>
          <div className='between' >
          <label><b>
            Tags:
            </b><input className='bottom1'
              type="text"
              value={tags}
              placeholder="Please add up to 3 tags to describe what your question is about e.g., Java"
              onChange={handleTagsChange}
            />
          </label>
          </div>
        
        </div>
      )}
      {postType === 'article' && (
        <div className='between'>
          <label><b>
            Abstract:
            </b>
            </label>
            <label>
            <textarea className='content'
              value={abstract}
              placeholder="Enter a 1-paragraph abstract"
              onChange={handleAbstractChange}
            />
          </label>
          <div className='between'>
          <label><b>
            Article Text:
            </b>
            <textarea className='bottom1'
              value={content}
              placeholder="Enter the article text"
              onChange={handleContentChange}
            />
          </label>
          </div>
        </div>
      )}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <div className='button-container'>
      <button className='button' onClick={handleSubmit}>Post</button>
    </div>
    </div>
  );
};

export default PostPage;