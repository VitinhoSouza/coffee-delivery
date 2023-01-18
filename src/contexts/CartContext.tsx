import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';

import coffee1 from '../assets/img-coffees/1.png';
import coffee2 from '../assets/img-coffees/2.png'; 
import coffee3 from '../assets/img-coffees/3.png'; 
import coffee4 from '../assets/img-coffees/4.png'; 
import coffee5 from '../assets/img-coffees/5.png'; 
import coffee6 from '../assets/img-coffees/6.png'; 
import coffee7 from '../assets/img-coffees/7.png'; 
import coffee8 from '../assets/img-coffees/8.png'; 
import coffee9 from '../assets/img-coffees/9.png'; 
import coffee10 from '../assets/img-coffees/10.png'; 
import coffee11 from '../assets/img-coffees/11.png'; 
import coffee12 from '../assets/img-coffees/12.png'; 
import coffee13 from '../assets/img-coffees/13.png'; 
import coffee14 from '../assets/img-coffees/14.png'; 

export const coffeeProducts = [
  {
    id: "1",
    name: "Expresso Tradicional",
    description: "O tradicional café feito com água quente e grãos moídos",
    tags: ["TRADICIONAL"],
    imgSrc: coffee1,
  },
  {
    id: "2",
    name: "Expresso Americano",
    description: "Expresso diluído, menos intenso que o tradicional",
    tags: ["TRADICIONAL"],
    imgSrc: coffee2,
  },
  {
    id: "3",
    name: "Expresso Cremoso",
    description: "Café expresso tradicional com espuma cremosa",
    tags: ["TRADICIONAL"],
    imgSrc: coffee3,
  },
  {
    id: "4",
    name: "Expresso Gelado",
    description: "Bebida preparada com café expresso e cubos de gelo",
    tags: ["TRADICIONAL", "GELADO"],
    imgSrc: coffee4,
  },
  {
    id: "5",
    name: "Café com Leite",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    tags: ["TRADICIONAL", "COM LEITE"],
    imgSrc: coffee5,
  },
  {
    id: "6",
    name: "Latte",
    description:
      "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    tags: ["TRADICIONAL", "COM LEITE"],
    imgSrc: coffee6,
  },
  {
    id: "7",
    name: "Capuccino",
    description:
      "Bebida com canela feita de doses iguais de café, leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    imgSrc: coffee7,
  },
  {
    id: "8",
    name: "Macchiato",
    description:
      "Café expresso misturado com um pouco de leite quente e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    imgSrc: coffee8,
  },
  {
    id: "9",
    name: "Mocaccino",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    tags: ["TRADICIONAL", "COM LEITE"],
    imgSrc: coffee9,
  },
  {
    id: "10",
    name: "Chocolate Quente",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    tags: ["ESPECIAL", "COM LEITE"],
    imgSrc: coffee10,

  },
  {
    id: "11",
    name: "Cubano",
    description:
      "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    imgSrc: coffee11,

  },
  {
    id: "12",
    name: "Havaiano",
    description: "Bebida adocicada preparada com café e leite de coco",
    tags: ["ESPECIAL"],
    imgSrc: coffee12,

  },
  {
    id: "13",
    name: "Árabe",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    tags: ["ESPECIAL"],
    imgSrc: coffee13,

  },
  {
    id: "14",
    name: "Irlandês",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    imgSrc: coffee14,
  },
];

export type CoffeProductProps = {
  id: string;
  name: string;
  description: string;
  tags: string[];
  imgSrc: string;
};

export type SelectedsProducts = {
  idCoffee: string;
  quantity: number;
}

interface CartContextProps {
  coffeeProducts: CoffeProductProps[];
  selectedsProducts: SelectedsProducts[];
  updateItemCart: (itemId: string, quantity: number) => void;
  removeItemToCart: (itemId: string) => void;
  clearItemsCart: () => void;
}

export const CartContext = createContext({} as CartContextProps);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

  const [selectedsProducts, setSelectedsProducts] = useState<SelectedsProducts[]>([]);

  function updateItemCart(itemId: string, quantity: number){
    const item = selectedsProducts.find(product => product.idCoffee === itemId);

    if(item){
      setSelectedsProducts(
        selectedsProducts.map(
          product => product.idCoffee === itemId ?
            {...product, quantity}
            : {...product}
        )
      )
    }

    else{
      const newProduct = {
        idCoffee: itemId,
        quantity
      }
      setSelectedsProducts(
        [...selectedsProducts, newProduct]
      )
    }
  }

  function removeItemToCart(itemId: string){
    const newItems = selectedsProducts.filter(product => product.idCoffee !== itemId);
    setSelectedsProducts(newItems);
  }

  function clearItemsCart(){
    setSelectedsProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        coffeeProducts,
        selectedsProducts,
        updateItemCart,
        removeItemToCart,
        clearItemsCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
