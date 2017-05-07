namespace petShopApp {

class PetListController {
  public dogs;
  public bunnies;

  constructor() {
    this.dogs = [
      {id:1, name:'Muttweather', image:"http://s5.tinypic.com/98rq7t_th.jpg"},
      {id:2, name:'Felony', image:"http://s5.tinypic.com/2uz2i2w_th.jpg"},
      {id:3, name:'Zangief', image:"http://s5.tinypic.com/etf9uc_th.jpg"}
    ];
    this.bunnies = [
      {id:1, name:'Thumper', image:"http://s5.tinypic.com/2nrhq8o_th.jpg"},
      {id:2, name:'Ohare', image:"http://s5.tinypic.com/fkmkgm_th.jpg"},
      {id:3, name:'FoodChain', image:"http://s5.tinypic.com/14c5gzb_th.jpg"}
    ];
  }

}



angular.module("petShopApp").controller("PetListController", PetListController);

}
