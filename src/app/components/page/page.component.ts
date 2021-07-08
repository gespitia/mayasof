import { Component, OnInit } from '@angular/core';

interface Post {
  img?: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  articulos: Post[] = [
    {
      title: 'Warum?',
      content: 'Natürlich lassen sich nicht alle Betriebsthemen ad hoc in die Cloud heben. Wir beleuchten alle Themen und Services Ihrer aktuellen IT und finden heraus, welche Services in Ihrem Unternehmen auch zukünftig vor Ort laufen müssen und welche sich problemlos in die Cloud verlagern lassen.',
    },
    {
      title: 'Wie?',
      content: 'Die HAFN IT evaluiert auf Basis strukturierter Vorgehensweise den Status Quo ihrer Services und Applikationen und dokumentiert die aktuelle Konfiguration. Dabei begleiten wir Sie im kompletten Umstellungsprozess auf eine hybride Infrastruktur, arbeitet im Schulterschluss mit Ihrer IT-Abteilung und kümmert sich darüber hinaus um die Schulung der Anwender.'
    },
    {
      img:'http://mvp.haeppie.com/wp-content/uploads/2021/05/hafnit_0002_content03.jpg',
      title: 'Was?',
      content: 'Besonders für Standardanwendungen gilt: Laufen sie cloudbasiert, sind Sie ein echtes Plus hinsichtlich Kosteneffizienz und Flexibilität. Wir nennen das Skalierbarkeit und meinen damit die präzise Anpassungsfähigkeit an Ihre momentanen Anforderungen'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
