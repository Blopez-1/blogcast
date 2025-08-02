import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpotlightCardComponent } from "../../components/spotlight-card/spotlight-card.component";
import { CardComponent } from '../../components/card/card.component';
import { MainCardComponent } from '../../components/main-card/main-card.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardComponent, SpotlightCardComponent,  MainCardComponent],
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

  posts = [
    {
      title: 'Cada vez más gente usa ChatGPT para que lea libros por ella. Tiene ventajas y un enorme inconveniente',
      excerpt: 'La primera mitad del verano fue de calor intenso. Ahora, esos días parecen lejanos...',
      date: 'Hace 5 horas',
      author: 'BORJA LOPEZ',
      image: 'example.png'
    },
    {
      title: '5 hábitos que mejoran tu enfoque en el trabajo',
      excerpt: 'Técnicas sencillas para ganar claridad y productividad.',
      date: 'Hace 8 horas',
      author: 'MARÍA PÉREZ',
      image: 'example.png'
    },
    {
      title: 'El futuro de la alimentación: ¿sin carne?',
      excerpt: 'Nuevas alternativas para reducir el impacto ambiental.',
      date: 'Ayer',
      author: 'JORGE RAMOS',
      image: 'example.png'
    },
    {
      title: '¿Qué es el minimalismo digital y cómo puede ayudarte?',
      excerpt: 'Una forma de reducir ruido mental y mejorar la calidad de vida.',
      date: 'Hace 2 días',
      author: 'ANA MARTÍN',
      image: 'example.png'
    },
    {
      title: '¿Qué es el minimalismo digital y cómo puede ayudarte?',
      excerpt: 'Una forma de reducir ruido mental y mejorar la calidad de vida.',
      date: 'Hace 2 días',
      author: 'ANA MARTÍN',
      image: 'example.png'
    }
  ];


}
