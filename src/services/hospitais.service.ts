import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HospitaisService {
    serveUrl = 'https://5cf9ae9df26e8c00146cff8d.mockapi.io/api/v1/hospital';

    constructor(private http: HttpClient) {}

    public getDate() : Observable<any>{
        return this.http.get(`${this.serveUrl}`);
    }

    public postDate(hospital:any){
        return this.http.post(this.serveUrl, hospital);
    }

    public remove(id: string) : Observable<any>{
        const url = `${this.serveUrl}/${id}`;
        return this.http.delete(url);
    }

}


