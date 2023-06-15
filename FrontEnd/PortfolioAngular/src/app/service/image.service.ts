import { Injectable } from '@angular/core';
import { Storage, getDownloadURL, listAll, ref, uploadBytes } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url :string;
  images: string[];
  constructor(private storage: Storage) {
    this.images = [];
  }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0] ;
    const imgRef = ref(this.storage, `images/` + name)
    uploadBytes(imgRef, file)
    .then(res => {this.getImages()})
    .catch(err => console.log(err))
  } 

  getImages(){
    const imagesRef = ref(this.storage, 'images')
    listAll(imagesRef)
    .then(async res => {
      for (let item of res.items) {
        this.url = await getDownloadURL(item);
        this.images.push(this.url);
        console.log('La URL es: ' + this.images);
        
      }
    })
    .catch(err => console.log(err))
  }


}
