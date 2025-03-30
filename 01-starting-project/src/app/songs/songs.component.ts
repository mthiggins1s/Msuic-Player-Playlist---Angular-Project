import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
 @Input() avatar!: string;
 @Input() name!: string;

  get imagePath() {
    return 'assets/songs/' + this.avatar;
  }

  onSelectSong() {
    alert(`You have selected the song: ${this.name}`);
  }
}
