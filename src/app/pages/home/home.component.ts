import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { LatestPostsComponent } from '../../components/latest-posts/latest-posts.component';
import { CardComponent } from "../../components/card/card.component";

@Component({
  selector: 'app-home',
  imports: [CommonModule, LatestPostsComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showLatest = true;


  mainPost = {
    image: 'example.png',
    date: 'Feb 12',
    readTime: '5 min',
    author: 'BORJA LOPEZ',
    title: 'Cada vez más gente usa ChatGPT para que lea libros por ella. Tiene ventajas y un enorme inconveniente',
    excerpt: 'Cada vez más estudiantes usan ChatGPT para "leer" libros. Es mucho más eficiente... pero también cambia la manera de procesar el conocimiento.'
  };

  secondaryPosts = [
    {
      image: 'example.png',
      date: 'Feb 13',
      readTime: '4 min',
      author: 'LUCIA RAMIREZ',
      title: '¿Puede la IA reemplazar el pensamiento crítico?',
      excerpt: 'Cada vez más estudiantes usan ChatGPT para "leer" libros. Es mucho más eficiente... pero también cambia la manera de procesar el conocimiento.'

    },
    {
      image: 'example.png',
      date: 'Feb 14',
      readTime: '6 min',
      author: 'CARLOS SANTOS',
      title: 'Los mejores hábitos digitales para emprendedores',
      excerpt: 'Cada vez más estudiantes usan ChatGPT para "leer" libros. Es mucho más eficiente... pero también cambia la manera de procesar el conocimiento.'

    }
  ];

  latestPosts = [
    {
      title: 'Cada vez más gente usa ChatGPT para que lea libros por ella. Tiene ventajas y un enorme inconveniente',
      excerpt: 'La primera mitad del verano fue de calor intenso. Ahora, esos días parecen lejanos...',
      date: 'Hace 5 horas',
      author: 'BORJA LOPEZ',
      image: 'example.png'
    },
    {
      title: 'Cada vez más gente usa ChatGPT para que lea libros por ella. Tiene ventajas y un enorme inconveniente',
      excerpt: 'La primera mitad del verano fue de calor intenso. Ahora, esos días parecen lejanos...',
      date: 'Hace 5 horas',
      author: 'BORJA LOPEZ',
      image: 'example.png'
    },
    {
      title: 'Cada vez más gente usa ChatGPT para que lea libros por ella. Tiene ventajas y un enorme inconveniente',
      excerpt: 'La primera mitad del verano fue de calor intenso. Ahora, esos días parecen lejanos...',
      date: 'Hace 5 horas',
      author: 'BORJA LOPEZ',
      image: 'example.png'
    },
    {
      title: 'Cada vez más gente usa ChatGPT para que lea libros por ella. Tiene ventajas y un enorme inconveniente',
      excerpt: 'La primera mitad del verano fue de calor intenso. Ahora, esos días parecen lejanos...',
      date: 'Hace 5 horas',
      author: 'BORJA LOPEZ',
      image: 'example.png'
    },
    {
      title: 'Cada vez más gente usa ChatGPT para que lea libros por ella. Tiene ventajas y un enorme inconveniente',
      excerpt: 'La primera mitad del verano fue de calor intenso. Ahora, esos días parecen lejanos...',
      date: 'Hace 5 horas',
      author: 'BORJA LOPEZ',
      image: 'example.png'
    },
    {
      title: 'Cada vez más gente usa ChatGPT para que lea libros por ella. Tiene ventajas y un enorme inconveniente',
      excerpt: 'La primera mitad del verano fue de calor intenso. Ahora, esos días parecen lejanos...',
      date: 'Hace 5 horas',
      author: 'BORJA LOPEZ',
      image: 'example.png'
    }
  ];

}
