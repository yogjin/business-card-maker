import { Card } from 'common/interfaces';
import React from 'react';
import { FC } from 'react';

interface Card_edit_formProps {
  card: Card;
}

const Card_edit_form: FC<Card_edit_formProps> = ({ card }) => {
  const { name, company, theme, title, email, message } = card;
  return (
    <form>
      <input type="text" name="name" value={name} />
      <input type="text" name="company" value={company} />
      <select name="theme">
        <option value={theme}>light</option>
        <option value={theme}>dark</option>
        <option value={theme}>colorful</option>
      </select>
      <input type="text" name="title" value={title} />
      <input type="text" name="email" value={email} />
      <textarea name="message" value={message}></textarea>
    </form>
  );
};

export default Card_edit_form;
