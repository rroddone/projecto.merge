import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FolderIcon from '@material-ui/icons/Folder';

const styles = theme => ({
  button: {
    margin: theme.spacing(10),
  },
  input: {
    display: 'none',
  },
});

class Blog extends React.Component {

  render () {
    // this.props.xxx
    return (
      <div>
        <Header/>
        <Item titulo="titulo de prueba" descripcion="estado alfa del blog... "/>
        <Item titulo="" descripcion="descripcion del item de prueba 2"/>
        <br/>
        <Title/>
        <Data/>
      </div>
    )
  }
}

export default Blog;

const Header = function () {
  return (
    <header>
       <h1>Ricky's first Blog</h1>
       </header>
    )
}

const Item = function (props) {
  return (
    <div>
       <h2>{props.titulo}</h2>
       <p>{props.descripcion}</p>
       </div>
    )
}

const Title = function () {
  return (
    <h3>
    <p class = "video">Un algo para que se diviertan...</p>
  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Super video</a>
    </h3>
  )
}

const Data = function () {
  return (
    <p class = "datos">Aparte de ser mi primer blog, aqui hay algunos datos curiosos sobre mi persona</p>
    <ul>
      <li class="favs">no me gusta la guayaba</li>
      <li class="favs">tampoco el mburucuya</li>
      <li class="favs">nunca puedo dormir a una hora decente...</li>
      <li class="favs">le tengo miedo a los ratones... (creo que es de familia)</li>
    </ul>
  )
}

// function Header(//atributos//) {
//   return (
//     <header>
//        <h1>Ricky's first Blog</h1>
//        </header>
//     )
// }


// const head = (
//   <html>
//     <head>
//      <style>
//        body {
//          margin:25px;
//          }
//
//        div.polaroid {
//          width: 80%;
//          background-color: white;
//          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//          margin-bottom: 25px;
//        }
//
//        div.container {
//          text-align: center;
//          padding: 10px 20px;
//        }
//      </style>
//     </head>
// </html>
// );
//
//
//  const header(
//    <html>
//     <body>
//       <header>
//         <h1>Ricky's first Blog</h1>
//       </header>
//       <div>
//         <h2>Titulo del blog</h2>
//       </div>
//       <h3>
//         <p class = "tit.1">Estado alfa de un blog...</p>
//       </h3>
//       </body>
//     </html>
//  );
//
//
//
// const video(
//   <p class = "video">Un algo para que se diviertan...</p>
//     <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Super video</a>
// );
