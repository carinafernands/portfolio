import { Component } from '@angular/core';
import { ICertificados } from '../../interface/ICertificados.interface';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.scss']
})
export class CertificadosComponent {

public arrayCertificados = <ICertificados[]> [
  {
    summary:{
      strong: 'Back-End com JavaScript',
      p: 'Softex Recife',
    },
    text:'Curso realizado pela softex recife no curso de formação acelerada em programação back-end com JavaScript com carga horária de 144h',
  },
  {
    summary:{
      strong: 'Angular - TS do básico ao avançado',
      p: 'Udemy',
    },
    text:'Curso de Angular 2 (v17+) - Typescript do básico ao avançado com o instrutor Denner Troquatte, com carga horária de 45 horas',
  },
  {
    summary:{
      strong: 'Fundamentos de front-end web',
      p: 'Cesar School',
    },
    text:'Módulo fundamentos de front-end web da Formação Acelerada em Soluções de Techdesign(FAST)',
  },

];

trackByFn(index: number, item: any): number{
  return index;
}

}
