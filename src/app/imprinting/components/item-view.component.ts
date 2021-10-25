import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  dealOptions,
  imprintOptions,
  penaltyOptions,
} from '../functions/const';
import { Item } from '../functions/type';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss'],
})
export class ItemViewComponent implements OnChanges {
  @Input() item!: Item;
  dealOptions: [string, number][] = [];
  imprintOptions: [string, number][] = [];
  penalty?: [string, number];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.item.currentValue) {
      const effects = Object.entries<number>(changes.item.currentValue.effects);
      this.dealOptions = effects.filter((eff) => dealOptions.includes(eff[0]));
      this.imprintOptions = effects.filter((eff) =>
        imprintOptions.includes(eff[0])
      );
      this.penalty = effects.find((eff) => penaltyOptions.includes(eff[0]));
    }
  }
}
