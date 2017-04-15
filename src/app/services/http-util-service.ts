import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpUtilService {
		
	
	private API_Youtube: string = 'https://www.googleapis.com/youtube/v3/playlistItems?';
    
	url(path: string) {
		return this.API_Youtube + path;
	}

	headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		let headers = new Headers(headersParams);
		let options = new RequestOptions({ headers: headers });
		return options;
	}

	extrairDados(response: Response) {
		let data = response.json();
	//	console.log(data.etag);
		return data || {};
	}

	processarErros(erro: any) {
		 console.log(erro.status);
		return Observable.throw(erro.status);
	}
}