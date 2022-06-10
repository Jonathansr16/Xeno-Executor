import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogdataService {

  constructor() { }


  private articles:Articles[] = [
      {
        id: "1",
        category: 'nft',
        title: "Beeple sold an NFT for $69 million",
        description: "Today, an NFT of his work sold for $69 million at Christie’s. The sale positions him “among the top three most valuable living artists,” according to the auction house.",
        imgArticle: "assets/img/beeple.webp",
        imgAuthor: 'Adam McCauley',
        date: "04/06/2022",
        author: "CriptoRecarga",
        authorPages: "assets/img/author.png"
      }, 
      {
        id: "2",
        category: "nft",
        title: "What Is An NFT? Non-Fungible Tokens Explained",
        description: "Collins Dictionary has announced that its Word of the Year 2021 is NFT, leading many to wonder what NFTs actually are. Here’s everything you need to know about the new phenomenon.",
        imgArticle: "assets/img/blog_nft.jpg",
        date: "04/06/2022",
        author: "CriptoRecarga", 
        authorPages: "assets/img/author.png"
      },

      {
        id: "3",
        category: "Criptocurrencies",
        title: "Top cryptocurrencies to invest in 2022",
        description: "From Bitcoin and Ethereum to Dogecoin and Tether, there are thousands of different cryptocurrencies, which can make it overwhelming when you’re first getting started in the world of crypto.",
        imgArticle: "assets/img/blog_cryptos.webp",
        date: "04/06/2022",
        author: "CriptoRecarga", 
        authorPages: "assets/img/author.png"
      }

  ];

  getArticles(): Articles[]{
    return this.articles;
  }

  getArticle(id:any) {
    return this.articles[id];
  }

}


export interface Articles {
  id?: string;
  category: string;
  title: string;
  description: string;
  imgArticle: string;
  imgAuthor?: string;
  date: string;
  author: string;
  authorPages: string
}

