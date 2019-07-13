import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, ElementRef, ViewChild, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatAutocomplete} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Post } from 'src/app/_models/post.model';

/**
 * Handles the creation of tags for blog posts
 * TODO Refactor behavior so it takes in an async post instead of making its own calls to the server
 */
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  private postDoc: AngularFirestoreDocument<Post>; // Reference to post
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA]; // Seperators for the tags
  tagCtrl = new FormControl(); // Form CTRL for tags
  filteredTags: Observable<string[]>;
  tags: string[] = ['Machine Learning'];
  // List of all the possible tags for autofill
  alltags: string[] = ['Machine Learning', 'AI', 'Deep Racer', 'Jetson Car', 'R.A.C.E.', 'News', 'Press'];

  @Input() id: string; // ID of the blog
  // @Input() tagsInput: string[];
  @ViewChild('tagInput', {static: false}) tagInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;

  constructor(
    private afs: AngularFirestore
  ) {
    this.filteredTags = this.tagCtrl.valueChanges.pipe(
        startWith(null),
        map((tag: string | null) => tag ? this._filter(tag) : this.alltags.slice()));
  }

  async ngOnInit() {
    // TODO Refactor this, this is messy because it's a double subscription to postDoc for no reason, just can't figure out async
    this.postDoc = this.afs.doc('posts/' + this.id);
    this.postDoc.valueChanges().subscribe(v => {
      this.tags = v.tags;
    });  }

  /**
   * Add a new chiop
   * @param event MatChipInputEvent
   */
  add(event: MatChipInputEvent): void {
    // Add tag only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen && event.value) {
      const input = event.input;
      const value = event.value;

      // Add our tag
      if ((value || '').trim()) {
        this.tags.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      // Reset form ctrl
      this.tagCtrl.setValue(null);
    }
    // Updates post with new tags
    this.postDoc.update({
      tags: this.tags
    });
  }

  /**
   * Removes tags from the list
   * @param tag text of tag
   */
  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    this.postDoc.update({
      tags: this.tags
    });
  }

  /**
   * Handles selection of autocomplete tag
   * @param event Event when autocomplete option is selected
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    // Pushes the selected autocomplete to the tag list
    this.tags.push(event.option.viewValue);
    // Resets the input
    this.tagCtrl.setValue(null);
    // Updates the database
    this.postDoc.update({
      tags: this.tags
    });
  }

  /**
   * Method to filter tags and make sure they're usable
   */
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.alltags.filter(tag => tag.toLowerCase().indexOf(filterValue) === 0);
  }
}
