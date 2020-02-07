import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieGateway {
  constructor(private _http: HttpClient) {}
  fetchMovieList() {
    return this._http.get(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
    );
  }
  fetchMovieDetail(id: string): Observable<any> {
    return this._http.get(
      "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=" + id
    );
  }
}
