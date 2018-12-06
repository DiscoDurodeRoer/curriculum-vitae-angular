import { Injectable } from '@angular/core';
import { Http, RequestOptions,Headers  } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkService {

    private _webUrl: string;
    private _categoryId: number

    constructor(private http: Http) {

    }

    set webUrl(webUrl: string) {
        this._webUrl = webUrl;
    }

    set categoryId(categoryId: number) {
        this._categoryId = categoryId;
    }


    getPosts() {

        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=UTF-8');

        const url = this._webUrl + "/?json=get_category_posts&category_id=" + this._categoryId;
        return this.http.get(url, {headers: headers}).map(data => this.getData(data));

    }

    getData(data: any){
        const dataProcess = data.json();
        return dataProcess ? dataProcess.posts : [];
    }

}
