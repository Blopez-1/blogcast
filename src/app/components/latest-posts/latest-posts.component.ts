import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-latest-posts',
  imports: [CommonModule],
  templateUrl: './latest-posts.component.html',
  styleUrl: './latest-posts.component.scss'
})
export class LatestPostsComponent {
  @Input() posts: any[] = [];


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
