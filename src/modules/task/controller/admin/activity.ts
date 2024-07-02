import { CoolController, BaseController } from '@cool-midway/core';
import { TaskActivityEntity } from '../../entity/activity'; 

/**
 * 任务-活动
 */
@CoolController({
  api: ['add', 'delete', 'update', 'info', 'list', 'page'],
  entity: TaskActivityEntity,
})
export class AdminTaskActivityController extends BaseController {}
