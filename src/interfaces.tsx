export interface IBook {
    id:number,
    rating:number,
    img_book:string | null,
    title:string,
    author:string,
    Genre: string,
    annotation:string,
    date:string
    owner:number
}
export interface IGetListBook {
    PartListBook:Array<IBook>,
    CountBooks : number
}
export interface IUser {
    id: number,
    Login: string,
    Password: string,
    tolen: boolean
}
export interface IAuthorization {
    Authorization: (login:string, password:string) => void,
    User:IUser,
    errorMessage:string
}
export interface IAuthentication {
    AuthUser: (User: IUser) => void
    User: IUser
    LogoutUser: () => void
    ChangesErrorMassage: () => void
}