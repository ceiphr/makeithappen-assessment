export class Drink {
  constructor(drinkData) {
    this.image = drinkData.strDrinkThumb;
    this.name = drinkData.strDrink;
    this.id = drinkData.idDrink;
  }
}
