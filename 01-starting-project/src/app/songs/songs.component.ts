import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  @Output() select = new EventEmitter<string>();

  selectedSong: string | null = null; // Holds the selected song name

  get imagePath() {
    return 'assets/songs/' + this.avatar;
  }

  onSelectSong() {
    // Directly set the selected song name
    this.selectedSong = this.name;
    this.select.emit(this.id); // Emit the song ID if needed
  }
}
