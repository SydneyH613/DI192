import { Component } from 'react';
import data from '../data/complexData.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h3>Social Medias</h3>
        <ul>
          {data.SocialMedias.map((social, index) => (
            <li key={index}>
              {social.name}: <a href={social.url}>{social.url}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
