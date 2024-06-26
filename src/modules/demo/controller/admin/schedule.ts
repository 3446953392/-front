import { CoolController, BaseController } from '@cool-midway/core';
import { DemoResourceScheduleEntity } from '../../entity/schedule';

/**
 * demo-资源调度
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: DemoResourceScheduleEntity,
  pageQueryOp: {
    keyWordLikeFields: ['activity', 'resourceName'],
    fieldEq: ['activity']
  }
})
export class AdminResourceScheduleController extends BaseController {}
