import { makeAutoObservable } from 'mobx'

interface auth {
  token: string
  userId: string
}

export default new (class implements auth {
  token
  userId

  constructor() {
    makeAutoObservable(this)
  }

  setToken = (token: string): void => {
    this.token = token
  }
  setUserId = (userId: string): void => {
    this.userId = userId
  }
})()
