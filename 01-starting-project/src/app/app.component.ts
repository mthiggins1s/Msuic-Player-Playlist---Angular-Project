import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SongsComponent } from "./songs/songs.component";
import { songs_list } from './song-list';

// Decorator; TS feature that adds metadata to the class.
@Component({
  selector: 'app-root', // tells Angular what elements it should look for in the HTML file to it can replace it with markup.
  standalone: true,
  imports: [HeaderComponent, SongsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
// class named AppComponent; being imported and passed to the bootstrapApplication.
export class AppComponent {
  songs = songs_list;
}
