import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomedataService {


  private nfts: Nft[] = [
    {
      id: 1,
      collection_auth: "Otherdeed for Otherside",
      collection_img: "assets/img/top-nft-autor-1.jpg",
      volume: "1364,88",
      volume_img: "assets/img/ethereum-icon.png",
      latest_sales: "+19.51%",
      price: 3,
      owners: "34.4K",
      items: "98.2K"
    },

    {
      id: 2,
      collection_auth: "Okay Bears",
      collection_img: "assets/img/top-nft-autor-2.png",
      volume: "43,862,95",
      volume_img: "assets/img/solana-icon.svg",
      latest_sales: "-61.76%",
      price: 238,
      owners: "5.4K",
      items: "10.0K"
    },

    {
      id: 3,
      collection_auth: "BORED APE YACHT CLUB",
      collection_img: "assets/img/top-nft-autor-3.png",
      volume: "119,75",
      volume_img: "assets/img/ethereum-icon.png",
      latest_sales: "+27.03%",
      price: 100,
      owners: "6.3K",
      items: "10.0K"
    },

    {
      id: 4,
      collection_auth: "SKULLBOT BIKER GANG",
      collection_img: "assets/img/top-nft-autor-4.png",
      volume: "30.206",
      volume_img: "assets/img/solana-icon.svg",
      latest_sales: "+23758.88%",
      price: 6.5,
      owners: "1.6K",
      items: "3.7K"
    },

    {
      id: 5,
      collection_auth: "KARAFURU GACHAPON",
      collection_img: "assets/img/top-nft-autor-5.png",
      volume: "755,67",
      volume_img: "assets/img/ethereum-icon.png",
      latest_sales: "---",
      price:  0.47,
      owners: "2.8K",
      items: "4.0K"
    },

    {
      id: 6,
      collection_auth: "BORED APE SOLANA CLUB",
      collection_img: "assets/img/top-nft-autor-6.png",
      volume: "24,663,81",
      volume_img: "assets/img//solana-icon.svg",
      latest_sales: "+169.57%",
      price: 28,
      owners: "2.3K",
      items: "6.0K"
    },

    {
      id: 7,
      collection_auth: "PXN: GHOST DIVISION",
      collection_img: "assets/img/top-nft-autor-7.jpg",
      volume: "603,67",
      volume_img: "assets/img/ethereum-icon.png",
      latest_sales: "-24.01%",
      price: 1.69,
      owners: "6.4K",
      items: "10.0K"
    },
    {
      id: 8,
      collection_auth: "AZUKI",
      collection_img: "assets/img/top-nft-autor-8.jpg",
      volume: "495,69",
      volume_img: "assets/img/ethereum-icon.png",
      latest_sales: "+29.12%",
      price: 13.75,
      owners: "5.2K",
      items: "10.0K"
    },
    {
      id: 9,
      collection_auth: "REPTILIAN RENEGADE (LIZARDS)",
      collection_img: "assets/img/top-nft-autor-9.png",
      volume: "15.780,18",
      volume_img: "assets/img/solana-icon.svg",
      latest_sales: "-70.11%",
      price: 29.19,
      owners: "3.3K",
      items: "4.0K"
    },
    {
      id: 10,
      collection_auth: "CLONE X - X TAKASHI MURAKAMI",
      collection_img: "assets/img/top-nft-autor-10.png",
      volume: "419,02",
      volume_img: "assets/img/ethereum-icon.png",
      latest_sales: "-26.46%",
      price: 14.5,
      owners: "9.3K",
      items: "19.3K"
    },
   
 
  ];

  private galleries: gallery[] = [
    {
    
      url: "toomuchlag",
      category: "Art",
      authorImg: "assets/img/author_nft-1.jpg",
      author: "toomuchlag",
      img: "assets/img/nfts_2.jpg",
      title: "Spirit / Hero",
      price: 0.04,
      icon: "assets/img/ethereum-icon.png",
      link: "https://opensea.io/collection/le-anime-by-toomuchlag"
    },

    {
    
      url: "ALTAVA-Second-Skin",
      category: "Collectible",
      authorImg: "assets/img/author_nft-2.png",
      author: "ALTAVA Second Skin",
      img: "assets/img/nft_collectible.png",
      title: "Second Skin #704",
      price: 0.95,
      icon: "assets/img/ethereum-icon.png",
      link: "https://opensea.io/collection/altava-second-skin-metamorphosis"
    },

    {
   
      url: "The-Dark-Days",
      category: "Photography",
      authorImg: "assets/img/author_nft3.gif",
      author: "The Dark Days",
      img: "assets/img/nft_photography.jpg",
      title: "#16 Hidra",
      price: 0.5,
      icon: "assets/img/ethereum-icon.png",
      link: "https://opensea.io/collection/the-dark-days"
    },

    {
    
      url: 'Boryoku-Dragonz',
      category: "Virtual World",
      authorImg: "assets/img/author_nft4.gif",
      author: "Boryoku Dragonz",
      img: "assets/img/nft_vitual-world.png",
      title: "Boryoku Dragonz #724",
      price: 222,
      icon: "assets/img/solana-icon.svg",
      link: "https://opensea.io/collection/boryoku-dragonz"
    },

    {
     
      url: 'Snoop-Dogg-on-Sound-XYZ',
      category: "Music",
      authorImg: "assets/img/author_nft4.gif",
      author: "Snoop Dogg on Sound XYZ",
      img: "assets/img/music.jpg",
      title: "Death Row Session: Vol. 2 (420 Edition) #864",
      price: 0.074,
      icon: "assets/img/ethereum-icon.png",
      link: "https://opensea.io/collection/boryoku-dragonz"
    },

    {
   
      url: 'McLaren-MSO-LAB-Genesis',
      category: "Sport",
      authorImg: "assets/img/author_nft4.gif",
      author: "McLaren MSO LAB Genesis",
      img: "assets/img/sport.png",
      title: "MSO LAB Genesis #1387",
      price: 0.31,
      icon: "assets/img/ethereum-icon.png",
      link: "https://opensea.io/collection/boryoku-dragonz"
    }

  ];

  constructor() { }

  getNFT(): Nft[]{
    return this.nfts;
  }


 getGallery(id: number) {
    return this.galleries[id]
 }

  getGalleries(): gallery[] {
    return this.galleries;
  }
  
  
  searchCollection(termino: string): gallery[] {

    let collectionArr: gallery[];
    termino= termino.toLowerCase();
    for(let i=0; i< this.galleries.length; i++) {

      let collection= this.galleries[i];
      let title= collection.title.toLowerCase();

      if(title.indexOf(termino) >=0) {
        collection.idx = i;
        collectionArr.push(collection);
      }
    }

    return collectionArr;
  }


} //close class



export interface Nft {
  id?: number;
  collection_auth: string;
  collection_img: string;
  volume: string;
  volume_img: string;
  latest_sales: string;
  price: number;
  owners: string;
  items: string;
}

export interface gallery {
  url?: string;
  category: string;
  authorImg: string;
  author: string;
  img: string;
  title: string;
  price: number;
  icon: string;
  link: string;
  idx?: number;
}
