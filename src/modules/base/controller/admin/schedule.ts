import { CoolController, BaseController } from '@cool-midway/core';
import { BaseResourceScheduleEntity } from '../../entity/schedule';

/**
 * 基础-资源调度
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: BaseResourceScheduleEntity
})
export class AdminBaseResourceScheduleController extends BaseController {}
