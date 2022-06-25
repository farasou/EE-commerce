import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-filter',
  templateUrl: './hero-filter.component.html',
  styleUrls: ['./hero-filter.component.scss']
})
export class HeroFilterComponent implements OnInit {

  categories: any[] = [
    {
      name: 'Vehicles',
      icon: '/assets/images/hero-section/car.svg'
    },
    {
      name: 'Furniture',
      icon: '/assets/images/hero-section/furniture.svg'
    },
    {
      name: 'Multimedia',
      icon: '/assets/images/hero-section/phone.svg'
    },
    {
      name: 'Home & Garden',
      icon: '/assets/images/hero-section/home.svg'
    },
    {
      name: 'Sports',
      icon: '/assets/images/hero-section/sport.svg'
    },
    {
      name: 'Clothes',
      icon: '/assets/images/hero-section/tshirt.svg'
    },
    {
      name: 'Jobs',
      icon: '/assets/images/hero-section/work.svg'
    },
  ]
  // TODO: STORE THESE CATEGORIES IN THE BACKEND AND CRUD THEM
  constructor() { }

  ngOnInit(): void {
  }

}
