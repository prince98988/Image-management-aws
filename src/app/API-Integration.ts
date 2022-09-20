import { trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export type ImagesResponse ={
    name: string,
    presignedUrl: string
}

@Injectable()
export class ImageApiIntegration{

constructor(private http:HttpClient){}

isImagesLoaded:boolean = false
bucketImages:Array<ImagesResponse> = []

async getBucketImages(){
    console.log("hii")
    this.isImagesLoaded = false
    const data =await this.http.get<ImagesResponse>('https://localhost:7183/get-all-images?bucketName=prince98988&prefix=test-images').toPromise()
    .then(data => {
        var json = JSON.parse(JSON.stringify(data))
        this.bucketImages = json
        this.isImagesLoaded = true
    }).catch(
    error => {
        console.log("error")
        this.isImagesLoaded = false
    });
}


}
