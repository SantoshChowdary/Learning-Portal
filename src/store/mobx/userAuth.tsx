import {makeAutoObservable} from 'mobx';

class UserAuth {
    isUserLoggedIn: boolean = false;
    userDetails = {
        userName : "",
        phoneNumber : "",
    }

    constructor(){
        makeAutoObservable(this)
    }

    acceptUserLoginStatus = (userData : any) => {
        this.isUserLoggedIn = true;
        const {userName, phoneNumber} = userData;
        this.userDetails = {
            userName, phoneNumber
        }
    }

    acceptUserLogout = () => {
        this.isUserLoggedIn = false;
        this.userDetails = {
            userName : "", phoneNumber : ""
        }
    }
}

export const userAuthStore = new UserAuth()