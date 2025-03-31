import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SongsComponent } from "./songs/songs.component";
import { songs_list } from './song-list';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, SongsComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  songs = songs_list;
  selectedSongId: string | null = null;

  onSelectedSong(id: string) {
    this.selectedSongId = id; // Update the selected song ID
  }
}
