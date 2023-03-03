export interface IData { 
    createdAt: string,
    name: string,
    avatar: string,
    booking: number,
    tours: number,
    hotels: number,
  id: number,
  vacancy: string,
  message: string,
}

export interface IState {
  data: IData[],
}