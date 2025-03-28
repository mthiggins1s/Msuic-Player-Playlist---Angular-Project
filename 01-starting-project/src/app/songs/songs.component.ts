import { Component } from '@angular/core';

import { songs_list } from '../song-list';

const randomIndex = Math.floor(Math.random() * songs_list.length)

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  selectedSong = songs_list[randomIndex];
}
