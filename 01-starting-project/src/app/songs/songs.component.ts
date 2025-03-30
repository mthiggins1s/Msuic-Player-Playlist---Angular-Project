import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-songs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './songs.component.html',
  styleUrl: './songs.component.css'
})
export class SongsComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
  // allows us to emit custom values through the select property to any parent component that wants it.
  @Output() select = new EventEmitter(); 


  selectedSong: string | null = null; // Holds the selected song name

  get imagePath() {
    return 'assets/songs/' + this.avatar;
  }

  onSelectSong() {
    this.selectedSong = `You selected the song: ${this.name}`;
    this.select.emit(this.id);
  }
}
