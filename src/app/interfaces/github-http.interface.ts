import { HttpClient } from "@angular/common/http"

export interface GithubHttpInterface {
    getUsers(): HttpClient
    getUserByUsername(): HttpClient
}