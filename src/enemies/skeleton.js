/* eslint-disable import/extensions */
import dungeon from '../dungeon.js';
import BaseEnemy from './proto/baseEnemy.js';

export default class Skeleton extends BaseEnemy {
  constructor(x, y) {
    super(x, y);
    this.name = 'Skeleton';
    this.movementPoints = 3;
    this.actionPoints = 1;
    this.healthPoints = 4;
    this.refreshRates = {
      movementPoints: 3,
      actionPoints: 1,
      healthPoints: 0,
    };

    this.damage = {
      min: 1,
      max: 4,
    };

    this.x = x;
    this.y = y;
    this.tile = 26;
    this.type = 'enemy';
    this.weapon.name = 'pike';

    dungeon.initializeEntity(this);
  }
}
