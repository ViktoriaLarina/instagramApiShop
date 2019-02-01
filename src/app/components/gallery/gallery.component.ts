import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {InstagramService} from '@services/instagram.service';
import {Image, ImagesData} from '@models/images';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  images: Image[];
  isResponse: boolean;

  constructor(private router: Router, private service: InstagramService) {
  }

  ngOnInit() {
    this.images = [];
    const lengthOfToken = 13;
    const start = this.router.url.indexOf('access_token=') + lengthOfToken;
    const end = this.router.url.indexOf('&token_type');
    this.service.getImages(this.router.url.slice(start)).subscribe((data: ImagesData) => {
      this.isResponse = true;
      this.images = data.data;
    });
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }

}
