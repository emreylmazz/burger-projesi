
import{} from 'react';
import BannerImage from '../assets/banneryeni.jpg'
import '../styles/About.css'

 export const About = () => {
  return (
    <div className='about'>
<div className='aboutTop'style={{backgroundImage:`url(${BannerImage})`}} ></div>
    <div className='aboutBottom'>
      <h1>Hakkımızda</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores eos rerum quaerat, ut consequuntur cum molestias eligendi voluptatem ipsa eius molestiae ducimus modi officiis amet maiores inventore nisi cumque minus? Lorem ipsum,
         dolor sit amet consectetur adipisicing elit. Voluptatum consequuntur maxime in et sequi facilis, aperiam officiis nihil cupiditate nostrum eum voluptate odit consequatur 
         esse dolorum fugit nisi aut est? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores eum tenetur magnam nisi mollitia
          perferendis odio aut dicta porro, ea, qui labore eius molestias rerum commodi maiores? Expedita, quasi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam beatae maiores officia possimus
           earum vero laboriosam tempora minus! Nemo incidunt, debitis animi veniam sapiente vel! Deserunt voluptates reiciendis dolor reprehenderit.</p>
    </div>
    </div>
  )
}

export default About