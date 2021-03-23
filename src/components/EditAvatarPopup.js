import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext, useState, useEffect } from 'react';

export default function EditProfilePopup(props) {
  const [avatar, setAvatar] = useState('');

  const currentUser = useContext(CurrentUserContext);

  function handleChange(e) {
    setAvatar(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar,
    });
    props.setSubmitStatus(true);
  }

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <PopupWithForm
      modalName='type_avatar'
      formType='type_avatar'
      formTitle='Edit Profile Picture'
      submitText={props.submitStatus ? 'Saving...' : 'Save'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <Input
        type='url'
        name='avatar'
        placeholder='Image Link'
        inputType='type_avatar'
        id='avatar-url-error'
        handleChange={handleChange}
        value={avatar}
      />
    </PopupWithForm>
  );
}
