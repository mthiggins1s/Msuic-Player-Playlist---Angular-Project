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
  @Input() selectedSongId!: string | null; // Input to receive the selected song ID

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/songs/' + this.avatar;
  }

  get isSelected() {
    return this.id === this.selectedSongId; // Check if this song is selected
  }

  onSelectSong() {
    this.select.emit(this.id); // Emit the song ID to the parent
  }
}
