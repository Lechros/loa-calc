import { Component, Input } from '@angular/core';
import { api, data, GameState } from '../../../../.yalc/@mokoko/elixir';

@Component({
  selector: 'app-elixir-effect',
  templateUrl: './elixir-effect.component.html',
  styleUrls: ['./elixir-effect.component.scss'],
})
export class ElixirEffectComponent {
  @Input() gameState!: GameState;
  @Input() pickRatios!: number[];
  @Input() luckyRatios!: number[];
  @Input() index!: number;

  constructor() {}

  get valueSquares() {
    return Array.from({ length: this.gameState.config.maxEnchant }, (_, i) =>
      data.effectLevelTable[i] !== data.effectLevelTable[i + 1]
        ? data.effectLevelTable[i + 1]
        : null
    );
  }

  get effect() {
    return this.gameState.effects[this.index];
  }

  get pickRatio() {
    return this.pickRatios[this.index];
  }

  get luckyRatio() {
    return this.luckyRatios[this.index];
  }
}
