/**
 * Base class providing basic persistence operations for accessing
 * and modifying a collection of entities in the underlying local storage.
 */
import uuid from 'uuid';
import moment from 'moment';
import _ from 'lodash';

import LocalStorage from './local_storage';

export default class EntityStore {
  constructor(entityType) {
    if (!entityType) {
      throw new Error('Entity type should be provided when creating EntityStore.');
    }
    this._entityType = entityType;
  }

  _loadEntities() {
    return LocalStorage.get(this._entityType) || [];
  }

  _store(entities) {
    LocalStorage.set(this._entityType, entities);
  }

  create(template) {
    const now = moment.utc().valueOf();
    const entity = _.defaults({}, template, {
      id: uuid(),
      created: now
    });
    const entities = this._loadEntities();

    entities.push(entity);
    this._store(entities);

    return entity;
  }

  find(template) {
    const entities = this._loadEntities();

    if (!template) {
      return entities;
    }

    return _.filter(entities, _.matches(template));
  }

  findOne(template) {
    const entities = this._loadEntities();

    return _.find(entities, _.matches(template));
  }

  findOrCreate(template) {
    const target = this.findOne(template);

    if (!target) {
      return this.create(template);
    }

    return target;
  }

  update(template, updateTemplate) {
    const entities = this._loadEntities();
    const targets = _.filter(entities, template);
    const rest = _.reject(entities, template);

    const updated = _.map(targets, target => _.assign(
        {},
        target,
        _.defaults(updateTemplate, {updatedAt: moment.utc().valueOf()})
      ));

    this._store(rest.concat(updated));

    return updated;
  }

  updateOne(template, updateTemplate) {
    const entities = this._loadEntities();
    const target = _.find(entities, template);
    const rest = _.reject(entities, target);

    const updated = _.assign(
      {},
      target,
      _.defaults(updateTemplate, {updatedAt: moment.utc().valueOf()})
    );

    this._store(rest.concat([updated]));

    return updated;
  }

  remove(template) {
    const entities = this._loadEntities();

    if (!template) {
      this._store([]);

      return entities;
    }
    const targets = _.filter(entities, template);
    const rest = _.reject(entities, template);

    this._store(rest);

    return targets;
  }
}
