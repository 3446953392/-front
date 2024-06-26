import { CoolController, BaseController } from '@cool-midway/core';
import { DictResourceScheduleEntity } from '../../entity/schedule';

/**
 * 字典-资源计划
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DictResourceScheduleEntity
})
export class AdminDictResourceScheduleController extends BaseController {}
