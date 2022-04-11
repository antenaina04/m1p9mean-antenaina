import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  selectedProfile: Profile = new Profile();
  profiles: Profile[] = [];
  readonly baseURL: 'http://localhost:3000/profiles' =
    'http://localhost:3000/profiles';

  constructor(private http: HttpClient) {}

  postProfile(profile: Profile) {
    return this.http.post(this.baseURL, profile);
  }

  getProfileList() {
    return this.http.get(this.baseURL);
  }

  getProfileByIdProfile(
    id_profile: string | null
  ): Observable<Profile> {
    return this.http.get<Profile>(this.baseURL + `/` + id_profile);
  }

  GetProfileByProfileName(
    profile_name: string | null
  ): Observable<Profile> {
    return this.http.get<Profile>(this.baseURL + `/GetProfileByProfileName/` + profile_name);
  }
}
